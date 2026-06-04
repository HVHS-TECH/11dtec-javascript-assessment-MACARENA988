console.log("script.js")
console.log("Hello world!")

//Varibles

/****************************
Main code:
****************************/


const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
/****************************
Functions:
****************************/



function getFormInput() {
    const ORDER_FIELD = document.getElementById("orderField");
    let userOrder = Number(ORDER_FIELD_FIELD.value);
    OUTPUT.innerHTML = "<p>You have " + userOrder + ".</p>";
  
   
  }