// VARIABLE DECLARATIONS
    // > Input center
    // >> Titles/labels
    let primaryTitle = document.getElementById("primary-title");
    let secondaryTitle = document.getElementById("secondary-title");
    let primaryLabelText = document.getElementById("primary-label-text");
    let secondaryLabelText = document.getElementById("secondary-label-text");
    // >> Inputs
    let primaryIntType = document.getElementById("primary-int-type");
    let secondaryIntType = document.getElementById("secondary-int-type");
    let intForm = document.getElementById("int-form");
    let intInput = document.getElementById("int-input");
    let result = document.getElementById("result");
    // >> Buttons
    let convertBtn = document.getElementById("convertBtn");
    let swapBtn = document.getElementById("swap-btn");
    // > Calculation container
    // >> Calculation data
    let calculation = document.getElementById("calculation");
    let calculationData = document.getElementById("calculation-data");
    let aboutText = document.getElementById("aboutText");
    let otherResultsCtnr = document.getElementById("otherResultsCtnr");
    let otherResult1 = document.getElementById("otherResult1");
    let otherResultLabel1 = document.getElementById("otherResultLabel1");
    let otherResult2 = document.getElementById("otherResult2");
    let otherResultLabel2 = document.getElementById("otherResultLabel2");
    // >> Empty data/msg
    let emptyMsg = document.getElementById("emptyMsg");
    // let historyMsg = document.getElementById("history");
    // let historyTxt = document.getElementById("historyTxt");
//


// ON LOAD
    // * Remember integer types on refresh/submit
    primaryIntType.value = sessionStorage.getItem("primaryType");
    secondaryIntType.value = sessionStorage.getItem("secondaryType");

    // * Set text of elements on screen (when new dropdown type is selected)
    setType();

    // * Remember input and results on refresh/submit
    intInput.value = sessionStorage.getItem("currentInput");
    result.value = sessionStorage.getItem("currentResult");
    calculation.innerHTML = sessionStorage.getItem("currentCalculation");
    aboutText.innerHTML = sessionStorage.getItem("currentDescription");
    otherResult1.innerHTML = sessionStorage.getItem("otherResult1");
    otherResult2.innerHTML = sessionStorage.getItem("otherResult2");

    // * If values are cleared, hide calculation data and show buffer
    checkEmpty();
//


// Functions
intForm.addEventListener("submit", (e) => {
    fillOtherResultValues();
    convertInput();
    window.sessionStorage.setItem("currentInput", intInput.value);
    window.sessionStorage.setItem("currentResult", result.value);
    window.sessionStorage.setItem("currentCalculation", calculation.innerHTML);  
    window.sessionStorage.setItem("currentDescription", aboutText.innerHTML);  window.sessionStorage.setItem("otherResult1", otherResult1.innerHTML);
    window.sessionStorage.setItem("otherResult2", otherResult2.innerHTML);
});

function setType() 
{
    // Set text of title elements
    if (primaryIntType.value == "" || secondaryIntType.value == "") {
        primaryTitle.innerHTML = "Select integer types"
        secondaryTitle.style.display = "none";
        document.getElementById("title-arrow").style.display = "none";
    }
    else {
        primaryTitle.innerHTML = primaryIntType.value;
        secondaryTitle.style.display = "inline";
        secondaryTitle.innerHTML = secondaryIntType.value;
        document.getElementById("title-arrow").style.display = "inline";
    }

    // Set text of label elements
    primaryLabelText.innerHTML = primaryIntType.value;
    secondaryLabelText.innerHTML = secondaryIntType.value;
    fillOtherResultLabels();
    if (primaryIntType.value)

    // Save types in session storage AND 
    window.sessionStorage.setItem("primaryType", primaryIntType.value);
    window.sessionStorage.setItem("secondaryType", secondaryIntType.value);
    
    hideDropdownOpts(); // Hide equivalent dropdown type options
    setInputPattern();  // Set new pattern for input validation 
    clearInput();       // Clear out input fields
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
    otherResult1.innerHTML = "";
    otherResult2.innerHTML = "";

    checkEmpty();
}

function checkEmpty() {
    if (window.sessionStorage.getItem("currentResult") === null || result.value === "") {
        otherResultsCtnr.style.display = "none";
        calculationData.style.display = "none";
        emptyMsg.style.display = "block";
    }
    else {
        otherResultsCtnr.style.display = "block";
        calculationData.style.display = "block";
        emptyMsg.style.display = "none";
    }
}

function convertInput() {
    // Binary to Decimal
    if (primaryIntType.value == "Binary" && secondaryIntType.value == "Decimal") {
        result.value = binToDec(intInput.value);
        aboutText.innerHTML = "For binary number, b,  with n digits:<br> b<sub>n-1</sub> ... b<sub>3</sub> b<sub>2</sub> b<sub>1</sub> b<sub>0</sub><br><br> The decimal number is equal to the sum of binary digits (b<sub>n</sub>) times their power of 2 (2<sup>n</sup>):<br> Result<sub>(dec)</sub> = (b<sub>0</sub> * 2<sup>0</sup>) + (b<sub>1</sub> * 2<sup>1</sup>) + (b<sub>2</sub> * 2<sup>2</sup>) + ...";
    }
    // Octal to Decimal
    else if (primaryIntType.value == "Octal" && secondaryIntType.value == "Decimal") {
        result.value = octToDec(intInput.value);
        aboutText.innerHTML = "For octal number, c,  with n digits:<br> c<sub>n-1</sub> ... c<sub>3</sub> c<sub>2</sub> c<sub>1</sub> c<sub>0</sub><br><br> Multiply each digit of the octal number with its corresponding power of 8 and sum:<br> Result<sub>(dec)</sub> = (c<sub>n-1</sub> * 8<sup>n-1</sup>) + ... + (c<sub>3</sub> * 8<sup>3</sup>) + (c<sub>2</sub> * 8<sup>2</sup>) + (c<sub>1</sub> * 8<sup>1</sup>) + (c<sub>0</sub> * 8<sup>0</sup>)";
    }
    // Hexadecimal to Decimal
    else if (primaryIntType.value == "Hexadecimal" && secondaryIntType.value == "Decimal") {
        result.value = hexToDec(intInput.value);
        aboutText.innerHTML = "For hexadecimal number, h,  with n digits:<br> h<sub>n-1</sub> ... h<sub>3</sub> h<sub>2</sub> h<sub>1</sub> h<sub>0</sub><br><br> Multiply each digit of the hex number with its corresponding power of 16 and sum:<br> Result<sub>(dec)</sub> = (h<sub>n-1</sub> * 16<sup>n-1</sup>) + ... + (h<sub>3</sub> * 16<sup>3</sup>) + (h<sub>2</sub> * 16<sup>2</sup>) + (h<sub>1</sub> * 16<sup>1</sup>) + (h<sub>0</sub> * 16<sup>0</sup>)";
    }
    // Decimal to Binary
    else if (primaryIntType.value == "Decimal" && secondaryIntType.value == "Binary") {
        result.value = decToBin(intInput.value);
        aboutText.innerHTML = "Divide the decimal number by the base 2 to get the binary digits from the remainders. Once you reach a quotient of zero, put the remainders together in reverse order to find your result.";
    }
    // Decimal to Octal
    else if (primaryIntType.value == "Decimal" && secondaryIntType.value == "Octal") {
        result.value = decToOct(intInput.value);
        aboutText.innerHTML = "Divide the decimal number by the base 8 to get the octal digits from the remainders. Once you reach a quotient of zero, put the remainders together in reverse order to find your result.";
    }
    // Decimal to Hexadecimal
    else if (primaryIntType.value == "Decimal" && secondaryIntType.value == "Hexadecimal") {
        result.value = decToHex(intInput.value);
        aboutText.innerHTML = "Divide the decimal number by the base 16 to get the hexadecimal digits from the remainders. Once you reach a quotient of zero, put the remainders together in reverse order to find your result.<br><br> Be sure to convert any remainders with a value of 10-15 with their corresponding hex letters, A-F.";
    }
    //////////
    // Binary to Octal
    else if (primaryIntType.value == "Binary" && secondaryIntType.value == "Octal") {
        result.value = binToOct(intInput.value);
        aboutText.innerHTML = "Convert every 3 binary digits (start from bit 0) to 1 octal digit, with this table:<br><table class='about-table'><tr><td>Binary<sub>(2)</sub></td><td>Octal<sub>(8)</sub></td></tr><tr><td>000</td><td>0</td></tr><tr><td>001</td><td>1</td></tr><tr><td>010</td><td>2</td></tr><tr><td>011</td><td>3</td></tr><tr><td>100</td><td>4</td></tr><tr><td>101</td><td>5</td></tr><tr><td>110</td><td>6</td></tr><tr><td>111</td><td>7</td></tr></table>";
    }
    // Binary to Hexadecimal
    else if (primaryIntType.value == "Binary" && secondaryIntType.value == "Hexadecimal") {
        result.value = binToHex(intInput.value);
        aboutText.innerHTML = "Convert every 4 binary digits (start from bit 0) to 1 hexadecimal digit, with this table:<br><table class='about-table'><tr><td>Binary<sub>(2)</sub></td><td>Hex<sub>(16)</sub></td></tr><tr><td>0000</td><td>0</td></tr><tr><td>0001</td><td>1</td></tr><tr><td>0010</td><td>2</td></tr><tr><td>0011</td><td>3</td></tr><tr><td>0100</td><td>4</td></tr><tr><td>0101</td><td>5</td></tr><tr><td>0110</td><td>6</td></tr><tr><td>0111</td><td>7</td></tr><tr><td>1000</td><td>8</td></tr><tr><td>1001</td><td>9</td></tr><tr><td>1010</td><td>A</td></tr><tr><td>1011</td><td>B</td></tr><tr><td>1100</td><td>C</td></tr><tr><td>1101</td><td>D</td></tr><tr><td>1110</td><td>E</td></tr><tr><td>1111</td><td>F</td></tr></table>";
    }
    // Octal to Binary
    else if (primaryIntType.value == "Octal" && secondaryIntType.value == "Binary") {
        result.value = octToBin(intInput.value);
        aboutText.innerHTML = "Convert every octal digit (start with lowest digit) to 3 binary digits, with this table:<br><table class='about-table'><tr><td>Octal<sub>(8)</sub></td><td>Binary<sub>(2)</sub></td></tr><tr><td>0</td><td>000</td></tr><tr><td>1</td><td>001</td></tr><tr><td>2</td><td>010</td></tr><tr><td>3</td><td>011</td></tr><tr><td>4</td><td>100</td></tr><tr><td>5</td><td>101</td></tr><tr><td>6</td><td>110</td></tr><tr><td>7</td><td>111</td></tr></table>";
    } 
    // Hexadecimal to Binary
    else if (primaryIntType.value == "Hexadecimal" && secondaryIntType.value == "Binary") {
        result.value = hexToBin(intInput.value);
        aboutText.innerHTML = "Convert every hex digit (start with lowest digit) to 4 binary digits, with this table:<br><table class='about-table'><tr><td>Hex<sub>(16)</sub></td><td>Binary<sub>(2)</sub></td></tr><tr><td>0</td><td>0000</td></tr><tr><td>1</td><td>0001</td></tr><tr><td>2</td><td>0010</td></tr><tr><td>3</td><td>0011</td></tr><tr><td>4</td><td>0100</td></tr><tr><td>5</td><td>0101</td></tr><tr><td>6</td><td>0110</td></tr><tr><td>7</td><td>0111</td></tr><tr><td>8</td><td>1000</td></tr><tr><td>9</td><td>1001</td></tr><tr><td>A</td><td>1010</td></tr><tr><td>B</td><td>1011</td></tr><tr><td>C</td><td>1100</td></tr><tr><td>D</td><td>1101</td></tr><tr><td>E</td><td>1110</td></tr><tr><td>F</td><td>1111</td></tr></table>";
    } 
    // Octal to Hexadecimal
    else if (primaryIntType.value == "Octal" && secondaryIntType.value == "Hexadecimal") {
        result.value = octToHex(intInput.value);
        aboutText.innerHTML = "Convert every octal digit to 3 binary digits, then convert every 4 binary digits to 1 hex digit (see conversion tables below).<br><br>Convert every octal digit to 3 binary digits, with this table:<br><table class='about-table'><tr><td>Octal<sub>(8)</sub></td><td>Binary<sub>(2)</sub></td></tr><tr><td>0</td><td>000</td></tr><tr><td>1</td><td>001</td></tr><tr><td>2</td><td>010</td></tr><tr><td>3</td><td>011</td></tr><tr><td>4</td><td>100</td></tr><tr><td>5</td><td>101</td></tr><tr><td>6</td><td>110</td></tr><tr><td>7</td><td>111</td></tr></table><br>Then convert every 4 binary digits (from bit 0) to 1 hex digit, with this table:<br><table class='about-table'><tr><td>Binary<sub>(2)</sub></td><td>Hex<sub>(16)</sub></td></tr><tr><td>0000</td><td>0</td></tr><tr><td>0001</td><td>1</td></tr><tr><td>0010</td><td>2</td></tr><tr><td>0011</td><td>3</td></tr><tr><td>0100</td><td>4</td></tr><tr><td>0101</td><td>5</td></tr><tr><td>0110</td><td>6</td></tr><tr><td>0111</td><td>7</td></tr><tr><td>1000</td><td>8</td></tr><tr><td>1001</td><td>9</td></tr><tr><td>1010</td><td>A</td></tr><tr><td>1011</td><td>B</td></tr><tr><td>1100</td><td>C</td></tr><tr><td>1101</td><td>D</td></tr><tr><td>1110</td><td>E</td></tr><tr><td>1111</td><td>F</td></tr></table>";
    } 
    // Hexadecimal to Octal
    else if (primaryIntType.value == "Hexadecimal" && secondaryIntType.value == "Octal") {
        result.value = hexToOct(intInput.value);
        
        aboutText.innerHTML = "Convert each hex digit to 4 binary digits and then convert each 3 binary digits to octal digits (see conversion tables below).<br><br>Convert every hex digit (start with lowest digit) to 4 binary digits, with this table:<br><table class='about-table'><tr><td>Hex<sub>(16)</sub></td><td>Binary<sub>(2)</sub></td></tr><tr><td>0</td><td>0000</td></tr><tr><td>1</td><td>0001</td></tr><tr><td>2</td><td>0010</td></tr><tr><td>3</td><td>0011</td></tr><tr><td>4</td><td>0100</td></tr><tr><td>5</td><td>0101</td></tr><tr><td>6</td><td>0110</td></tr><tr><td>7</td><td>0111</td></tr><tr><td>8</td><td>1000</td></tr><tr><td>9</td><td>1001</td></tr><tr><td>A</td><td>1010</td></tr><tr><td>B</td><td>1011</td></tr><tr><td>C</td><td>1100</td></tr><tr><td>D</td><td>1101</td></tr><tr><td>E</td><td>1110</td></tr><tr><td>F</td><td>1111</td></tr></table><br>Then convert every 3 binary digits (from bit 0) to 1 octal digit, with this table:<br><table class='about-table'><tr><td>Binary<sub>(2)</sub></td><td>Octal<sub>(8)</sub></td></tr><tr><td>000</td><td>0</td></tr><tr><td>001</td><td>1</td></tr><tr><td>010</td><td>2</td></tr><tr><td>011</td><td>3</td></tr><tr><td>100</td><td>4</td></tr><tr><td>101</td><td>5</td></tr><tr><td>110</td><td>6</td></tr><tr><td>111</td><td>7</td></tr></table>";
    } 
    else { result.value = intInput.value; }
}

function fillOtherResultValues() {
    // Binary to Decimal
    if (primaryIntType.value == "Binary" && secondaryIntType.value == "Decimal") {
        otherResult1.innerHTML = binToOct(intInput.value);
        otherResult2.innerHTML = binToHex(intInput.value);
    }
    // Octal to Decimal
    else if (primaryIntType.value == "Octal" && secondaryIntType.value == "Decimal") {
        otherResult1.innerHTML = octToBin(intInput.value);
        otherResult2.innerHTML = octToHex(intInput.value);
    }
    // Hexadecimal to Decimal
    else if (primaryIntType.value == "Hexadecimal" && secondaryIntType.value == "Decimal") {
        otherResult1.innerHTML = hexToBin(intInput.value);
        otherResult2.innerHTML = hexToOct(intInput.value);
    }
    // Decimal to Binary
    else if (primaryIntType.value == "Decimal" && secondaryIntType.value == "Binary") {
        otherResult1.innerHTML = decToOct(intInput.value);
        otherResult2.innerHTML = decToHex(intInput.value);
    }
    // Decimal to Octal
    else if (primaryIntType.value == "Decimal" && secondaryIntType.value == "Octal") {
        otherResult1.innerHTML = decToBin(intInput.value);
        otherResult2.innerHTML = decToHex(intInput.value);
    }
    // Decimal to Hexadecimal
    else if (primaryIntType.value == "Decimal" && secondaryIntType.value == "Hexadecimal") {
        otherResult1.innerHTML = decToBin(intInput.value);
        otherResult2.innerHTML = decToOct(intInput.value);
    }
    //////////
    // Binary to Octal
    else if (primaryIntType.value == "Binary" && secondaryIntType.value == "Octal") {
        otherResult1.innerHTML = binToDec(intInput.value);
        otherResult2.innerHTML = binToHex(intInput.value);
    }
    // Binary to Hexadecimal
    else if (primaryIntType.value == "Binary" && secondaryIntType.value == "Hexadecimal") {
        otherResult1.innerHTML = binToOct(intInput.value);
        otherResult2.innerHTML = binToDec(intInput.value);
    }
    // Octal to Binary
    else if (primaryIntType.value == "Octal" && secondaryIntType.value == "Binary") {
        otherResult1.innerHTML = octToDec(intInput.value);
        otherResult2.innerHTML = octToHex(intInput.value);
    } 
    // Hexadecimal to Binary
    else if (primaryIntType.value == "Hexadecimal" && secondaryIntType.value == "Binary") {
        otherResult1.innerHTML = hexToOct(intInput.value);
        otherResult2.innerHTML = hexToDec(intInput.value);
    } 
    // Octal to Hexadecimal
    else if (primaryIntType.value == "Octal" && secondaryIntType.value == "Hexadecimal") {
        otherResult1.innerHTML = octToBin(intInput.value);
        otherResult2.innerHTML = octToDec(intInput.value);
    } 
    // Hexadecimal to Octal
    else if (primaryIntType.value == "Hexadecimal" && secondaryIntType.value == "Octal") {
        otherResult1.innerHTML = hexToBin(intInput.value);
        otherResult2.innerHTML = hexToDec(intInput.value);
    } 
    else { 
        otherResult1.innerHTML = intInput.value;
        otherResult2.innerHTML = intInput.value;
    }
}
function fillOtherResultLabels() {
    // Binary to Decimal
    if (primaryIntType.value == "Binary" && secondaryIntType.value == "Decimal") {
        otherResultLabel1.innerHTML = "Octal";
        otherResultLabel2.innerHTML = "Hexadecimal";
    }
    // Octal to Decimal
    else if (primaryIntType.value == "Octal" && secondaryIntType.value == "Decimal") {
        otherResultLabel1.innerHTML = "Binary";
        otherResultLabel2.innerHTML = "Hexadecimal";
    }
    // Hexadecimal to Decimal
    else if (primaryIntType.value == "Hexadecimal" && secondaryIntType.value == "Decimal") {
        otherResultLabel1.innerHTML = "Binary";
        otherResultLabel2.innerHTML = "Octal";
    }
    // Decimal to Binary
    else if (primaryIntType.value == "Decimal" && secondaryIntType.value == "Binary") {
        otherResultLabel1.innerHTML = "Octal";
        otherResultLabel2.innerHTML = "Hexadecimal";
    }
    // Decimal to Octal
    else if (primaryIntType.value == "Decimal" && secondaryIntType.value == "Octal") {
        otherResultLabel1.innerHTML = "Binary";
        otherResultLabel2.innerHTML = "Hexadecimal";
    }
    // Decimal to Hexadecimal
    else if (primaryIntType.value == "Decimal" && secondaryIntType.value == "Hexadecimal") {
        otherResultLabel1.innerHTML = "Binary";
        otherResultLabel2.innerHTML = "Octal";
    }
    //////////
    // Binary to Octal
    else if (primaryIntType.value == "Binary" && secondaryIntType.value == "Octal") {
        otherResultLabel1.innerHTML = "Decimal";
        otherResultLabel2.innerHTML = "Hexadecimal";
    }
    // Binary to Hexadecimal
    else if (primaryIntType.value == "Binary" && secondaryIntType.value == "Hexadecimal") {
        otherResultLabel1.innerHTML = "Octal";
        otherResultLabel2.innerHTML = "Decimal";
    }
    // Octal to Binary
    else if (primaryIntType.value == "Octal" && secondaryIntType.value == "Binary") {
        otherResultLabel1.innerHTML = "Decimal";
        otherResultLabel2.innerHTML = "Hexadecimal";
    } 
    // Hexadecimal to Binary
    else if (primaryIntType.value == "Hexadecimal" && secondaryIntType.value == "Binary") {
        otherResultLabel1.innerHTML = "Octal";
        otherResultLabel2.innerHTML = "Decimal";
    } 
    // Octal to Hexadecimal
    else if (primaryIntType.value == "Octal" && secondaryIntType.value == "Hexadecimal") {
        otherResultLabel1.innerHTML = "Binary";
        otherResultLabel2.innerHTML = "Decimal";
    } 
    // Hexadecimal to Octal
    else if (primaryIntType.value == "Hexadecimal" && secondaryIntType.value == "Octal") {
        otherResultLabel1.innerHTML = "Binary";
        otherResultLabel2.innerHTML = "Decimal";
    } 
    else { 
        otherResult1.innerHTML = intInput.value;
        otherResult2.innerHTML = intInput.value;
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
            formula = "(" + currDigit.toString() + " * 2<sup>" + i + "</sup>)" + formula; 
        }
        else {
            formula = " + (" + currDigit.toString() + " * 2<sup>" + i + "</sup>)" + formula; 
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
            formula = "(" + currDigit.toString() + " * 8<sup>" + i + "</sup>)" + formula; 
        }
        else {
            formula = " + (" + currDigit.toString() + " * 8<sup>" + i + "</sup>)" + formula; 
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
            formula = "(" + currDigit.toString() + " * 16<sup>" + i + "</sup>)" + formula; 
        }
        else {
            formula = " + (" + currDigit.toString() + " * 16<sup>" + i + "</sup>)" + formula; 
        }
    }
    calculation.innerHTML = formula + " = " + decNum;    // Output calculation formula to DOM

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
        formula += (decNum + "/2 = " + Math.floor(decNum/2) + " <sub>R</sub>" + decNum%2 + "<br>");
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
        formula += (decNum + "/8 = " + Math.floor(decNum/8) + " <sub>R</sub>" + decNum%8 + "<br>");
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
            formula += (decNum + "/16 = " + Math.floor(decNum/16) + " <sub>R</sub>" + decNum%16 + "(" + hexDigit + ")<br>");
        }
        else {
            formula += (decNum + "/16 = " + Math.floor(decNum/16) + " <sub>R</sub>" + decNum%16 + "<br>");
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

function hexToBin(num)
{
    let hexNum = num;
    let hexNumLength = hexNum.toString().length;
    let formula = "";
    let chunks = "";

    // Convert
    let result = hexToDec(hexNum);
    result = decToBin(result);

    // Output calculation
    formula += hexNum + "<br>= ";
    for (let i=0; i < hexNumLength; i++)
    {
        let currDigit = hexNum[i];
        formula += currDigit + " ";
    }
    
    let resLength = result.toString().length;
    let tempResult = result;
    for (let i=0; i < result.toString().length; i+=4)
    {
        if (resLength >= 4) {
            currBlock = tempResult.toString().slice(resLength-4, resLength);
            tempResult = tempResult.toString().slice(0, resLength-4);
            resLength -= 4;
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
    let octNum = num;
    let octNumLength = octNum.toString().length;
    let formula = "";
    let chunks = "";
    let result = octToBin(octNum);  // Convert oct to bin

    // OUTPUT CALCULATION
    // Print full oct num
    formula += octNum + "<br>= ";    
    
    // Print digit-separated full oct num
    for (let i=0; i < octNumLength; i++)    
    {
        let currDigit = octNum[i];
        formula += currDigit + " ";
    }

    // Print 3-bit-separated binary result
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

    // Print 4-bit-separated binary result
    resLength = result.toString().length;
    tempResult = result;
    chunks = "";
    for (let i=0; i < result.toString().length; i+=4)   
    {
        if (resLength >= 4) {
            currBlock = tempResult.toString().slice(resLength-4, resLength);
            tempResult = tempResult.toString().slice(0, resLength-4);
            resLength -= 4;
        }
        else {
            currBlock = tempResult.toString().slice(0, resLength);
        }

        chunks = currBlock + " " + chunks;
    }
    formula += "<br>= " + chunks;

    // Convert bin to oct
    result = binToHex(result);  

    // Print digit-separated full oct num
    resLength = result.toString().length;
    tempResult = result;
    formula += "<br>= ";
    for (let i=0; i < resLength; i++)    
    {
        let currDigit = tempResult[i];
        formula += currDigit + " ";
    }

    // Print and return final result
    formula += "<br>= " + result;
    calculation.innerHTML = formula;    

    return result;
}
function hexToOct(num)
{
    let hexNum = num;
    let hexNumLength = hexNum.toString().length;
    let formula = "";
    let chunks = "";
    let result = hexToBin(hexNum);  // Convert hex to bin

    // Output calculation
    formula += hexNum + "<br>= ";           // print full hex num
    for (let i=0; i < hexNumLength; i++)    // print digit-separated full hex num
    {
        let currDigit = hexNum[i];
        formula += currDigit + " ";
    }
    
    let resLength = result.toString().length;
    let tempResult = result;
    for (let i=0; i < result.toString().length; i+=4)   // print 4-bit-separated binary result
    {
        if (resLength >= 4) {
            currBlock = tempResult.toString().slice(resLength-4, resLength);
            tempResult = tempResult.toString().slice(0, resLength-4);
            resLength -= 4;
        }
        else {
            currBlock = tempResult.toString().slice(0, resLength);
        }

        chunks = currBlock + " " + chunks;
    }
    formula += "<br>= " + chunks;

    resLength = result.toString().length;
    tempResult = result;
    chunks = "";
    for (let i=0; i < result.toString().length; i+=3)   // print 3-bit-separated binary result
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

    result = binToOct(result);  // Convert bin to oct

    resLength = result.toString().length;
    tempResult = result;
    formula += "<br>= ";
    for (let i=0; i < resLength; i++)    // print digit-separated full oct num
    {
        let currDigit = tempResult[i];
        formula += currDigit + " ";
    }

    formula += "<br>= " + result;
    calculation.innerHTML = formula;    // print final result

    return result;
}







// ACTION BUTTONS
    function swapTypes() {
        let temp = primaryIntType.value;
        primaryIntType.value = secondaryIntType.value;
        secondaryIntType.value = temp;
        setType();
    }
/////





// DARK MODE
    let darkMode = localStorage.getItem("darkMode");    // Declare local storage var for dark mode

    // Declare site header buttons and icons
    let appsIcon = document.getElementById("appsIcon");
    let infoIcon = document.getElementById("infoIcon");
    let themeBtn = document.getElementById("themeBtn");
    let themeIcon = document.getElementById("themeIcon");

    // Declare body button icons
    let convertBtnIcon = document.getElementById("convertBtnIcon");
    let swapBtn2Icon = document.getElementById("swapBtn2Icon");
    let clearBtnIcon = document.getElementById("clearBtnIcon");
    convertBtnIcon.classList.add("filter-grey");
    swapBtn2Icon.classList.add("filter-grey");
    clearBtnIcon.classList.add("filter-grey");

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
        // Site button icons
        swapBtn.classList.add("filter-white");
        appsIcon.classList.add("filter-white");
        infoIcon.classList.add("filter-white");
        themeIcon.classList.add("filter-white");
        // Body button icons
        convertBtnIcon.classList.remove("filter-grey");
        swapBtn2Icon.classList.remove("filter-grey");
        clearBtnIcon.classList.remove("filter-grey");
        convertBtnIcon.classList.add("filter-white");
        swapBtn2Icon.classList.add("filter-white");
        clearBtnIcon.classList.add("filter-white");
    }

    // Change theme when button is clicked
    function toggleTheme() {
        darkMode = localStorage.getItem("darkMode");    
        
        if (darkMode !== "enabled") {
            enableDarkMode();
            // Site button icons
            swapBtn.classList.add("filter-white");
            appsIcon.classList.add("filter-white");
            infoIcon.classList.add("filter-white");
            themeIcon.classList.add("filter-white");
            // Body button icons
            convertBtnIcon.classList.remove("filter-grey");
            swapBtn2Icon.classList.remove("filter-grey");
            clearBtnIcon.classList.remove("filter-grey");
            convertBtnIcon.classList.add("filter-white");
            swapBtn2Icon.classList.add("filter-white");
            clearBtnIcon.classList.add("filter-white");
        }
        else {
            disableDarkMode();
            // Site button icons
            swapBtn.classList.remove("filter-white");
            appsIcon.classList.remove("filter-white");
            infoIcon.classList.remove("filter-white");
            themeIcon.classList.remove("filter-white");
            // Body button icons
            convertBtnIcon.classList.remove("filter-white");
            swapBtn2Icon.classList.remove("filter-white");
            clearBtnIcon.classList.remove("filter-white");
            convertBtnIcon.classList.add("filter-grey");
            swapBtn2Icon.classList.add("filter-grey");
            clearBtnIcon.classList.add("filter-grey");
        }
    }
/////

// OTHER HEADER BUTTONS
    function backToWigginsnet() {
        window.open("https://www.wigginsnet.com", "_blank");
    }
/////