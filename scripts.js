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
    calculation.style.marginTop = "0";
}

function swapTypes() {
    let temp = primaryIntType.value;
    primaryIntType.value = secondaryIntType.value;
    secondaryIntType.value = temp;
    setTitle();
}

function copyCalculation() {
    let calcString = calculation.innerHTML;
    if (calcString != "") {
        navigator.clipboard.writeText(calcString);
        alert("Copied calculation to clipboard");
    } 
    else {
        alert("You need to make a conversion before copying the calculation");
    }
}

function clearInput() {
    intInput.value = "";
    result.value = "";
    calculation.innerHTML = "";
    calculation.style.marginTop = "0";
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
    // Decimal to Binary
    else if (primaryIntType.value == "Decimal" && secondaryIntType.value == "Binary") {
        result.value = decToBin(intInput.value);
    }
    // Decimal to Octal
    else if (primaryIntType.value == "Decimal" && secondaryIntType.value == "Octal") {
        result.value = decToOct(intInput.value);
    }
    // Decimal to Hexadecimal
    else if (primaryIntType.value == "Decimal" && secondaryIntType.value == "Hexadecimal") {
        result.value = decToHex(intInput.value);
    }
    else { result.value = intInput.value; }
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
    calculation.style.marginTop = ".5rem";  // Add margin to output

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
    calculation.style.marginTop = ".5rem";  // Add margin to output

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
            case('a'):
                currDigit = 10;
                break;
            case('B'):
            case('b'):
                currDigit = 11;
                break;
            case('C'):
            case('c'):
                currDigit = 12;
                break;
            case('D'):
            case('d'):
                currDigit = 13;
                break;
            case('E'):
            case('e'):
                currDigit = 14;
                break;
            case('F'):
            case('f'):
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
    calculation.style.marginTop = ".5rem";  // Add margin to output

    return decNum;
}


// Decimal to ...
function decToBin(num) {
    let decNum = num;
    let formula = "";
    let result = "";

    while (decNum != 0)
    {
        formula += (decNum + "/2 = " + Math.floor(decNum/2) + " r" + decNum%2 + "<br>");
        calculation.innerHTML = formula;
        result = decNum %2 + result;
        decNum = Math.floor(decNum/2);
    }

    return result;
}

function decToOct(num) {
    let decNum = num;
    let formula = "";
    let result = "";

    while (decNum != 0)
    {
        formula += (decNum + "/8 = " + Math.floor(decNum/8) + " r" + decNum%8 + "<br>");
        calculation.innerHTML = formula;
        result = decNum %8 + result;
        decNum = Math.floor(decNum/8);
    }

    return result;
}

function decToHex(num) {
    let decNum = num;
    let formula = "";
    let result = "";

    while (decNum != 0)
    {
        let hexDigit = decNum %16;

        switch(hexDigit)   // Change alpha characters to nums
        {
            case(10):
                hexDigit = "A";
                break;
            case(11):
                hexDigit = "B";
                break;
            case(12):
                hexDigit = "C";
                break;
            case(13):
                hexDigit = "D";
                break;
            case(14):
                hexDigit = "E";
                break;
            case(15):
                hexDigit = "F";
                break;
        }

        if (hexDigit == 'A' || hexDigit == 'B' || hexDigit == 'C' || hexDigit == 'D' || hexDigit == 'E' || hexDigit == 'F') {
            formula += (decNum + "/16 = " + Math.floor(decNum/16) + " r" + decNum%16 + "(" + hexDigit + ")<br>");

        }
        else {
            formula += (decNum + "/16 = " + Math.floor(decNum/16) + " r" + decNum%16 + "<br>");
        }
        calculation.innerHTML = formula;
        result = hexDigit + result;
        decNum = Math.floor(decNum/16);
    }

    return result;
}