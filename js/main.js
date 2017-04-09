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
    $head.addClass('animated fadeIn');
  }, 400);

  // setTimeout for h2
  setTimeout(() => {
    $webDeveloper.css('visibility', 'visible');
    $webDeveloper.addClass('animated fadeIn');
  }, 1000);

  // setTimeout for social media icons
  setTimeout(() => {
    $gitHub.css('visibility', 'visible');
    $gitHub.addClass('animated fadeInUp');
    $linkedIn.css('visibility', 'visible');
    $linkedIn.addClass('animated fadeInUp');
    $instagram.css('visibility', 'visible');
    $instagram.addClass('animated fadeInUp');
  }, 1400);

  // setTimeout for about
  setTimeout(() => {
    $scroll.css('visibility', 'visible');
    $scroll.addClass('animated bounce');
  }, 1800);


});
