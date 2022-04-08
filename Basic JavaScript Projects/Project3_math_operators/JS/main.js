function addition_Function() {          //Name of function
    var addition = 2 + 2;               //Assigned the variable "addition"
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {       
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 =" + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {                          //DOes multiple math equations
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {           //gives the remainer
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {       //does the opposite 
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

var Y = 5.25;       //decrement function
Y--;
document.write(Y);

window.alert(Math.random() * 100); //Random number between 0 and 100

function math_object_Function() {
    document.getElementById("Math").innerHTML = Math.PI;
}

var Z = 10      // increment function
Z++;
document.write(Z);