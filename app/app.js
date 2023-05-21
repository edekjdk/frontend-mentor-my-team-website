const burgerButton = document.querySelector('.main-nav__burger-button');
const mobileMenu = document.querySelector('.main-nav__links-container');
const shadow = document.querySelector('.main-nav__mobile-shadow');
const aboutPageHeaderText = document.querySelector('.main-header__text');
const toggleButton = document.querySelectorAll(
	'.directors__container-item-button'
);
const description = document.querySelectorAll(
	'.directors__container-item-disabled'
);

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

const toggleDescription = (e) => {
	// console.log(e.target);
	let test = e.target.closest('div');
	let test2 = test.children[1];
	test2.classList.toggle('directors__container-item-enabled--active');
	e.target.classList.toggle('directors__container-item-button--active');
};

// console.log(burgerButton.children);

toggleButton.forEach((button) =>
	button.addEventListener('click', toggleDescription)
);
burgerButton.addEventListener('click', toggleMobileMenu);
