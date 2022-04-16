function My_First_Function() {              //Defining a function and naming it
    var str = "Surprise!!!";   //Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str; //Putting the value of the variable into the HTML elementFromPoint with the "Button_Text" id
}

function myFunction() {                     
    var sentence = "I am learning";         //Concatenating using the += operator 
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence
}
