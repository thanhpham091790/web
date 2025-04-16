
// Multiselect dropdown
const dropdownForm = document.querySelector('.dropdown-form');
const dropdownSearch = dropdownForm.querySelector('.dropdown-search');
const checkboxWrapper = dropdownForm.querySelector('.checkbox-wrapper');
const dropdownSubmitBtn = dropdownForm.querySelector('.submit-btn');
const [...checkboxItems] = dropdownForm.querySelectorAll('.checkbox-item');

document.addEventListener('click', function (e) {
    if (!dropdownSearch.contains(e.target) && !checkboxWrapper.contains(e.target)) {
        checkboxWrapper.classList.remove('show');
    } else {
        checkboxWrapper.classList.add('show');
    }

    if (e.target.matches(".submit-btn")) {
        e.preventDefault();

        const selectedCheckboxes = checkboxItems.filter(checkboxItem => {
            return checkboxItem.querySelector("input[type='checkbox']").checked;
        }).map(checkboxItem => {
            return checkboxItem.querySelector("input[type='checkbox']").value;
        });

        console.log(selectedCheckboxes);
    }
});

dropdownSearch.addEventListener("keyup", function (e) {
    const inputValue = e.target.value.toLowerCase();

    checkboxItems.map(checkboxItem => {
        const checkboxValue = checkboxItem.querySelector("input[type='checkbox']").value.toLowerCase();

        if (!checkboxValue.includes(inputValue)) {
            checkboxItem.style.display = "none";
        } else {
            checkboxItem.style.display = "flex";
        }
    });

});

// Cutom a select element
const selectForm = document.querySelector('.select-form');
const originalSelect = selectForm.querySelector('.original-select');
const customSelect = selectForm.querySelector('.custom-select');
const selectSubmitBtn = selectForm.querySelector(".submit-btn");

document.addEventListener('click', function (e) {
    if (!customSelect.contains(e.target)) {
        customSelect.classList.remove("show");
    } else {
        customSelect.classList.toggle("show");
    }

    if (e.target.matches(".option")) {
        customSelect.querySelector(".selected-option").innerText = e.target.innerText;
        customSelect.querySelector(".selected-option").setAttribute("data-selected-value", e.target.getAttribute("data-value"));
        customSelect.querySelectorAll(".option").forEach(option => {
            if (option !== e.target) {
                option.classList.remove("selected");
            } else {
                option.classList.add("selected");
            }
        });

        originalSelect.value = e.target.getAttribute("data-value");
    }
});

selectSubmitBtn.addEventListener('click', function () {
    const selectedValue = customSelect.querySelector(".selected-option").getAttribute("data-selected-value");
    const name = customSelect.querySelector(".selected-option").getAttribute("data-name");
    const dataObject = {
        name: name,
        value: selectedValue
    };

    console.log(dataObject);
});