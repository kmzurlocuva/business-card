(function(module) {
var indexController = {};

indexController.index = function() {
    $('#bioBlock').hide();
    $('#template').show();
    Article.fetchAll();
  }
  module.indexController = indexController;
})(window);
