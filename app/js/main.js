$(function () {
  $('.menu__button, .menu__link').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
    $('.menu__button').toggleClass('menu__button--active')
    $('body').toggleClass('lock-scroll')
  });

  /* Fixed menu */
  /* var element = $(".header__nav");
		var height_el = element.offset().top;
		$(window).scroll(function() {
			if($(window).scrollTop() > height_el) {
				element.addClass("header__nav--fixed");
			} else {
				element.removeClass("header__nav--fixed");
			}
		}); */

  /* Smooth scroll */
   $(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
				top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});