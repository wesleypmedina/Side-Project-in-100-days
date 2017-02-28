

$(document).ready(function(){

	load($('#ud-slider').children('.ud-slide').first());

	function load(obj){
		$(obj).slideDown(1000);
		$(obj).children('h3').animate({left:"80px"},800);
		$(obj).children('h3').animate({left:"70px"},300);


		$('.ud-load').animate({width:"99.5%"},5000,function(){
			$(obj).children('h3').animate({left:"80px"},600);
			$(obj).children('h3').animate({left:"-800px"},200,function(){
			$(obj).slideUp(1000);
			$('.ud-load').css({"width":"0px"});
			if(obj.next().hasClass('.ud-slide')){
				load(obj.next());
			}else{
			load($('#ud-slider').children('.ud-slide').first());
			}	
		});
			
		});
	}

	

	$(window).scroll(function(){
		let scrolle = $(window).scrollTop();
		if(scrolle >120){
			$('a').css({"color":"black"});
		}else{$('a').css({"color":"white"});}
	});

});

(function(){
let btn = document.querySelector('a');

btn.addEventListener('click',createRipple);

function createRipple(e){
	let bloco = document.createElement('div');
	this.appendChild(bloco);

	let d = Math.max(this.clientWidth,this.clientHeight);

	bloco.style.width = d + "px";
	bloco.style.height = d + "px";
	bloco.style.left = e.clientX - this.offsetLeft - d/2 + 'px';
	bloco.style.top = e.clientY - this.offsefTop - d/2 + 'px';

	bloco.classList.add('ripple');
}
})();