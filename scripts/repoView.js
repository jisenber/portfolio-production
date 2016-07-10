(function() {
  function placeDataonScreen(data) {
    data.forEach(function(ele) {
      repoInfo.all.push(ele);
    });
    var truncatedRepos = repoInfo.populateRepos();
    console.log(truncatedRepos);
    truncatedRepos.forEach(function(ele) {
      $('#repoList').append(ele.name + '<br>' + '<br>');
    });
  };

  repoInfo.getRepos(placeDataonScreen);

})(window);
