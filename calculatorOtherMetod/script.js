document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn');
    const result = document.getElementById('result');

    buttons.forEach(button => {
        const action = button.getAttribute('data-action');
        const value = button.getAttribute('data-value');

        button.addEventListener('click', function () {
            if (action === 'appendCharacter') {
                appendCharacter(value);
            } else if (action === 'clearEntry') {
                clearEntry();
            } else if (action === 'clearDisplay') {
                clearDisplay();
            } else if (action === 'calculateSquareRoot') {
                calculateSquareRoot();
            } else if (action === 'calculateResult') {
                calculateResult();
            }
        });
    });

    function appendCharacter(char) {
        result.value += char;
    }

    function clearEntry() {
        result.value = result.value.slice(0, -1);
    }

    function clearDisplay() {
        result.value = '';
    }

    function calculateSquareRoot() {
        result.value = Math.sqrt(parseFloat(result.value));
    }

    function calculateResult() {
        try {
            result.value = eval(result.value);
        } catch (e) {
            result.value = 'Error';
        }
    }
});
