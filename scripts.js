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

// Functions
function setTitle() {
    // Set all text elements
    primaryTitle.innerHTML = primaryIntType.value;
    secondaryTitle.innerHTML = secondaryIntType.value;
    primaryLabelText.innerHTML = primaryIntType.value;
    secondaryLabelText.innerHTML = secondaryIntType.value;

    // Clear out input fields
    intInput.value = "";
    result.value = "";
    calculation.innerHTML = "";
}

function swapTypes() {
    let temp = primaryIntType.value;
    primaryIntType.value = secondaryIntType.value;
    secondaryIntType.value = temp;
    setTitle();
}

function clearInput() {
    intInput.value = "";
    result.value = "";
    calculation.innerHTML = "";
}

function convertInput() {
    // Binary to Decimal
    if (primaryIntType.value == "Binary" && secondaryIntType.value == "Decimal") {
        result.value = binToDec(intInput.value);
    }
    // Octal to Decimal
    else if (primaryIntType.value == "Octal" && secondaryIntType.value == "Decimal") {
        result.value = octToDec(intInput.value);
    }
    // Hexadecimal to Decimal
    else if (primaryIntType.value == "Hexadecimal" && secondaryIntType.value == "Decimal") {
        result.value = hexToDec(intInput.value);
    }
    else {
        result.value = intInput.value;
    }



}

// ... to Decimal
function binToDec(num) 
{
    let binNum = num;
    let binNumLength = binNum.toString().length;
    let decNum = 0;
    let formula = "";

    for (let i=0; i < binNumLength; i++)
    {
        // Convert
        let currDigit = binNum % 10;
        decNum += currDigit * Math.pow(2, i);
        binNum = Math.floor(binNum/10);
        
        // Creating calculation formula string
        if (i === parseInt(binNumLength) - 1) {
            formula = "(" + currDigit.toString() + " * 2^" + i + ")" + formula; 
        }
        else {
            formula = " + (" + currDigit.toString() + " * 2^" + i + ")" + formula; 
        }
    }
    calculation.innerHTML = formula + " = " + decNum;    // Output calculation formula to DOM

    return decNum;
}

function octToDec(num) 
{
    let octNum = num;
    let octNumLength = octNum.toString().length;
    let decNum = 0;
    let formula = "";

    for (let i=0; i < octNumLength; i++)
    {
        // Convert
        let currDigit = octNum % 10;
        decNum += currDigit * Math.pow(8, i);
        octNum = Math.floor(octNum/10);
        
        // Creating calculation formula string
        if (i === parseInt(octNumLength) - 1) {
            formula = "(" + currDigit.toString() + " * 8^" + i + ")" + formula; 
        }
        else {
            formula = " + (" + currDigit.toString() + " * 8^" + i + ")" + formula; 
        }
    }
    calculation.innerHTML = formula + " = " + decNum;    // Output calculation formula to DOM

    return decNum;
}

function hexToDec(num) 
{
    let hexNum = num.toString();
    let hexNumLength = hexNum.length;
    let decNum = 0;
    let formula = "";

    for (let i=0; i < hexNumLength; i++)
    {
        // Convert
        let currDigit = hexNum[hexNumLength-i-1];

        switch(currDigit)   // Change alpha characters to nums
        {
            case('A'):
                currDigit = 10;
                break;
            case('B'):
                currDigit = 11;
                break;
            case('C'):
                currDigit = 12;
                break;
            case('D'):
                currDigit = 13;
                break;
            case('E'):
                currDigit = 14;
                break;
            case('F'):
                currDigit = 15;
                break;
        }
        decNum += currDigit * Math.pow(16, i);
        
        // Creating calculation formula string
        if (i === parseInt(hexNumLength) - 1) {
            formula = "(" + currDigit.toString() + " * 16^" + i + ")" + formula; 
        }
        else {
            formula = " + (" + currDigit.toString() + " * 16^" + i + ")" + formula; 
        }
    }
    calculation.innerHTML = formula + " = " + decNum;    // Output calculation formula to DOM

    return decNum;
}


// Decimal to ...