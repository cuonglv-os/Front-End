$(document).ready(function () {

	var mySwiper = new Swiper ('.swiper-container', {
		  	// initialSlide: 1,
		  	direction: 'horizontal',
		  	effect: 'fade',
		  	loop: true,
		  	threshold: 100,
		  	speed: 500,
		  	slidesPerView: 'auto',
		  	loopedSlides : 6,
		  	centeredSlides: true,
		  	autoplay: 3000,
		  	nextButton: '.swiper-button-next',
		  	prevButton: '.swiper-button-prev',
		  	// pagination: '.swiper-pagination',
		  	// paginationClickable: true,
		  	// paginationBulletRender: function (swiper, index, className) {
		  	// 	return '<span class="' + className + '" style="border: 1px solid white; width:13px; height:13px;"></span>';
		  	// }
		  });

	$('#popup').hover(function(){
		mySwiper.stopAutoplay();
	},function(){
		mySwiper.startAutoplay();
	});		 
});