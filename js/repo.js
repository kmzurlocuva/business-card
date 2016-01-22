(function(module) {
  var repos = {};

  repos.all = [];


repos.requestRepos = function(callback) {
 $.ajax({
   url: '/github/users/kmzurlocuva/repos' +
         '?per_page=3' + '&sort=updated',
   type: 'GET',
   success: function(data) {
     repos.all = data;
   }
 }).done(callback);
 $('#articles').hide();

};

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
