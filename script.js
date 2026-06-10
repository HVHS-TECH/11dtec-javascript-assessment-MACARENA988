console.log("script.js")
console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
//Varibles
/****************************
Eggs = 5
Steak = 20
Avocado = 1
Raw milk = 10
****************************/
let userNumber = ["eggs", "steak", "avocado", "raw milk"];

let price = [5, 20, 1, 10];
/****************************
Main code:
****************************/



/****************************
Functions:
****************************/
function calculateChange(_money, _price) {
  let change = _money - _price;
  return change;
}

function getFormInput() {
    const NAME_FIELD = document.getElementById("nameField");
    const ORDER_FIELD = document.getElementById("orderField");
    const MONEY_FIELD = document.getElementById("moneyField");
    let name = NAME_FIELD.value;
    let order = Number(ORDER_FIELD.value);
    let cost = Number(ORDER_FIELD.value);
    let money = Number(MONEY_FIELD.value);

    OUTPUT.innerHTML = "<p>Come back anytime "+ name +", we apprieciate you for ordering at Dietmaxxing.";
    OUTPUT.innerHTML += "You ordered "+ userNumber[order-1] + ".</p>";
    
    if (money >= price[cost]) {
      OUTPUT.innerHTML += "You will get $" + calculateChange (money, price[cost-1]) + " change.";
    } else {
      OUTPUT.innerHTML += "Sorry you can't afford "+  userNumber[order-1] + "</p>";
    }        

}

