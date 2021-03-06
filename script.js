const numberButtons = document.querySelectorAll('button.calculator__number');
const operatorButtons = document.querySelectorAll('button.calculator__operator');

let getOperation = {
    add: function (x, y) {
        return parseFloat(x) + parseFloat(y);
    },

    subtract: function (x, y) {
        return parseFloat(x) - parseFloat(y);
    },

    multiply: function (x, y) {
        return parseFloat(x) * parseFloat(y);
    },

    divide: function (x, y) {
        return parseFloat(x) / parseFloat(y);
    }
}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById('display').textContent += button.textContent;
    })
});

document.addEventListener('keydown', (e) => {
    if (e.key >= 0 || e.key <= 9) {
        document.getElementById('display').textContent += e.key;
    }

    if (e.key === '.') {
        if (!document.getElementById('display').textContent.includes('.')) {
            document.getElementById('display').textContent += e.key;
            document.getElementById('dot').disabled = true;
        }
    }

    if (e.key === 'Delete') {
        clearDisplay();
    }
});

document.getElementById('dot').addEventListener('click', function () {
    document.getElementById('display').textContent += '.';

    if (document.getElementById('display').textContent.includes('.')) {
        document.getElementById('dot').disabled = true;
    }
});

function enableDot() {
    document.getElementById('dot').disabled = false;
};

function enableEqual() {
    document.getElementById('equal').disabled = false;
};

function disableEqual() {
    document.getElementById('equal').disabled = true;
}

function clearDisplay() {
    document.getElementById('display').textContent = '';
    displayedFirst = '0';
    displayedSecond = '0';
    enableDot();
    enableEqual();
};

document.getElementById('clear').addEventListener('click', function () {
    clearDisplay();
});

function operate() {

    let displayedFirst = '0';
    let displayedSecond = '0'
    let operation = '';

    operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener('click', (e) => {
            displayedFirst = document.getElementById('display').textContent;
            operation = e.target.id;
            document.getElementById('display').textContent = '';
            enableDot();
            enableEqual();
        })
    });

    document.addEventListener('keydown', (e) => {
        if (e.key == "+" || e.key == "-" || e.key == '*' || e.key == '/') {
            displayedFirst = document.getElementById('display').textContent;
            operation = e.key;
            document.getElementById('display').textContent = '';
            enableDot();
            enableEqual();
        }

        if (e.key == "Enter") {


            if (!document.getElementById('equal').disabled) {

                displayedSecond = document.getElementById('display').textContent;

                if (operation == '+' || operation == 'plus') {
                    document.getElementById('display').textContent = getOperation.add(displayedFirst, displayedSecond);
                }

                if (operation == '-' || operation == 'minus') {
                    document.getElementById('display').textContent = getOperation.subtract(displayedFirst, displayedSecond);
                }

                if (operation == '*' || operation == 'cross') {
                    document.getElementById('display').textContent = getOperation.multiply(displayedFirst, displayedSecond);
                }

                if (operation == '/' || operation == 'slash') {
                    document.getElementById('display').textContent = getOperation.divide(displayedFirst, displayedSecond);

                    if (displayedSecond === '0') {
                        document.getElementById('display').textContent = ':(';
                    }
                }


                disableEqual();
            }

            e.preventDefault();

        }

    });

    document.getElementById('equal').addEventListener('click', function () {

        if (!document.getElementById('equal').disabled) {

            displayedSecond = document.getElementById('display').textContent;

            if (operation == 'plus' || operation == '+') {

                document.getElementById('display').textContent = getOperation.add(displayedFirst, displayedSecond);
            }

            if (operation == 'minus' || operation == '-') {
                document.getElementById('display').textContent = getOperation.subtract(displayedFirst, displayedSecond);
            }

            if (operation == 'cross' || operation == '*') {
                document.getElementById('display').textContent = getOperation.multiply(displayedFirst, displayedSecond);
            }

            if (operation == 'slash' || operation == '/') {
                document.getElementById('display').textContent = getOperation.divide(displayedFirst, displayedSecond);

                if (displayedSecond == '0') {
                    document.getElementById('display').textContent = ':(';
                }
            }

            disableEqual();

        }
    });

    enableDot();
}

operate();