$(function() {
	// Disable animations/transitions until the page has loaded.
	$('body').addClass('is-loading');
	$(document).ready(function($) {
		$('body').removeClass('is-loading');
	});
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
