
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {                              //This is a Ternary operator which operates on three values
    var Age, Can_vote;                                  //and can be used to assign a value to a variable based on a condition. also known as a "conditional operator"
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) {            //the function "Vehicle()" is the "object constructor"
    this.Vehicle_Make = Make;                           //"this" is a keyword which can not be assigned as a variable because it already indicates 
    this.Vehicle_Model = Model;                         //the object that is the owner of the code
    this.Vehicle_Year = Year;                           //when used within an ogject, the value of "this" is the object.
    this.Vehicle_Color = Color;                         //when used with a function, the value of "this" is the object that possesses the function
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colered " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Animal(Species, Breed, Age, Size) {
    this.Animal_Species = Species;
    this.Animal_Breed = Breed;
    this.Animal_Age = Age;
    this.Animal_Size = Size;
}
var Matt = new Animal("Dog", "Pitbull", 4, "Medium")
var Sam = new Animal("Cat", "Savannah", 2, "Small")
var Joe = new Animal("Horse", "Stallion", 14, "Large");
function myFunction_1() {
    document.getElementById("New_and_This").innerHTML = 
    "Sam has a " + Sam.Animal_Size + " " + Sam.Animal_Age + " year old " + Sam.Animal_Breed + " " +
     Sam.Animal_Species;
}

var X = this            //this example returns "(object Window)" because "this" is keyword with an assigned value so you can not use it to represent a value of the variable
document.write(X)


function Person(first, last, age, eye) {    //Constructor function for Person objects
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const myFather = new Person("Jose", "Trujillo", 68, "Hazel");   //Created a Person object
function myFunction_2() {
document.getElementById("Object_Constructor").innerHTML = 
"My father has " + myFather.eyeColor + "-colored eyes.";   //displays "My father has Hazel-colored eyes."
}

     


function myFunction_Nested() {                                           //This as an example of a "nested function"
    document.getElementById("Nested_Function").innerHTML = Count();      //The output would be "10"-"the Plus_one()" function is the nested function
    function Count() {
        var Starting_point = 5;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}