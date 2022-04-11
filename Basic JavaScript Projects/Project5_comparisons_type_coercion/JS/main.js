document.write(typeof ("Hello, World!"));       //This returns the type of data so this is a string

document.write("20" + 5);           //This is the "type coercion" which returns the number "5" tacked to the string "20" 

function my_Function() {            //This will return a NaN which stands for Not a Number because you can not divide 0 by 0
    document.getElementById("Test").innerHTML = 0/0;
}

function NaN_Function() {
document.getElementById("Test_1").innerHTML = isNaN('This is a string');//This checks if something is a number by using the isNaN() function and would return "True" because it is not a number
}

function NaN_Function_1() {
document.getElementById("Test_2").innerHTML = isNaN('700');       //This will display "False" because it is a number
}

document.write(55E360);      //This number will return "Infinity", "E" represents 10 to the power of

document.write(-55E310);     //This number will return a "-Infinty" or a negative infinity

document.write(10 > 3);      //Boolean logic returns a True/False statement. In this example it will return "True" because 10 is greater than 3

document.write(20 < 5);     //In this example 5 is not greater than 20 so this would return a "False" statement

console.log(3 + 3);         //This returns the output of the equation in the console of the site and will display 6  

console.log(15 < 10);       //This will return the statement "False" in the console 

document.write(20 == 20);   //This is asking if the data on the left is equal to the data on the right and will return a "True" statement because 20 is equal to 20

document.write(5 == 11);    //This will return "False" because 5 is not equal to 11

X = 15;
Y = 15;

document.write(X === Y);    // the three equal signs are asking if the data on the left and right are equal as well as the same data type. and since they are both numbers it will return "True"

A = 100;
B = "100";
document.write(A === B);    // this will return a "false" because A is a number and B is a string, so even though 100 is equal to 100, a number and a string are not the same data type

C = "Blue";
D = "Blue";
document.write(C === D);    // This will work for all data types so in this case Blue is equal to Blue and they are both strings so the same data type and will return a "True" statement

E = "Green";
F = 50;
document.write(E === F);    // This will return a "false" statement because they are different values and data types

G = 55;
H = 60;
document.write(G === H);    // This will return a "False" statement because although they are the same data type they are different values 

document.write(5 > 2 && 10 > 4);    //"&&" represents "AND" which determines the logic between values and variables, both must be true to return "True" as in this examle where "5" is greater than "2" AND "10" is greater than "4"

document.write(5 > 10 && 10 > 4);   //This will return "False" because both are not true. 

document.write(5 > 10 || 10 > 4);   //"||" represents "OR" which determines if one OR the other is "True", with this example "10" is greater than "4" and even though "5" is not greater than "10", the statement would return "True" because one of the statements is true 

function not_Function() {           //The "!" is the "Not" operator which determines whether something is true or not so if __ is false, "True" will be returned
    document.getElementById("Not").innerHTML = ! (20 > 10); //Because "20" is greater than "10" this statement would return "False" 
}

function not_Function_1() {
    document.getElementById("Not_1").innerHTML = ! (5 > 10);//THis will give a "double negative" and will return a "True" statement 
}