const { execSync } = require('child_process');

// Function to get the previous tag
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

// Dynamically set the release commit message format
module.exports = {
  releaseCommitMessageFormat: `chore(release): :bookmark: bump version ${getPreviousTag()} → {{currentTag}}`,
};
