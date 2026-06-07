console.log("script.js")
console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
//Varibles

let userNumber = ["Eggs", "Steak", "Avocado", "Raw milk", "Banana", "Cheese"];
/****************************
Main code:
****************************/



/****************************
Functions:
****************************/



function getFormInput() {
    const ORDER_FIELD = document.getElementById("orderField");
    const NAME_FIELD = document.getElementById("nameField");
    let order = Number(ORDER_FIELD.value);
    let name = NAME_FIELD.value;

    OUTPUT.innerHTML = "Thanks "+name+" for ordering at Jacob's auraful cafe.<br>";
    OUTPUT.innerHTML += "You ordered "+ userNumber[order-1]+ ".<br>";

}