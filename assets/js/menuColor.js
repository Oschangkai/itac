$(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
    if(scrollVal<110){
    	$("#navBar a").css("color","rgba(255,254,255,0.8)");
	}
	else{
		$("#navBar a").css("color","black");
	}
});