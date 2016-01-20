(function(module) {
var aboutController = {};

aboutController.index = function() {
  console.log('we have reached the aboutController');
    $('#template').hide();
    $('#bioBlock').show();
    repos.requestRepos(repoView.index);
  };
  module.aboutController = aboutController;
})(window);
