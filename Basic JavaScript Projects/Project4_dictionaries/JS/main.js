function my_Dictionary() {          //Name of Dictionary funciton
    var Vehicle = {                 //Assigning the variable as Vehicle
        Type:"SUV",             
        Color:"Black",
        Drive:"Automatic",
        Year:2007,                 //Does not need quotations cause it is numbers
        Doors:4                     
    };
    delete Vehicle.Color;           //Delete statement
    document.getElementById("Dictionary").innerHTML = Vehicle.Color;//Calls for the output of the deleted statement
}

//This operator gives the data type of variable.
document.write(typeof "Word");      //This is for a string

document.write(typeof 3);           //This is for a number

document.write("10" + 5);           //this is "type coercion" which would return 105 instead of adding it, it would tack "5" onto the string "10"