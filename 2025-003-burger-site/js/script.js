

const open = document.getElementById('open');
const close = document.getElementById('close');
const nav = document.getElementById('nav');

open.addEventListener('click', () => {
    nav.style.transform = 'translateX(0)';
});

close.addEventListener('click', () => {
    nav.style.transform = 'translateX(100%)';
});