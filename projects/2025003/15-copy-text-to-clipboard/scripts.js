

const copyBtn = document.querySelector("#copyBtn");
const input = document.querySelector("#name");
const tooltip = document.querySelector("#tooltip");

document.addEventListener("click", clickHandler);

function clickHandler(e) {
    if (e.target == copyBtn) {
        // Select input value.
        input.select();
        input.setSelectionRange(0, input.value.length);

        // Copy input value to clipboard.
        navigator.clipboard.writeText(input.value);

        // Show input value into tooltip.
        tooltip.innerHTML = `Copied: ${input.value}`;
    }
}