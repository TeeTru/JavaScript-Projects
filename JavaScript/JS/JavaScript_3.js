//HTML DATA ATTRIBUTES
function displayType(capital) {
    var capitalType = capital.getAttribute("data-capital-type");
    alert(capitalType + " is the capital of " + capital.innerHTML + " !");
}