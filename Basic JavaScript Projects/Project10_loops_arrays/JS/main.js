//JS WHILE LOOPS
function call_Loop() {              //this example loops the program until the var "X" is equal to or greater than 11 (X < 11)
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;        // the "<br>" can be used to cause spacing in between text. with out it the program will display "12345678910"
        X++;                        //"X++" adds one digit to the previous count while "X--" would subtract one digit
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//STRING LENGTH PROPERTY AND LET KEYWORD
function string_Function() {          //this property finds out the length of the string
    let text = "How are you doing today?";  //the "let" keyword is only accessed within the block and cannot be accessed outside of the block
    let length = text.length;
    document.getElementById("Length").innerHTML = length;
}                                     //this will return "24" because that is the lenth of the string for "let text = How are you doing today?"

//FOR LOOPS 
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";                   //this is usefull because it makes it so you don't need to individually write a "document.write()" method for each instrument
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}                                    //this will return an ordered list of every instrument

//ARRAYS AND OBJECTS
function array_Function() {           //arrays are made up of collumns and/or rows  
    var NBA_Player = [];              //"[]" represent the index which indicates where an element is located starting from the left and goes from "0,1,2,3,etc"
    NBA_Player[0] = "shooting"; 
    NBA_Player[1] = "dribbling";
    NBA_Player[2] = "running";
    NBA_Player[3] = "resting";
    document.getElementById("Array").innerHTML = "In this moment, the NBA player is " +
        NBA_Player[1] + ".";         //this well return the statement that the NBA player is "dribbling"
}

//FUNCTION SCOPE
    //"Scope" refers to functions, variables, and objects you can access in your program
function myFunction() {              //this is an example of one of two types of a "local scope" and specifically this is a "function scope" 
    var carName = "Corvette";        //"function scopes" are only available within the function they are created in
    document.getElementById("Example").innerHTML = carName;
}

//BLOCK SCOPE
    //"block scopes" are variables only visible within a given block of enclosed curly brackets

//CONST KEYWORD
function constant_function() {      //the "const keyword" creates a scope that can be global or local to the block that it is declared
    const Vehical = {type:"car", brand:"toyota", color:"black"};
    Vehical.color = "blue";          //the variable identifier cannot be reassigned and contains information that will never change
    Vehical.price = "$35,000";      //we could change the color "black" value for the color property to "blue" but not change the identifier "Vehicle or type"
    document.getElementById("Constant").innerHTML = "The cost of the " + Vehical.color + " " +
        Vehical.type + " was " + Vehical.price; 
}                                    //this will display "the cost of the blue car was $35,000"

//RETURN STATEMENT
let x = myFunction(12, 10);             //the "return" statement stops the execution of a function and returns the value
document.getElementById("Return").innerHTML = x;
function myFunction(a, b) {
    return a * b;                   //this will display "120"
}                  

//OBJECTS   
let gun = {                         //"objects" are data structures that can have properties and methods
    type: "pistol ",                //the "object" is the "gun" with the (type, make, model, calliber) as the properties
    make: "Ruger ",
    model: "p95 ",
    calliber: "9mm ",
    description : function() {      //the method is the "description function"
        return "The gun is a " + this.calliber + this.make + this.model + this.type;
    }
};
document.getElementById("Gun_Object").innerHTML = gun.description();

//BREAK STATEMENT
let text = "";                      //the "break" statement "jumps out" of a loop
for (let i = 0; i < 10; i++) {
    if (i === 5) { break; }         //this tells the loop to "break" or jump out of the loop when it reaches "5" instead of "11" and no longer continues the loop
    text += "The number is " + i + "<br>";
}
document.getElementById("Break").innerHTML = text;

//CONTINUE STATEMENT
let count = "";                     //the "continue" statement "jumps over" or skips the specified number 
for (let z = 0; z < 7; z++) {
    if(z === 4) { continue; }       //in this example it will skip "4" and continue counting the loop until the condition "7" is reached
    count += "The number is " + z + "<br>";
}
document.getElementById("Count").innerHTML = count;