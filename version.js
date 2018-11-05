const {
    gitDescribe,
    gitDescribeSync
} = require('git-describe');

const gitInfo = gitDescribeSync(__dirname, {
    longSemver: true,
    dirtySemver: false
});

module.exports = gitInfo;

console.log(" \n\n\n\n Current version is: " + gitInfo.tag);