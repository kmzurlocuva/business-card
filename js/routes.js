// page.base('/');

page('/', indexController.index);
page('/about', aboutController.index);
// page('/contact', contact);
// page('*', notFound);

page();


function notFound() {
  console.log('Page not found. Please re-type your URL. KTHANKS.');
}
