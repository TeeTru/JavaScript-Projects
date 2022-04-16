//SWITCH STATEMENT
function Team_Function() {                      //the "switch" statement is a type of "conditional" statement and performs different actions based on the conditions presented to it 
    var Team_Output;
    var Teams = document.getElementById("Team_Input").value;
    var Team_String = " are a great team!";
    switch(Teams) {
        case "Lakers":
            Team_Output = "The Lakers" + Team_String;
        break;
        case "Trail Blazers":
            Team_Output = "The Trail Blazers" + Team_String;
        break;
        case "Nets":
            Team_Output = "The Nets" + Team_String;
        break;
        case "Jazz":
            Team_Output = "The Jazz" + Team_String;
        break;
        case "Warriors":
            Team_Output = "The Warriors" + Team_String;
        break;
        case "Clippers":
            Team_Output = "The Clippers" + Team_String;
        break;
        default:
            Team_Output = "Please enter a team exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML =Team_Output;
} 

//GETELEMENTBYCLASSNAME METHOD
function Hello_World_Function() {       //similar to the "getElementsByID()" method, but instead of calling on an ID it relates to a class
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}                                       //the A variable changes the first element when clicked 

//CANVAS ELEMENT
var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');
var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
my_gradient.addColorStop(0, "black");       //gradient add shade to the rectangle
my_gradient.addColorStop(1, "white");
ctx.fillStyle = my_gradient;
ctx.fillRect(10, 10, 500, 550);             //this determines the size of the grey shade
ctx.font = "75px Arial";                    //this sets the font size and font style
ctx.strokeText("Coding Rocks!",10,150);     //THis displays the text and determines the alignment