$(function() {
  $.scrollIt({
  	topOffset: -86
  });
});

$('.section100').parallax({ imageSrc: 'assets/img/home-fit.jpg' });
$(window).scroll(function() {
    if ($(document).scrollTop() >= $(window).height()/6) { 
    	$('.navbar').addClass('act2');
    	$('.navbar').removeClass('act1');} 
    else { 
    	$('.navbar').addClass('act1');
    	$('.navbar').removeClass('act2'); } 
    });
