const BINARY_USER_INPUT = document.querySelector('#userInput');
let updatedValue;
BINARY_USER_INPUT.addEventListener('keydown', checkBinaryInput);
BINARY_USER_INPUT.addEventListener('input', updateBinaryValue);

function checkBinaryInput(event) {
    const NOT_ZERO_OR_ONE = event.key !== "0" && event.key !== "1" && event.key !== "Backspace";
    
    console.log(event.key);
    if (NOT_ZERO_OR_ONE) {
        alert('Type a valid binary value! 0 or 1');
    }
}

function updateBinaryValue(event) {
    BINARY_USER_INPUT.textContent = event.target.value;
    updatedValue = BINARY_USER_INPUT.textContent;
    const MAX_INPUT_LENGTH = BINARY_USER_INPUT.textContent.length > 8;
    console.log(updatedValue);
}


