/*$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
});  */

$(document).ready(function () {

	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	});


	$('.header__list').on('click', '.header__link', function () {
		let $w = $('.header').height();
		let el = $(this);
		let dest = el.attr('href'); // получаем направление
		if (dest !== undefined && dest !== '') { // проверяем существование
			$('html').animate({
				scrollTop: $(dest).offset().top - $w // прокручиваем страницу к требуемому элементу
			}, 500 // скорость прокрутки
			);
		}
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock')

		return false;
	});

	$('.header__logo').on('click', function () {

		$('html').animate({
			scrollTop: 0 // прокручиваем страницу к требуемому элементу
		}, 500 // скорость прокрутки
		);

		return false;
	});

});


/*
function active() {
	document.querySelector('.header__menu').classList.toggle("active");
	document.querySelector('.header__burger').classList.toggle("active");
	document.body.classList.toggle("lock");
}

document.querySelector('.header__burger').onclick = active;
document.querySelector('.header__list').onclick = function (event) {

   event.preventDefault();
   if (event.target.className != 'header__link') return;

	let href = event.target.getAttribute('href');

   if(href !== undefined && href !== '')
		document.querySelector(href).scrollIntoView({ block: "start", behavior: "smooth" });

	if (document.documentElement.clientWidth > 768) return;

	active();

};

document.querySelector('.header__logo').onclick = function (event) {

	event.preventDefault();
	document.querySelector("#h").scrollIntoView({ block: "start", behavior: "smooth" });

}

*/

/*document.querySelectorAll('.header__link')[0].onclick = active;
document.querySelectorAll('.header__link')[1].onclick = active;
document.querySelectorAll('.header__link')[2].onclick = active;*/