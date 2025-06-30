// console.log("Before");
// getUser(1, getReposForUser);
// console.log("After");

// function getReposForUser(user) {
//   getRepositories(user.gitHubUsername, getCommitsforRepo);
// }

// function getCommitsforRepo(repos) {
//   getCommits(repos, displayCommits);
// }

// function displayCommits(commits) {
//   console.log(commits);
// }

// ----------------
console.log("Before");

getUser(1)
  .then((user) => getRepositories(user.gitHubUsername))
  .then((repos) => getCommits(repos[0]))
  .then((commits) => console.log("Commits", commits))
  .catch((err) => console.log("Error", err.message));

console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    // Kick off some async work
    setTimeout(() => {
      console.log("Reading user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading repositories from GitHub for user", username);
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading commits from Github for repo");
      resolve(["commit1, commit2, commit3"]);
    }, 2000);
  });
}
