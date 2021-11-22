const body = document.querySelector('body');
const menuBtn = document.querySelector('.js-menu-button');
const closeBtn = document.querySelector('.js-close-button');
const burgerIcon = document.querySelector('.js-menu-icon');
const closeIcon = document.querySelector('.js-close-icon');
const menuListContainer = document.querySelector('.js-navigation-container');
const backDrop = document.querySelector('.js-backdrop');

const elOpening = (el, className) => {
  el.classList.toggle(className);
};
const dropDownOpening = () => {
  elOpening(body, 'is-fixed');
  elOpening(burgerIcon, 'is-hidden');
  elOpening(closeIcon, 'is-hidden');
  elOpening(menuListContainer, 'is-hidden');
  elOpening(backDrop, 'is-hidden');
};

menuBtn.addEventListener('click', dropDownOpening);

closeBtn.addEventListener('click', dropDownOpening);

backDrop.addEventListener('click', dropDownOpening);
