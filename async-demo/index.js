console.log("Before");
getUser(1, getReposForUser);
console.log("After");

function getReposForUser(user) {
  getRepositories(user.gitHubUsername, getCommitsforRepo);
}

function getCommitsforRepo(repos) {
  getCommits(repos, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading user from a database...");
    callback({ id: id, gitHubUsername: "mosh" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Reading repositories from GitHub for user", username);
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(repos, callback) {
  setTimeout(() => {
    console.log("Reading commits from Github for repo", repos[0]);
    callback(["commit1, commit2, commit3"]);
  });
}