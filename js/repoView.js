(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#coding');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = function(repo) {
    console.log(repo);
    return $('<li>').html('On Github: ' + '<a href="' + repo.html_url + '">' + repo.name + '</a>');
  };


  //all the data is loaded, we can prep the UI and render the repos.
  repoView.index = function() {
    console.log(repos);
    ui();

    $('#coding ul').append(
      repos.with('name').map(render)
    );
    console.log(repos);
  };

  module.repoView = repoView;
})(window);
