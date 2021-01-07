function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate() {
    
}

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

displayPress();