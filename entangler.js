var github = require('octonode');

var username = 'acklavidian';
var repo = 'acklavidian/entangler';


var client = github.client({
  username: username,
  password: 'Iam31pp3.'
});


var ghme           = client.me();
var ghuser         = client.user(username);
var ghrepo         = client.repo(repo);
//var ghorg          = client.org('flatiron');
var ghissue        = client.issue(repo, 37);
var ghmilestone    = client.milestone(repo, 37);
var ghlabel        = client.label(repo, 'todo');
var ghpr           = client.pr(repo, 37);
var ghrelease      = client.release(repo, 37);
var ghgist         = client.gist();

var ghsearch = client.search();
//
// function getAllAssignedRepoIssues(){
//   var response = {};
//   var options = {
//     q: 'is:open is:pr assignee:acklavidian ',
//     sort: 'created',
//     order: 'asc'
//   };
//
//   function handleSearch(err, data, headers){
//     response = err || data;
//   }
//   ghsearch.issues(options, handleSearch);
//   return response;
// }

function report (err, data, headers) {
  console.log("error: " , err);
  console.log("data: " , data);
  console.log("headers:" , headers);
}

ghsearch.issues({
  q: 'is:open is:pr assignee:acklavidian ',
  sort: 'created',
  order: 'asc'
}, report);
