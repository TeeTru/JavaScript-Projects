//FORM VALIDATION
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

//FORM VALIDATION
function validateForm() {
    let x = document.forms["myForm"]["lname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

//FORM VALIDATION
function validateForm() {
    let x = document.forms["myForm"]["phonenumber"].value;
    if (x == "") {
        alert("Phone number must be filled out");
        return false;
    }
}

//Popup form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//Automatic slideshow jQuery run after DOM is ready
$(document).ready(function(){
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
    .fadeout(1000)
    .next()
    .fadein(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);
});