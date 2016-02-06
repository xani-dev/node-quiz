console.log(`Not in a secure environment so don't have access to Secure GitHub token. Merging with insecure token and exiting.`);

github = new GithubApi({ org: org, token: process.env.MERGE_TOKEN });

github.pullInfo({ repo: repo, pull: pull }, (err, res, body) => {
  
  if (body.user.login !== body.base.ref) {
    console.log('Must pull to correct branch name. Exiting.');
    process.exit(1);
  }
  
  github.mergePullRequest({ repo: repo, sha: body.head.sha, pull: pull }, (err, res, body) => {
    
    if (body && body.merged) {
      console.log('Pull request merged. Exiting.');
      process.exit(0);  
    } else {
      console.log('Could not merge for some reason: ', body);
      process.exit(1);
    }
    
  });
  
});
