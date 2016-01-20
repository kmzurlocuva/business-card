(function(module) {
var aboutController = {};

aboutController.index = function() {
    $('#template').hide();
    $('#bioBlock').show();

    repos.requestRepos(repoView.index);
  };
  module.aboutController = aboutController;
})(window);
