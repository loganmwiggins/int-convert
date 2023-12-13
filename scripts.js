// Element variables
let primaryIntType = document.getElementById("primary-int-type");
let secondaryIntType = document.getElementById("secondary-int-type");
let primaryTitle = document.getElementById("primary-title");
let secondaryTitle = document.getElementById("secondary-title");
let swapBtn = document.getElementById("swap-btn");
let labelText = document.getElementById("label-text");
let intInput = document.getElementById("int-input");
let result = document.getElementById("result");

// On init
setTitle();



function setTitle() {
    primaryTitle.innerHTML = primaryIntType.value;
    secondaryTitle.innerHTML = secondaryIntType.value;
    labelText.innerHTML = primaryIntType.value.toLowerCase();
}

function swapTypes() {
    let temp = primaryIntType.value;
    primaryIntType.value = secondaryIntType.value;
    secondaryIntType.value = temp;
    setTitle();
    // swapBtn.classList.add("rotate");
}