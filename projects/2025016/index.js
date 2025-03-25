const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('nav');

openMenu.addEventListener('click', () => {
    nav.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    nav.classList.remove('show');
});