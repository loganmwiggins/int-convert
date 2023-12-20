// Element variables
let primaryIntType = document.getElementById("primary-int-type");
let secondaryIntType = document.getElementById("secondary-int-type");
let primaryTitle = document.getElementById("primary-title");
let secondaryTitle = document.getElementById("secondary-title");
let swapBtn = document.getElementById("swap-btn");
let primaryLabelText = document.getElementById("primary-label-text");
let secondaryLabelText = document.getElementById("secondary-label-text");
let intForm = document.getElementById("int-form");
let intInput = document.getElementById("int-input");
let result = document.getElementById("result");
let calculation = document.getElementById("calculation");
let copyMsg = document.getElementById("copyMsg");


// On init {}
    // Remember integer types on refresh/submit
    primaryIntType.value = sessionStorage.getItem("primaryType");
    secondaryIntType.value = sessionStorage.getItem("secondaryType");
    
    // Set text of elements on screen
    setTitle();

    // Remember input and results on refresh/submit
    intInput.value = sessionStorage.getItem("currentInput");
    result.value = sessionStorage.getItem("currentResult");
    calculation.innerHTML = sessionStorage.getItem("currentCalculation");
//


// Functions
intForm.addEventListener("submit", (e) => {
    convertInput();
    window.sessionStorage.setItem("currentInput", intInput.value);
    window.sessionStorage.setItem("currentResult", result.value);
    window.sessionStorage.setItem("currentCalculation", calculation.innerHTML);    
});

function setTitle() 
{
    // Set text of title elements
    if (primaryIntType.value == "" || secondaryIntType.value == "") {
        primaryTitle.innerHTML = "Select integer types"
        secondaryTitle.style.display = "none";
    }
    else {
        primaryTitle.innerHTML = primaryIntType.value;
        secondaryTitle.style.display = "inline";
        secondaryTitle.innerHTML = secondaryIntType.value;
    }

    // Set text of label elements
    primaryLabelText.innerHTML = primaryIntType.value;
    secondaryLabelText.innerHTML = secondaryIntType.value;

    // Save types in session storage AND 
    window.sessionStorage.setItem("primaryType", primaryIntType.value);
    window.sessionStorage.setItem("secondaryType", secondaryIntType.value);
    
    hideDropdownOpts(); // Hide equivalent dropdown type options
    setInputPattern();  // Set new pattern for input validation 
    clearInput();       // Clear out input fields
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
        copyMsg.innerHTML = "Copied calculation to clipboard";
        copyMsg.style.color = "green";
    } 
    else {
        copyMsg.innerHTML = "You need to make a conversion before copying the calculation";
        copyMsg.style.color = "#c20202";
    }
}

function setInputPattern()
{
    if (primaryIntType.value == "Binary") {
        intInput.setAttribute("pattern", "[0-1]+");
        intInput.setAttribute("title", "Binary input must only contain 0s and 1s");
    }
    else if (primaryIntType.value == "Octal") {
        intInput.setAttribute("pattern", "[0-7]+");
        intInput.setAttribute("title", "Octal input must only contain numbers 0-7");
    }
    else if (primaryIntType.value == "Decimal") {
        intInput.setAttribute("pattern", "[0-9]+");
        intInput.setAttribute("title", "Decimal input must only contain numbers 0-9");
    }
    else if (primaryIntType.value == "Hexadecimal") {
        intInput.setAttribute("pattern", "[a-fA-F0-9]+");
        intInput.setAttribute("title", "Hexadecimal input must only contain numbers 0-9 and letters A-F");
    }
    else {
        intInput.setAttribute("pattern", "[]+");
        intInput.setAttribute("title", "Select two integer types to begin");
    }
}

function hideDropdownOpts()
{
    // Primary dropdown
    if (primaryIntType.value == "Binary") {
        for (let i=2; i <= 5; i++)
        {
            if (i === 2) { document.querySelector("#primary-int-type option:nth-child(" + i.toString() + ")").style.display = "none"; }
            else { document.querySelector("#primary-int-type option:nth-child(" + i.toString() + ")").style.display = "block"; }

            // Remove selected primary int type from list
            if (document.querySelector("#primary-int-type option:nth-child(" + i.toString() + ")").value === secondaryIntType.value) {
                document.querySelector("#primary-int-type option:nth-child(" + i.toString() + ")").style.display = "none";
            }
        }
    }
    else if (primaryIntType.value == "Octal") {
        for (let i=2; i <= 5; i++)
        {
            if (i === 3) { document.querySelector("#primary-int-type option:nth-child(" + i.toString() + ")").style.display = "none"; }
            else { document.querySelector("#primary-int-type option:nth-child(" + i.toString() + ")").style.display = "block"; }

            // Remove selected primary int type from list
            if (document.querySelector("#primary-int-type option:nth-child(" + i.toString() + ")").value === secondaryIntType.value) {
                document.querySelector("#primary-int-type option:nth-child(" + i.toString() + ")").style.display = "none";
            }
        }
    }
    else if (primaryIntType.value == "Decimal") {
        for (let i=2; i <= 5; i++)
        {
            if (i === 4) { document.querySelector("#primary-int-type option:nth-child(" + i.toString() + ")").style.display = "none"; }
            else { document.querySelector("#primary-int-type option:nth-child(" + i.toString() + ")").style.display = "block"; }

            // Remove selected primary int type from list
            if (document.querySelector("#primary-int-type option:nth-child(" + i.toString() + ")").value === secondaryIntType.value) {
                document.querySelector("#primary-int-type option:nth-child(" + i.toString() + ")").style.display = "none";
            }
        }
    }
    else if (primaryIntType.value == "Hexadecimal") {
        for (let i=2; i <= 5; i++)
        {
            if (i === 5) { document.querySelector("#primary-int-type option:nth-child(" + i.toString() + ")").style.display = "none"; }
            else { document.querySelector("#primary-int-type option:nth-child(" + i.toString() + ")").style.display = "block"; }

            // Remove selected primary int type from list
            if (document.querySelector("#primary-int-type option:nth-child(" + i.toString() + ")").value === secondaryIntType.value) {
                document.querySelector("#primary-int-type option:nth-child(" + i.toString() + ")").style.display = "none";
            }
        }
    }
    else {  // First-time use, show all
        for (let i=2; i <= 5; i++)
        {
            document.querySelector("#primary-int-type option:nth-child(" + i.toString() + ")").style.display = "block";
        }
    }

    // Secondary dropdown
    if (secondaryIntType.value == "Binary") {
        for (let i=2; i <= 5; i++)
        {
            if (i === 2) { document.querySelector("#secondary-int-type option:nth-child(" + i.toString() + ")").style.display = "none"; }
            else { document.querySelector("#secondary-int-type option:nth-child(" + i.toString() + ")").style.display = "block"; }

            // Remove selected primary int type from list
            if (document.querySelector("#secondary-int-type option:nth-child(" + i.toString() + ")").value === primaryIntType.value) {
                document.querySelector("#secondary-int-type option:nth-child(" + i.toString() + ")").style.display = "none";
            }
        }
    }
    else if (secondaryIntType.value == "Octal") {
        for (let i=2; i <= 5; i++)
        {
            if (i === 3) { document.querySelector("#secondary-int-type option:nth-child(" + i.toString() + ")").style.display = "none"; }
            else { document.querySelector("#secondary-int-type option:nth-child(" + i.toString() + ")").style.display = "block"; }

            // Remove selected primary int type from list
            if (document.querySelector("#secondary-int-type option:nth-child(" + i.toString() + ")").value === primaryIntType.value) {
                document.querySelector("#secondary-int-type option:nth-child(" + i.toString() + ")").style.display = "none";
            }
        }
    }
    else if (secondaryIntType.value == "Decimal") {
        for (let i=2; i <= 5; i++)
        {
            if (i === 4) { document.querySelector("#secondary-int-type option:nth-child(" + i.toString() + ")").style.display = "none"; }
            else { document.querySelector("#secondary-int-type option:nth-child(" + i.toString() + ")").style.display = "block"; }

            // Remove selected primary int type from list
            if (document.querySelector("#secondary-int-type option:nth-child(" + i.toString() + ")").value === primaryIntType.value) {
                document.querySelector("#secondary-int-type option:nth-child(" + i.toString() + ")").style.display = "none";
            }
        }
    }
    else if (secondaryIntType.value == "Hexadecimal") {
        for (let i=2; i <= 5; i++)
        {
            if (i === 5) { document.querySelector("#secondary-int-type option:nth-child(" + i.toString() + ")").style.display = "none"; }
            else { document.querySelector("#secondary-int-type option:nth-child(" + i.toString() + ")").style.display = "block"; }

            // Remove selected primary int type from list
            if (document.querySelector("#secondary-int-type option:nth-child(" + i.toString() + ")").value === primaryIntType.value) {
                document.querySelector("#secondary-int-type option:nth-child(" + i.toString() + ")").style.display = "none";
            }
        }
    }
    else {  // First-time use, show all
        for (let i=2; i <= 5; i++)
        {
            document.querySelector("#secondary-int-type option:nth-child(" + i.toString() + ")").style.display = "block";
        }
    }
}

function clearInput() {
    intInput.value = "";
    result.value = "";
    calculation.innerHTML = "";
    calculation.style.marginTop = "0";
    copyMsg.innerHTML = "";
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
    //////////
    // Binary to Octal
    else if (primaryIntType.value == "Binary" && secondaryIntType.value == "Octal") {
        result.value = binToOct(intInput.value);
    }
    // Binary to Hexadecimal
    else if (primaryIntType.value == "Binary" && secondaryIntType.value == "Hexadecimal") {
        result.value = binToHex(intInput.value);
    }
    // Octal to Binary
    else if (primaryIntType.value == "Octal" && secondaryIntType.value == "Binary") {
        result.value = octToBin(intInput.value);
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
function decToBin(num) 
{
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
function decToOct(num) 
{
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
function decToHex(num) 
{
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

// Others
function binToOct(num) 
{
    let binNum = num;
    let binNumLength = binNum.toString().length;
    let currBlock = "";
    let formula = binNum.toString() + "<br>= ";
    let chunks = "";
    let result = parseInt(binNum, 2).toString(8);

    let currLength = binNumLength;
    for (let i=0; i < binNumLength; i+=3)
    {
        if (currLength >= 3) {
            currBlock = binNum.toString().slice(currLength-3, currLength);
            binNum = binNum.toString().slice(0, currLength-3);
            currLength -= 3;
        }
        else {
            currBlock = binNum.toString().slice(0, currLength);
        }

        chunks = currBlock + " " + chunks;
    }

    // Construct formula string
    formula += chunks + "<br>= ";
    for (let i=0; i<result.length; i++)
    {
        formula += result[i] + " ";
    }
    formula += "<br>= " + result;
    calculation.innerHTML = formula;

    return result;
}   
function binToHex(num)
{
    let binNum = num;
    let binNumLength = binNum.toString().length;
    let currBlock = "";
    let formula = binNum.toString() + "<br>= ";
    let chunks = "";
    let result = parseInt(binNum, 2).toString(16).toUpperCase();

    let currLength = binNumLength;
    for (let i=0; i < binNumLength; i+=4)
    {
        if (currLength >= 4) {
            currBlock = binNum.toString().slice(currLength-4, currLength);
            binNum = binNum.toString().slice(0, currLength-4);
            currLength -= 4;
        }
        else {
            currBlock = binNum.toString().slice(0, currLength);
        }

        chunks = currBlock + " " + chunks;
    }

    // Construct formula string
    formula += chunks + "<br>= ";
    for (let i=0; i<result.length; i++)
    {
        formula += result[i] + " ";
    }
    formula += "<br>= " + result;
    calculation.innerHTML = formula;

    return result;
}
function octToBin(num)
{
    let octNum = num;
    let octNumLength = octNum.toString().length;
    let formula = "";
    let chunks = "";

    // Convert
    let result = octToDec(octNum);
    result = decToBin(result);

    // Output calculation
    formula += octNum + "<br>= ";
    for (let i=0; i < octNumLength; i++)
    {
        let currDigit = octNum[i];
        formula += currDigit + " ";
    }
    
    let resLength = result.toString().length;
    let tempResult = result;
    for (let i=0; i < result.toString().length; i+=3)
    {
        if (resLength >= 3) {
            currBlock = tempResult.toString().slice(resLength-3, resLength);
            tempResult = tempResult.toString().slice(0, resLength-3);
            resLength -= 3;
        }
        else {
            currBlock = tempResult.toString().slice(0, resLength);
        }

        chunks = currBlock + " " + chunks;
    }
    formula += "<br>= " + chunks;
    formula += "<br>= " + result;
    calculation.innerHTML = formula;    // Output calculation formula to DOM

    return result;
}
function octToHex(num)
{

}
function hexToBin(num)
{

}
function hexToOct(num)
{

}











// DARK MODE
    let darkMode = localStorage.getItem("darkMode");    // Declare local storage var for dark mode

    // Declare footer buttons and page icons
    let appsIcon = document.getElementById("appsIcon");
    let infoIcon = document.getElementById("infoIcon");
    let settingsIcon = document.getElementById("settingsIcon");
    let themeBtn = document.getElementById("themeBtn");
    let themeIcon = document.getElementById("themeIcon");

    // Functions for enabling and disabling darkMode
    const enableDarkMode = () => {
        document.body.classList.add("dark-theme");      // Add dark-theme class to HTML body
        localStorage.setItem("darkMode", "enabled");    // Update darkMode in the local storage
        darkMode = localStorage.getItem("darkMode");    // Update darkMode variable
    }
    const disableDarkMode = () => {
        document.body.classList.remove("dark-theme");   // Remove dark-theme class from HTML body
        localStorage.setItem("darkMode", "disabled");   // Update darkMode in the local storage
        darkMode = localStorage.getItem("darkMode");    // Update darkMode variable
    }

    // Check darkMode state and set on load (keeps on refresh)
    if (darkMode === "enabled") {
        enableDarkMode();
        swapBtn.classList.add("filter-white");
        appsIcon.classList.add("filter-white");
        infoIcon.classList.add("filter-white");
        settingsIcon.classList.add("filter-white");
        themeIcon.classList.add("filter-white");
    }

    // Change theme when button is clicked
    function toggleTheme() {
        darkMode = localStorage.getItem("darkMode");    
        
        if (darkMode !== "enabled") {
            enableDarkMode();
            swapBtn.classList.add("filter-white");
            appsIcon.classList.add("filter-white");
            infoIcon.classList.add("filter-white");
            settingsIcon.classList.add("filter-white");
            themeIcon.classList.add("filter-white");
        }
        else {
            disableDarkMode();
            swapBtn.classList.remove("filter-white");
            appsIcon.classList.remove("filter-white");
            infoIcon.classList.remove("filter-white");
            settingsIcon.classList.remove("filter-white");
            themeIcon.classList.remove("filter-white");
        }
    }