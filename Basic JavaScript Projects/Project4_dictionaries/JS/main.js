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