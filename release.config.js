// release.config.js
export const branches = ['main'];
export const plugins = [
  '@semantic-release/commit-analyzer', // Analyzes your commit messages and determines the type of version bump
  '@semantic-release/release-notes-generator', // Generates release notes based on commit messages
  '@semantic-release/changelog', // Updates the CHANGELOG.md file
  '@semantic-release/npm', // If you're publishing to npm, this updates the version in package.json and publishes the package
  '@semantic-release/github', // Creates a GitHub release
  [
    '@semantic-release/git',
    {
      assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'], // List of files to commit to Git
      message: 'chore(release): :bookmark: bump version ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}', // Custom commit message for the release
    },
  ],
];
