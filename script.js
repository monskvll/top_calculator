const numberButtons = document.querySelectorAll('button.calculator__number');

let getOperation = {
    add: function(x, y) {
        return x + y;
    },

    subtract: function(x, y) {
        return x - y;
    },

    multiply: function(x, y) {
        return x * y;
    },

    divide: function(x, y) {
        return x / y;
    }
}

function displayPress() {
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            document.getElementById('display').textContent += button.textContent;
        })
    });
}

function clearVariables() {
    document.getElementById("clear").addEventListener("click", function() {
        document.getElementById("display").textContent = "";
        displayedFirst = "";
        displayedSecond = "";        
    });
}

function operate() {    

    let operatorButtons = document.querySelectorAll('button.calculator__operator');

    operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener('click', (e) => {            

            let displayed = document.getElementById("display").textContent;            

            document.getElementById("display").textContent = "";

            function resetVariable() {
                displayed = 0;
            }              

            function resetVariableCross() {
                displayed = 1;
            }

            function resetVariableSlash() {
                displayed = 1;
            }


            if (e.target.id === "plus") {
                document.getElementById("equal").addEventListener("click", function () {
                    let displayedFirst = displayed;                
                    let displayedSecond = Math.abs(document.getElementById("display").textContent);                    
                    let displayedResult = getOperation.add(parseFloat(displayedFirst), parseFloat(displayedSecond));    
                    document.getElementById("display").textContent = displayedResult;
                    console.log('Displayed result:' + displayedResult);

                    resetVariable();                    
                });     
            }

            if (e.target.id === "minus") {
                document.getElementById("equal").addEventListener("click", function () {
                    let displayedFirst = displayed;                
                    let displayedSecond = Math.abs(document.getElementById("display").textContent);
                    let displayedResult = getOperation.subtract(parseFloat(displayedFirst), parseFloat(displayedSecond));    
                    document.getElementById("display").textContent = displayedResult;
                    
                    resetVariable();                                       
                });                
            }

            if (e.target.id === "cross") {
                document.getElementById("equal").addEventListener("click", function () {
                    let displayedFirst = displayed;                
                    let displayedSecond = Math.abs(document.getElementById("display").textContent);                    
                    let displayedResult = getOperation.multiply(parseFloat(displayedFirst), parseFloat(displayedSecond));    
                    document.getElementById("display").textContent = displayedResult;

                    resetVariableCross();
                });     
            }

            if (e.target.id === "slash") {
                document.getElementById("equal").addEventListener("click", function () {
                    let displayedFirst = displayed;                
                    let displayedSecond = Math.abs(document.getElementById("display").textContent);
                    console.log(displayedFirst);
                    console.log(displayedSecond);
                    let displayedResult = getOperation.divide(parseFloat(displayedFirst), parseFloat(displayedSecond));    
                    document.getElementById("display").textContent = displayedResult;
                    console.log('Displayed result:' + displayedResult);
                    resetVariableSlash();
                });     
            }
        })        
    });
}

displayPress();
operate();
clearVariables();