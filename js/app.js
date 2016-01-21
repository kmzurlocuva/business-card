
var aboutController = {};
var articles = [];

function Article (options) {
  this.author = options.author;
  this.authorUrl = options.authorUrl;
  this.title = options.title;
  this.category = options.category;
  this.body = options.body;
  this.publishedOn = options.publishedOn;
}

Article.all = [];

Article.prototype.toHtml = function() {

  var appTemplate = $('#template').text();

  var compileTemplate = Handlebars.compile(appTemplate);

  var dataSource = {
    title: this.title,
    author: this.author,
    authorUrl: this.authorUrl,
    publishedOn: this.publishedOn,
    body: this.body
  }

  var html = compileTemplate(dataSource);

this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

 return compileTemplate(this);
 };

Article.loadAll = function(contents) {
  contents.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  Article.all = [];

  contents.forEach(function(ele) {
    Article.all.push(new Article(ele));
  })
};


// $(function () {
//   var template = $("#skillz-template").html();
//   var compiled = Handlebars.compile(template);
//   var skills = ['HTML & CSS', 'JavaScript & jQuery', 'program development', 'non-profit fund-raising', 'meeting facilitation', 'grant writing'];
//
//
//   var toHtml = compiled(skills);
//
//   $('.skillz-placeholder').html(toHtml);
// });
//
//
// articleView.populateFilters = function() {
//   $('article').each(function() {
//     if (!$(this).hasClass('template')) {
//       var val = $(this).find('address a').text();
//       var optionTag = '<option value="' + val + '">' + val + '</option>';
//       $('#author-filter').append(optionTag);
//
//       val = $(this).attr('data-category');
//       optionTag = '<option value="' + val + '">' + val + '</option>';
//
//







var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('.author-name').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#contentSelect').append(optionTag);

      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};


articleView.handleArticleDisplay = function() {
  $('#contentSelect').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-author="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};
//
// articleView.handleMainNav = function() {
//     $('main-nav').on('click', '.tab', function(event) {
//       $('.tab-content').hide();
//       $('#' + $(this).data('content')).fadeIn();
//     });
//
//     $('.main-nav .tab:first').click();
//     };

Article.fetchAll = function() {

    $.ajax({
      url: '/js/contents.json',
      dataType: 'JSON',
      type: 'GET',
      success: function(contents) {
        Article.loadAll(contents);
        console.log('successful ajax call');
        Article.initIndexPage();
      }});
};
Article.initIndexPage = function() {
  $('#articles').html('');
  Article.all.forEach(function(contents){
    $('#articles').append(contents.toHtml())
  });
}
$(document).ready(function(){
  articleView.handleArticleDisplay();
  articleView.populateFilters();

});
