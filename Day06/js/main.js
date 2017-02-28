$(document).ready(function(){

		$(window).scroll(function(){
			let scroll = $(window).scrollTop();

	if(scroll > 25){
		$('.header').css({"box-shadow":"0 3px 10px -1px rgba(0,0,0,0.8)"});
	
	}else{
		$('.header').css({"box-shadow":"inset 0 -2px 10px rgba(0,0,0,0.2)"});
	}

	});
});