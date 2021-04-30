const BINARY_USER_INPUT = document.querySelector('#userInput');
const CONVERTED_TO_DEC = document.querySelector('.convertedToDec');
const CONVERT_BUTTON = document.querySelector('#convert-btn');
let reversedBinaryValue = [];

BINARY_USER_INPUT.addEventListener('keydown', checkBinaryInput);
BINARY_USER_INPUT.addEventListener('input', updateBinaryValue);
CONVERT_BUTTON.addEventListener('click', convertBinaryToDecimals);

function checkBinaryInput(event) {
    const NOT_ZERO_OR_ONE = event.key !== "0" && event.key !== "1" && event.key !== "Backspace";

    console.log(event.key);
    if (NOT_ZERO_OR_ONE) {
        alert('Type a valid binary value! 0 or 1');
    }
}

function updateBinaryValue(event) {
    BINARY_USER_INPUT.textContent = event.target.value;
    const value = BINARY_USER_INPUT.textContent;
    // STUDY MAP TO UNDERSTAND WHY DOES THIS WORK:
    const updatedValue = value.split``.map(x=>+x); 
    reversedBinaryValue = updatedValue.reverse();
}

function getLengthOfValue(number, index) {
    return number === 1 ? (1 * 2 ** index) : 0;
}

function convertBinaryToDecimals(event) {
    event.preventDefault();
    let sum = 0; 
    for (const [index, bi] of reversedBinaryValue.entries()) {
        let result = getLengthOfValue(bi, index);
        sum += result;
    }
    console.log(sum);
    CONVERTED_TO_DEC.innerHTML += `<p><strong>${reversedBinaryValue.reverse``.join("")}</strong>: ${sum}</p>`;
}
