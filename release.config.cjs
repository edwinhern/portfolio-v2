const { execSync } = require('child_process');

function getPreviousTag() {
  try {
    return execSync('git describe --abbrev=0 --tags $(git rev-list --tags --skip=1 --max-count=1)', {
      encoding: 'utf-8',
    }).trim();
  } catch (error) {
    console.error('Error getting previous tag:', error);
    return 'unknown';
  }
}

/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer', // Analyzes your commit messages and determines the type of version bump
    '@semantic-release/release-notes-generator', // Generates release notes based on commit messages
    '@semantic-release/changelog', // Updates the CHANGELOG.md file
    '@semantic-release/npm', // If you're publishing to npm, this updates the version in package.json and publishes the package
    '@semantic-release/github', // Creates a GitHub release
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
        message: `chore(release): :bookmark: bump version v${getPreviousTag()} → ${nextRelease.version}`,
      },
    ],
  ],
};
