//CONCAT() METHOD

function complete_Sentence() {              //the "concat()" method concatenates (connects) two or more strings.
    var part_1 = "You are ";
    var part_2 = "now reading a ";
    var part_3 = "completed ";
    var part_4 = "sentence.";               //This code will return a complete sentence
    var full_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concat").innerHTML = full_sentence;
}


//SLICE() METHOD
     //the "slice()" method is a string method that cutts out a section of a string and displays it in a new string
function slice_Method(){
    var Sentence = "If a man does not have the mental capacity to read a teleprompter, then he is not fit to run a country.";
    var Section = Sentence.slice(27,33);                    //the numbers indicate which characters in your string will be cut out and displayed
    document.getElementById("Slice").innerHTML = Section;      
}                                                            // the code will display "mental"


//toUpperCase() METHOD
    //"toUpperCase()" method converts a string to uppercase letters
function all_caps_Function() {
    let text = "What in the world is going on!"
    let result = text.toUpperCase();
    document.getElementById("Scream").innerHTML = result;
}

//SEARCH() METHOD
    //"search()" searches a string for a word and returns the position of the first match
function find_Function() {
    let text = "Once upon a time, there was a little green elf that lived in the forest."
    let position = text.search("elf");
    document.getElementById("Locate").innerHTML = position; //this will return "43" because the first letter of the word "elf" was the 43rd index of the string  
}

//NUMBER METHODS
    //"Number" methods assist you in working with numbers and there are many types
    //this is the "toString()" method and returns a number as a string 
function string_Method() {
    var X =548;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}                       //THis is example will return the number:548 into the string "548" 


//TOPRECISION() METHOD
    //the "toPrecision()" method formats a number to a specified length
function precision_Method() {
    var Y = 29302.20398686938840213;
    document.getElementById("Precision").innerHTML = Y.toPrecision(10);
}                               //This will round up the number to "29302.20399"


//TOFIXED() METHOD
    //the "toFixed()" method converts a number to a string and rounds it up to a spedified number of decimals
function fix_Method() {
    let num = 9.79955;
    let n = num.toFixed(3);
    document.getElementById("Rounded").innerHTML = n;
}                       //this returned the string "9.800" because I requested it to round to specified (3) number of decimals  





//VALUEOF() METHOD
    //the "valueOf()" method returns the primitive value of a number
function value_Method() {
    let num = 20;
    let n = num.valueOf();
    document.getElementById("Primitive").innerHTML = n; 
}                           //This will return "20"