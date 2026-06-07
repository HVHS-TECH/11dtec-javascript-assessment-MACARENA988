console.log("script.js")
console.log("Hello world!")

//Varibles

let userOrder = ["Eggs", "Steak", "Avocado", "Raw milk", "Banana", "Cheese"];
/****************************
Main code:
****************************/


const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
/****************************
Functions:
****************************/



function getFormInput() {
    const ORDER_FIELD = document.getElementById("orderField");
    let userOrder = Number(ORDER_FIELD.value);

    OUTPUT.innerHTML = "1. "+ userOrder[userOrder]+ "2. "<br>";
  
   
  }