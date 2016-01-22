(function(module) {
var indexController = {};

indexController.index = function() {
    $('#bioBlock').hide();
    $('#template').show();
    $('#articles').show();

    Article.fetchAll();
  }
  module.indexController = indexController;
})(window);
