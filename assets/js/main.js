$(function() {
  // Disable the page until loaded.
  $(window).on('load', function() {
    $('load').remove();
  });
  //scrolling effect
  $.scrollIt({
    topOffset: -90
  });
});
//Remove elements when mobile
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $('.desktop').attr('id', 'mobile');
}
$(window).resize(function() {
  if ($(window).width() < 760){
    $('.desktop').attr('id', 'mobile');
  }else {
    $('.desktop').removeAttr('id');
  };
});
//parallax effect
$('.section100').parallax({ imageSrc: 'assets/img/home-fit.jpg' });
//navbar controller
$(window).scroll(function() {
    if ($(document).scrollTop() >= $(window).height()/6) { 
      $('.navbar').addClass('act2').removeClass('act1');
    }else { 
      $('.navbar').addClass('act1').removeClass('act2');
    } 
    });