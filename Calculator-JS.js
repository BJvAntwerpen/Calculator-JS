var num = "";
var decimal = false;
var decs = 0;
var biggestDecs = 0;
var numbers = [];
var operators = [];
var answer = 0;

function numpad(event) {
    var NumpadIO = event.which || event.keyCode;
    if (NumpadIO == 48) {
        button(0);
        document.getElementById('button0').style.backgroundColor = "green";
        setTimeout(function(){document.getElementById('button0').style.backgroundColor = "yellow";}, 20);
    } else if (NumpadIO == 49) {
        button(1);
        document.getElementById('button1').style.backgroundColor = "green";
        setTimeout(function(){document.getElementById('button1').style.backgroundColor = "yellow";}, 20);
    } else if (NumpadIO == 50) {
        button(2);
        document.getElementById('button2').style.backgroundColor = "green";
        setTimeout(function(){document.getElementById('button2').style.backgroundColor = "yellow";}, 20);
    } else if (NumpadIO == 51) {
        button(3);
        document.getElementById('button3').style.backgroundColor = "green";
        setTimeout(function(){document.getElementById('button3').style.backgroundColor = "yellow";}, 20);
    } else if (NumpadIO == 52) {
        button(4);
        document.getElementById('button4').style.backgroundColor = "green";
        setTimeout(function(){document.getElementById('button4').style.backgroundColor = "yellow";}, 20);
    } else if (NumpadIO == 53) {
        button(5);
        document.getElementById('button5').style.backgroundColor = "green";
        setTimeout(function(){document.getElementById('button5').style.backgroundColor = "yellow";}, 20);
    } else if (NumpadIO == 54) {
        button(6);
        document.getElementById('button6').style.backgroundColor = "green";
        setTimeout(function(){document.getElementById('button6').style.backgroundColor = "yellow";}, 20);
    } else if (NumpadIO == 55) {
        button(7);
        document.getElementById('button7').style.backgroundColor = "green";
        setTimeout(function(){document.getElementById('button7').style.backgroundColor = "yellow";}, 20);
    } else if (NumpadIO == 56) {
        button(8);
        document.getElementById('button8').style.backgroundColor = "green";
        setTimeout(function(){document.getElementById('button8').style.backgroundColor = "yellow";}, 20);
    } else if (NumpadIO == 57) {
        button(9);
        document.getElementById('button9').style.backgroundColor = "green";
        setTimeout(function(){document.getElementById('button9').style.backgroundColor = "yellow";}, 20);
    } else if (NumpadIO == 47) {
        DIV();
        document.getElementById('buttonDIV').style.backgroundColor = "green";
        setTimeout(function(){document.getElementById('buttonDIV').style.backgroundColor = "yellow";}, 20);
    } else if (NumpadIO == 42) {
        MULT();
        document.getElementById('buttonMULT').style.backgroundColor = "green";
        setTimeout(function(){document.getElementById('buttonMULT').style.backgroundColor = "yellow";}, 20);
    } else if (NumpadIO == 45) {
        SUB();
        document.getElementById('buttonSUB').style.backgroundColor = "green";
        setTimeout(function(){document.getElementById('buttonSUB').style.backgroundColor = "yellow";}, 20);
    } else if (NumpadIO == 43) {
        ADD();
        document.getElementById('buttonADD').style.backgroundColor = "green";
        setTimeout(function(){document.getElementById('buttonADD').style.backgroundColor = "yellow";}, 20);
    } else if (NumpadIO == 13) {
        buttonANS();
        document.getElementById('buttonANS').style.backgroundColor = "green";
        setTimeout(function(){document.getElementById('buttonANS').style.backgroundColor = "yellow";}, 20);
    } else if (NumpadIO == 46) {
        addDecimal();
        document.getElementById('buttonDEC').style.backgroundColor = "green";
        setTimeout(function(){document.getElementById('buttonDEC').style.backgroundColor = "yellow";}, 20);
    } else if (NumpadIO == 67 || NumpadIO == 99) {
        ClearIO();
        document.getElementById('buttonCLR').style.backgroundColor = "green";
        setTimeout(function(){document.getElementById('buttonCLR').style.backgroundColor = "yellow";}, 20);
    }
}

function button(nmr) {
    num += nmr;
    document.getElementById('calcIO').innerHTML = num;
    console.log(nmr);
    if (decimal == true) {
        decs++;
    }
}

function addDecimal() {
    if (decimal == false) {
        num += "."
        decimal = true
        console.log('decimal added');
    }
}

/*
ClearIO
clears the numbers, also those in the array
*/

function ClearIO() {
    num = "";
    decimal = false;
    answer = 0;
    document.getElementById('calcIO').innerHTML = "0";
    document.getElementById('calc').innerHTML = "";
    emptyArrays();
    console.log('cleared')
}

/*
ClearInput
clears the current number for the next one
*/

function ClearInput() {
    num = "";
    decimal = false;
    decs = 0;
    document.getElementById('calcIO').innerHTML = "0";
}

function ADD() {
    num = Number(num);
    numbers.push(num);
    if (biggestDecs < decs) {
        biggestDecs = decs;
    }
    document.getElementById('calc').innerHTML += num + " + ";
    operators.push("+")
    console.log("ADD")
    ClearInput();
}

function SUB() {
    num = Number(num);
    numbers.push(num);
    if (biggestDecs < decs) {
        biggestDecs = decs;
    }
    document.getElementById('calc').innerHTML += num + " - ";
    operators.push("-")
    console.log("SUB")
    ClearInput();
}

function MULT() {
    num = Number(num);
    numbers.push(num);
    if (biggestDecs < decs) {
        biggestDecs = decs;
    }
    document.getElementById('calc').innerHTML += num + " x ";
    operators.push("x")
    console.log("MULT")
    ClearInput();
}

function DIV() {
    num = Number(num);
    numbers.push(num);
    if (biggestDecs < decs) {
        biggestDecs = decs;
    }
    document.getElementById('calc').innerHTML += num + " : ";
    operators.push(":")
    console.log("DIV")
    ClearInput();
}

function buttonANS() {
    answer = 0;
    num = Number(num);
    numbers.push(num);
    console.log(numbers);
    console.log(operators);
    ClearInput();
    var i;
    var l;
    var loop = operators.length;
    for (l = 0; l <= loop; l++) {
        for (i = 0; i <= operators.length; i++) {
            if (operators[i] == "x") {
                numbers.splice(i, 2, numbers[i] * numbers[i+1])
                operators.splice(i, 1)
            }
        }
        for (i = 0; i <= operators.length; i++) {
            if (operators[i] == ":") {
                numbers.splice(i, 2, numbers[i] / numbers[i+1])
                operators.splice(i, 1)
            }
        }
        for (i = 0; i <= operators.length; i++) {
            if (operators[i] == "+") {
                numbers.splice(i, 2, numbers[i] + numbers[i+1])
                operators.splice(i, 1)
            }
        }
        for (i = 0; i <= operators.length; i++) {
            if (operators[i] == "-") {
                numbers.splice(i, 2, numbers[i] - numbers[i+1])
                operators.splice(i, 1)
            }
        }
    }
    answer = numbers[0];
    if (biggestDecs > 0) {
        answer = answer.toFixed(biggestDecs);
    }
    document.getElementById('calcIO').innerHTML = answer;
    emptyArrays();
    biggestDecs = 0;
    document.getElementById('calc').innerHTML = ""
}

function emptyArrays() {
    var i;
    for (i=0; i <= numbers.length; i++) {
        numbers.pop();
    }
    for (i=0; i <= operators.length; i++) {
        operators.pop();
    }
}