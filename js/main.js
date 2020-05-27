$(function () {
	$('.reviews-slider').slick({
		infinite: true,
		arrows: true,
		autoplay: true,
		autoplayspeed: 5000,
		prevArrow: '<img class="slider-arrow slider-arrow__left" src="../img/reviews-slider/arrow-left.svg" alt=""></img>',
 		nextArrow: '<img class="slider-arrow slider-arrow__right" src="../img/reviews-slider/arrow-right.svg" alt=""></img>'
	});
	$('.games-slider').slick({
		infinite: true,
		fade: true,
		arrows: true,
		autoplay: true,
		autoplayspeed: 5000,
		prevArrow: '<img class="slider-arrow slider-arrow__left" src="../img/reviews-slider/arrow-left.svg" alt=""></img>',
 		nextArrow: '<img class="slider-arrow slider-arrow__right" src="../img/reviews-slider/arrow-right.svg" alt=""></img>'
	});
	$('.menu-btn').click(function(){
		$('.menu-btn, .header-menu').toggleClass('active');
	});
})