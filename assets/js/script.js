// ===== SHOW MENU ===== //
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () =>{
	navMenu.classList.toggle('show-menu');
	menuButton.classList.toggle('close-menu');
})
// ===== end show menu ===== //

// ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
	const navMenu = document.getElementById('nav-menu');

	navMenu.classList.remove('show-menu');
	menuButton.classList.remove('close-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
// ===== end remove menu mobile ===== //

/* ===== SCROLL SECTIONS ACTIVE LINK ===== */
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive);
// ===== end scroll sections active link ===== //

// ===== CHANGE BACKGROUND HEADER ===== //
function scrollHeader(){
	const header = document.getElementById('header');

	if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);
// ===== end change background header ===== //

// ===== SHOW CART ===== //
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close');

// Cart Show
// Validate if constant exists
if(cartShop){
   cartShop.addEventListener('click', () =>{
      cart.classList.add('show-cart')
   })
}

// Cart Hidden
// Validate if constant exists
if(cartClose){
   cartClose.addEventListener('click', () =>{
      cart.classList.remove('show-cart')
   })
}
// ===== end show cart ===== //

// ===== HOME SLIDES ===== //
const homeSwiper = new Swiper(".home__container", {
	spaceBetween: 30,
	loop: 'true',

	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
// ====== end home slides ===== //

// ===== MENU CAROUSEL ===== //
const menuSwiper = new Swiper('.menu__container', {
	spaceBetween: 24,
	// loop: true,
	grabCursor: true,

	navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },

	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	}
});
// ===== end menu carousel ===== //

// ===== GALLERY ===== //
const gallerySwiper = new Swiper(".gallery__swiper", {
	spaceBetween: 0,
	loop: 'true',
	grabCursor: true,

	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},

	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		568: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
})
// ===== end gallery ===== //

// ===== SHOW SCROLL UP ===== //
function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');
	
	if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
// ===== end show scroll up ===== //

// ===== SCROLL REVEAL ANIMATION ===== //
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	// reset: true// animation repeat //
})

sr.reveal(`.fitur__content, .merchandise__box, .merchandise__button, .footer__content`, {interval: 100})
sr.reveal(`.story__img, .banner__img-1, .banner__data-2, .location__img, .promo__box-2`, {origin: 'right'})
sr.reveal(`.story__data, .decoration__img, .banner__data-1, .banner__img-2, .location__data, .location__img-bar, .location__data, .promo__box-1`, {origin: 'left'})
sr.reveal(`.section__title, .menu__container, .menu__button, .social__media, .footer__copy, .footer__note`)