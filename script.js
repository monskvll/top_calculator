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



/*
function displayPress()  {
    document.getElementById("one").addEventListener("click", function() {        
        document.getElementById("display").textContent += "1";        
    });

    document.getElementById("two").addEventListener("click", function() {
        document.getElementById("display").textContent += "2";
    });

    document.getElementById("three").addEventListener("click", function() {
        document.getElementById("display").textContent += "3";
    });

    document.getElementById("four").addEventListener("click", function() {
        document.getElementById("display").textContent += "4";
    });

    document.getElementById("five").addEventListener("click", function() {
        document.getElementById("display").textContent += "5";
    });

    document.getElementById("six").addEventListener("click", function() {
        document.getElementById("display").textContent += "6";
    });

    document.getElementById("seven").addEventListener("click", function() {
        document.getElementById("display").textContent += "7";
    });

    document.getElementById("eight").addEventListener("click", function() {
        document.getElementById("display").textContent += "8";
    });

    document.getElementById("nine").addEventListener("click", function() {
        document.getElementById("display").textContent += "9";
    });

    document.getElementById("zero").addEventListener("click", function() {
        document.getElementById("display").textContent += "0";
    });

    document.getElementById("dot").addEventListener("click", function() {
        document.getElementById("display").textContent += ".";
    });

    document.getElementById("clear").addEventListener("click", function() {
        document.getElementById("display").textContent = "";        
    });

}
*/

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

            if (e.target.id === "plus") {
                document.getElementById("equal").addEventListener("click", function () {
                    let displayedFirst = displayed;                
                    let displayedSecond = document.getElementById("display").textContent;
                    let displayedResult = getOperation.add(parseFloat(displayedFirst), parseFloat(displayedSecond));    
                    document.getElementById("display").textContent = displayedResult;
                    console.log('Displayed result:' + displayedResult);
                    resetVariable();                    
                });     
            }

            if (e.target.id === "minus") {
                document.getElementById("equal").addEventListener("click", function () {
                    let displayedFirst = displayed;                
                    let displayedSecond = document.getElementById("display").textContent;

                    console.log(displayedFirst);
                    console.log(displayedSecond);
                    let displayedResult = getOperation.subtract(parseFloat(displayedFirst), parseFloat(displayedSecond));    
                    document.getElementById("display").textContent = displayedResult;
                    console.log('Displayed result:' + displayedResult);
                    resetVariable();                    
                });                
            }
        })        
    });
}







    /*
    document.getElementById('plus').addEventListener("click", function() {

        let displayed = document.getElementById("display").textContent;

        console.log(displayed);

        document.getElementById("display").textContent = "";
        
        

        document.getElementById("equal").addEventListener("click", function () {
            let displayedFirst = displayed;                
            let displayedSecond = document.getElementById("display").textContent;     
            document.getElementById("display").textContent = add(parseInt(displayedFirst), parseInt(displayedSecond));        
        });
                                      
    });    
    */


displayPress();
operate();
clearVariables();