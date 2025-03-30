const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const headerNav = document.querySelector('.header-nav');
const selectWrapper = document.querySelector(".select-wrapper");
const currentItem = document.querySelector(".current-item");
const checkboxes = document.querySelectorAll("input[type='checkbox'][name='region']");


menuOpen.addEventListener('click', () => {
    headerNav.classList.add('show');
});

menuClose.addEventListener('click', () => {
    headerNav.classList.remove('show');
});

currentItem.addEventListener("click", () => {
    selectWrapper.classList.toggle("show");
});

document.addEventListener("click", (event) => {
    if (!selectWrapper.contains(event.target) && selectWrapper.classList.contains("show")) {
        selectWrapper.classList.toggle("show");
    }
});

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        const checkedCheckboxes = [...checkboxes].filter(cb => cb.checked);
        const checkedValues = checkedCheckboxes.map(cb => cb.value);
    });
});

