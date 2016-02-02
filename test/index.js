/**
* Test files are hidden for assessments! Follow the instructions in the readme carefully and try to
* anticipate what the tests may be looking for.
*/

var request = require('request');
var mocha = require('mocha');

if (!process.env.TRAVIS_SECURE_ENV_VARS) process.exit(0);

const github_access_token = process.env.GITHUB_ACCESS_TOKEN;
const host = 'https://api.github.com';

request.get({
    uri: `${host}/repos/${options.org}/${options.repo}/commits/${options.commit}?access_token=${access_token}`,
    headers: { 'user-agent': 'node.js' },
    followAllRedirects: true,
    json: true
  }, next);
