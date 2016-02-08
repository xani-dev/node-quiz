/**
* Test files are hidden for assessments! Follow the instructions in the readme carefully and try to
* anticipate what the tests may be looking for.
*/

const GithubApi = require('./util/GithubApi');

const org = 'CodesmithLLC';
const repo = 'week-4-assessment';
const pull = process.env.TRAVIS_PULL_REQUEST;
const commit = process.env.TRAVIS_COMMIT;
const secure = JSON.parse(process.env.TRAVIS_SECURE_ENV_VARS);

// body.commit.message.split(' ').slice(-1)[0]

var github;

console.log('Secure environment (merge) so go ahead with the testing.');

github = new GithubApi({ org: org, token: process.env.GITHUB_ACCESS_TOKEN });
// github = new GithubApi({ org: org, token: require('../config.json').GITHUB_ACCESS_TOKEN });

const Mocha = require('mocha');
const path = require('path');
const fs = require('fs');
const async = require('async');
const EmailReporter = require('mocha-email-reporter');
const hookStdOut = require('./util/hookStdOut');

const host = 'https://api.github.com';
const testFileName = `test/${path.dirname(__dirname).split('/').slice(-1)[0]}.js`;
const lintFileName = '.eslintrc';

var mocha = new Mocha({
  timeout: 5000
});

async.waterfall([
  (next) => {
    github.fileContents({ path: testFileName, repo: 'assessments-archive' }, next);
  },
  (res, body, next) => {
    var buf = new Buffer(body.content, 'base64');
    
    var filepath = `${__dirname}/${body.name}`;
    fs.writeFile(filepath, buf, (err) => {
      if (err) return next(err);
      return next(null, filepath);
    });
  },
  (path, next) => {
    var emailString = '';
    
    var unhook = hookStdOut((str, enc, fd) => {
      emailString += str;
    });
    
    mocha.addFile(path);
    
    mocha.reporter(EmailReporter, { json: `${__dirname}/output.json` }).run((failures) => {
        unhook();
        return next(null, emailString);
      });
  }
], (err, result) => {
  if (err) throw err;
  
  console.log(result);
  process.exit(0);
});
