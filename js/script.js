/*$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
});
*/

function active() {
	document.querySelector('.header__menu').classList.toggle("active");
	document.querySelector('.header__burger').classList.toggle("active");
	document.body.classList.toggle("lock");
}

document.querySelector('.header__burger').onclick = active;
document.querySelector('.header__list').onclick = function (event) {

	event.preventDefault();
	let target = event.target;

	if (target.className != 'header__link') return;

	active();


	document.querySelector(target.getAttribute('href')).scrollIntoView({ block: "start", behavior: "smooth" });
}

document.querySelector('.header__logo').onclick = function (event) {

	event.preventDefault();
	document.querySelector("#h").scrollIntoView({ block: "start", behavior: "smooth" });
}


/*document.querySelectorAll('.header__link')[0].onclick = active;
document.querySelectorAll('.header__link')[1].onclick = active;
document.querySelectorAll('.header__link')[2].onclick = active;*/