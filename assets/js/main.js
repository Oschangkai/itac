$(function() {
  // Disable the page until loaded.
  $(window).on('load', function() {
    $('load').remove();
  });
  //scrolling effect
  $.scrollIt({
    topOffset: -86
  });
  //Sidebar
});
//parallax effect
$('.section100').parallax({ imageSrc: 'assets/img/home-fit.jpg' });
//navbar controller
$(window).scroll(function() {
    if ($(document).scrollTop() >= $(window).height()/6) { 
      $('.navbar').addClass('act2');
      $('.navbar').removeClass('act1');} 
    else { 
      $('.navbar').addClass('act1');
      $('.navbar').removeClass('act2'); } 
    });
