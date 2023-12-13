// Element variables
let primaryIntType = document.getElementById("primary-int-type");
let secondaryIntType = document.getElementById("secondary-int-type");
let primaryTitle = document.getElementById("primary-title");
let secondaryTitle = document.getElementById("secondary-title");
let swapBtn = document.getElementById("swap-btn");
let primaryLabelText = document.getElementById("primary-label-text");
let secondaryLabelText = document.getElementById("secondary-label-text");
let intInput = document.getElementById("int-input");
let result = document.getElementById("result");
let calculation = document.getElementById("calculation");

// On init
setTitle();



function setTitle() {
    primaryTitle.innerHTML = primaryIntType.value;
    secondaryTitle.innerHTML = secondaryIntType.value;
    primaryLabelText.innerHTML = primaryIntType.value.toLowerCase();
    secondaryLabelText.innerHTML = secondaryIntType.value.toLowerCase();
}

function swapTypes() {
    let temp = primaryIntType.value;
    primaryIntType.value = secondaryIntType.value;
    secondaryIntType.value = temp;
    setTitle();
}

function convertInput() {
    // alert(intInput.value);
    if (primaryIntType.value == "Binary" && secondaryIntType.value == "Decimal") {
        result.value = binToDec(intInput.value);
    }



    // result.value = intInput.value;
}

function binToDec(num) {

    let binNum = num;
    let binNumLength = binNum.toString().length;
    let decNum = 0;
    let formula = "";

    for (var i=0; i < binNumLength; i++)
    {
        var currDigit = binNum % 10;
        formula +=  "(" + currDigit.toString() + " * 2^" + i + ") + "; 
        decNum += currDigit * Math.pow(2, i);
        binNum = Math.floor(binNum/10);
    }
    calculation.value = formula;

    return decNum;
}