//GLOBAL AND LOCAL VARIABLES
var X = 10                              //This is an example of a "global variable" (X) because it is outside of the function but can still be accessed
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X+ 100);
}
Add_numbers_1();                        //this would return "30" and "110" because the variable can be accessed outside the function
Add_numbers_2();

function Add_numbers_3() {              //this is an example of a "local variable" because it is written inside the function and can not be accessed outside of it
    var Y = 20;
    document.write(30 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 100);
    }
Add_numbers_3();                        //THis would return "50" because it is within the function
Add_numbers_4();                        //THid would not return a number because the variable would not be defined because it can not access the variable "Y" because it can not be accessed outside of the function it is in


//DEBUGGING USING CONSOLE.LOG() METHOD
function Add_numbers_3() {              //This example shows how you can debug and figure out why it did not display a result by using the console.log() method
    var Y = 20;
    console.log(15 + Y);
}
function Add_numbers_4() {
    console.log(Y + 100);
}
Add_numbers_3;
Add_numbers_4;                          //by executing this code into the browser, you need to access to open the console to see that "Y is not defined", becuase it will not display in browser


//IF STATEMENTS AND CONDITIONAL STATEMENTS
if (5 < 9) {
    document.write("The left number is smaller than the number on the right.")
}

function get_Date() {                           // the Date().getHours() method returns the local times and are listed as integers between 0 and 23 (military time)
    if (new Date().getHours() < 18) {           // in this code we are stated that if it is before or ">" less than 6:00pm "18" than display "HOw are you?" if ran later than 6:00pm it would not display anything
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function greater_Than() {
    if (15 > 7) {
        document.getElementById("Demo").innerHTML = "Hello, World!";
    }
}

//ELSE STATEMENTS
function Age_Function() {                               //this example shows that "if" they are older than 21 then "old enough to drink" will display 
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "You are old enough to drink!";
    }
    else {                                              //"else" represents what to display if they are not older than 21 then "Not old enough to drink" will display
        Drink = "You are not old enough to drink!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drink;
}


//ELSE IF STATEMENTS
function Time_function() {                      //The "else if" statement is followed by an "if" statement and is executed if the "if" statement is false.
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }                                               //This program pulls the time form your computer and displays the time.
    document.getElementById("Time_of_day").innerHTML = Reply;
}