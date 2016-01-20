// page.base('/');

page('/', indexController.index);
page('/about', aboutController.index);
// page('/contact', contact);
// page('*', notFound);

page();




// function contact(ctx) {
//   mylog1('Contact me at supercoder@supercoder.com<br>' +
// 	 'Context: ' + (ctx.params.contactName || ''));
// }

function notFound() {
  console.log('Page not found. Please re-type your URL. KTHANKS.');
}
