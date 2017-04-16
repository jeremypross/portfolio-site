$(document).ready(() => {
  console.log('js is linked');

  const $head = $('.head')
  const $webDeveloper = $('#web-developer');
  const $gitHub = $('#github');
  const $linkedIn = $('#linkedin');
  const $instagram = $('#instagram');
  const $about = $('#about');
  const $scroll = $('#land-scroll');

  let width = $(window).width();
  let height = $(window).height();
  console.log('width:', width);
  console.log('height:', height);

  // set width and height automatically
  // position landing page accordingly

  // setTimeout for h1
  setTimeout(() => {
    $head.css('visibility', 'visible');
    $head.addClass('animated fadeInDownBig');
  }, 400);

  // setTimeout for h2
  setTimeout(() => {
    $webDeveloper.css('visibility', 'visible');
    $webDeveloper.addClass('animated fadeIn');
  }, 1600);

  // setTimeout for social media icons
  setTimeout(() => {
    $gitHub.css('visibility', 'visible');
    $gitHub.addClass('animated fadeIn');
    $linkedIn.css('visibility', 'visible');
    $linkedIn.addClass('animated fadeIn');
    $instagram.css('visibility', 'visible');
    $instagram.addClass('animated fadeIn');
  }, 2600);

  // setTimeout for about
  setTimeout(() => {
    $scroll.css('visibility', 'visible');
    $scroll.addClass('animated rubberBand');
  }, 3200);


});
