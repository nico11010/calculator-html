function clearDisplay() {
    document.getElementById("result").value = "";
}

function clearEntry() {
    let display = document.getElementById("result");
    display.value = "";
}

function appendCharacter(character) {
    let display = document.getElementById("result");
    display.value += character;
}

function calculateResult() {
    let display = document.getElementById("result");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

function calculateSquareRoot() {
    let display = document.getElementById("result");
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (e) {
        display.value = "Error";
    }
}
