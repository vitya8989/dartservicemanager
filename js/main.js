let burger = document.querySelector('.header__burger');
let nav = document.querySelector('.header__nav');
burger.onclick = function() {
	burger.classList.toggle('open');
	nav.classList.toggle('open');
}

//////////////////////////////////////////////////////////


$(document).ready(function(){
	$('.list__content').slideUp(0);
	$('.list__header').click(function(event) {
		if($('.list').hasClass('one')){
			$('.list__content').not($(this).next()).slideUp(300);
			$('.arrow').not($(this).children()).removeClass('reverse');
		}
		$(this).next().slideToggle(300);
		$(this).children('.arrow').toggleClass('reverse');
	});
});


//////////////////////////////////////////////////////////////

$(document).ready(function(){
	$('.slider').slick({
		lazyLoad: 'ondemand',
		speed:1000,
		pauseOnFocus:true,
		pauseOnHover:true,
		autoplay:true,
		autoplaySpeed:4000,
		slidesToShow:2,
		vertical:true,
		verticalSwiping:false,
		responsive:[
			{
				breakpoint: 480,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});



//////////////////////////////////////////////////////////////////////

$(document).ready(function(){
	$('.slider-team').slick({
		speed:1000,
		slidesToShow:3,
		centerMode:true,
		centerPadding: '40px',
		initialSlide:1,
		lazyLoad: 'ondemand',
		asNavFor:".our__review-slider",
		responsive:[
			{
				breakpoint: 700,
				settings: {
					slidesToShow:1,
				
				}
			}
		]
	});
	$('.our__review-slider').slick({
		speed:1000,
		slidesToShow:1,
		initialSlide:1,
		asNavFor:".slider-team",
	});
});

let video = document.querySelector('.video');
video.onclick = function() {
	 if (video.paused) {
	video.play();
	} else {
	video.pause();
	}
}
