$(function() {
	$('.header-slider').slick({
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrow"></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrow"></img>',
		asNavFor: '.slider-dots',
		dotsClass: "slider-dots__item",
		autoplay: false,
		infinite: true,
		speed: 1500,
		fade: true,
		cssEase: 'ease'
	});

	$('.slider-dots').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header-slider',
	});

	$('.surf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrow"></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrow"></img>',
		asNavFor: '.slider-map',
		responsive: [
			{
				breakpoint: 1101,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 901,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 701,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					focusOnSelect: true
				}
			},
			{
				breakpoint: 426,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					focusOnSelect: true
				}
			},
		]
	});

	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		asNavFor: '.surf-slider',
		arrows: false,
		infinite: true,
		focusOnSelect: true,
		settings: 'slick',
		responsive: [
			{
				breakpoint: 1101,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					centerMode: true,
					focusOnSelect: true
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					focusOnSelect: true
				}
			},
		]
	});

	$('.holder__slider').slick({
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrow"></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrow"></img>',
		infinite: true,
	});

	$('.shop-slider').slick({
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrow"></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrow"></img>',
		infinite: true,
	});

	$('.shop-slider__surfboard-circle').on('click', function () {
		$(this).toggleClass('active')
	});

	$('.menu-btn').on('click', function () {
		$('.header__aside-menu').toggleClass('active')
	});

	$('.menu-btn').on('click', function () {
		$(this).toggleClass('burger-active')
	});

	new WOW().init();

	function checkWidth() {
		var windowWidth = $('body').width(),
			elem = $(".slider-map");
		if (windowWidth < 1100) {
			elem.removeClass('disactive');
		} else {
			elem.addClass('disactive');
		}
	}

	checkWidth(); 

	$(window).resize(function () {
		checkWidth();
	});
	
	var $page = $('html, body');
	$('a[href*="#"]').click(function () {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 400);
		return false;
	});
});


		// +/- в калькуляторе кастомизация
$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt="plus"></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt="minus"></div></div>').insertAfter('.quantity input');
$('.quantity').each(function () {
	var spinner = $(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

	btnUp.click(function () {
		var oldValue = parseFloat(input.val());
		if (oldValue >= max) {
			var newVal = oldValue;
		} else {
			var newVal = oldValue + 1;
		}
		spinner.find("input").val(newVal);
		spinner.find("input").trigger("change");
	});

	btnDown.click(function () {
		var oldValue = parseFloat(input.val());
		if (oldValue <= min) {
			var newVal = oldValue;
		} else {
			var newVal = oldValue - 1;
		}
		spinner.find("input").val(newVal);
		spinner.find("input").trigger("change");
	});

	$('.quantity-button').on('click', function () {
		var parents = $(this).parents('.holder-slider__info');
		let summ = $('.summ', parents).data('nights') * $('.night', parents).val() + $('.summ', parents).data('guests') * $('.guest', parents).val();
		$('.summ', parents).html('$' + summ);
	});

				// // формула просчета цены

	$('.quantity').each(function () {
		var parents = $(this).parents('.holder-slider__info');
		let summ = $('.summ', parents).data('nights') * $('.night', parents).val() + $('.summ', parents).data('guests') * $('.guest', parents).val();
		$('.summ', parents).html('$' + summ);
	});

});

		
