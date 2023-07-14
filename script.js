const resultCode = document.getElementById("resultCode");
const resultKey = document.getElementById("resultKey");
const resultCharcode = document.getElementById("resultCharcode");
const headingContainer = document.getElementById("headingContainer");
const infoBoxesContainer = document.getElementById("infoBoxesContainer");
const input = document.getElementById("input");
const inputBtn = document.getElementById("inputBtn");


document.addEventListener("keypress", (event) => {
    let keycode = event.code;
    let keyCodeKey = event.key;
    let keyCodeCharCode = event.charCode;
    headingContainer.style.display = "none";
    infoBoxesContainer.style.display = "flex";
    resultCode.textContent = `${keycode}`
    resultKey.textContent = `${keyCodeKey}`
    resultCharcode.textContent = `${keyCodeCharCode}`
})

input.addEventListener("keydown", (event) => {
    let keycode = event.code;
    let keyCodeKey = event.key;
    let keyCodeCharCode = event.which;
    headingContainer.style.display = "none";
    infoBoxesContainer.style.display = "flex";
    resultCode.textContent = `${keycode}`
    resultKey.textContent = `${keyCodeKey}`
    resultCharcode.textContent = `${keyCodeCharCode}`
    input.value = ""
})