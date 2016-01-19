(function(module) {
var aboutController = {};

aboutController.index = function() {
    $('#template').hide();
    $('#bioBlock').show();
  }
  module.aboutController = aboutController;
})(window);
