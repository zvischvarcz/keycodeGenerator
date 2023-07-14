const infoBox1 = document.getElementById("infoBox1");
const infoBox2 = document.getElementById("infoBox2");
const infoBox3 = document.getElementById("infoBox3");
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
    infoBox1.innerHTML = `<P class="box-title">The event.code is:</p><p class="result-text">${keycode}</p>`
    infoBox2.innerHTML = `<P class="box-title">The event.key is:</p><p class="result-text">${keyCodeKey}</p>`
    infoBox3.innerHTML = `<P class="box-title">The event.charCode is:</p><p class="result-text">${keyCodeCharCode}</p>`
})

input.addEventListener("keypress", (event) => {
    let keycode = event.code;
    let keyCodeKey = event.key;
    let keyCodeCharCode = event.charCode;
    headingContainer.style.display = "none";
    infoBoxesContainer.style.display = "flex";
    infoBox1.innerHTML = `<P class="box-title">The event.code is:</p><p class="result-text">${keycode}</p>`
    infoBox2.innerHTML = `<P class="box-title">The event.key is:</p><p class="result-text">${keyCodeKey}</p>`
    infoBox3.innerHTML = `<P class="box-title">The event.charCode is:</p><p class="result-text">${keyCodeCharCode}</p>`
    input.value = ""
})