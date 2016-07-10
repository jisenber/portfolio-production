
(function(module) {
  repoInfo = {};
  repoInfo.all = [];

  repoInfo.populateRepos = function() {
    var truncatedRepos = repoInfo.all.map(function(ele) {
      return {
        name: ele.name,
        url: ele.html_url
      };
    });
    return truncatedRepos;
  };

  repoInfo.getRepos = function(callback) {
    return $.ajax({
      url: 'https://api.github.com/user/repos',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data) {
        callback(data);
      }
    });
  };

  //$('#about').append(ele.name +'<br>')

  module.repoInfo = repoInfo;

})(window);
