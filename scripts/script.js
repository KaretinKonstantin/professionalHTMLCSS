
const menuHamburger = document.querySelector('.menu-hamburger'),
	heroOverlay = document.querySelector('.hero-overlay');


const openMenu = () => {
	heroOverlay.style.display = 'block';
}



menuHamburger.addEventListener('click', openMenu);
heroOverlay.addEventListener('click', event => {
	const target = event.target;
	if (!target.closest('.burger-menu') || target.closest('.close-menu')) {
		heroOverlay.style.display = 'none';
	}
})

