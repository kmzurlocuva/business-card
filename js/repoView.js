(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#coding'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = function(repo) {
    console.log(repo);
    return $('<li>').html('<a href="' + repo.html_url + '">' + repo.name + '</a>');
  };

  // DONE: If all the data is loaded, we can prep the UI and render the repos.
  repoView.index = function() {
    console.log(repos);
    ui();

    // The jQuery `append` method lets us append an entire array of HTML elements at once,
    // So we can use a little FP to transform our data-set into DOM nodes:
    $('#coding ul').append(
      repos.with('name').map(render)
    );
    console.log(repos);
  };

  module.repoView = repoView;
})(window);
