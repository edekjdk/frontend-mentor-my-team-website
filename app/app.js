const burgerButton = document.querySelector('.main-nav__burger-button');
const mobileMenu = document.querySelector('.main-nav__links-container');
const shadow = document.querySelector('.main-nav__mobile-shadow');
const aboutPageHeaderText = document.querySelector('.main-header__text');
const toggleMobileMenu = () => {
	mobileMenu.classList.toggle('main-nav__links-container--active');
	burgerButton.classList.toggle('main-nav__burger-button--active');
	shadow.classList.toggle('main-nav__mobile-shadow--active');

	console.log('click');
};

const toggleTextSize = () => {
	if (window.innerWidth <= 1440) {
		aboutPageHeaderText.classList.add('body--large');
		aboutPageHeaderText.classList.rmeove('body--small');
	}
};

console.log(burgerButton.children);

burgerButton.addEventListener('click', toggleMobileMenu);
