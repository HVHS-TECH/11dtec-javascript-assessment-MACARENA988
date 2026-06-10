console.log("script.js")
console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
//Varibles
/****************************
let Eggs = 5;
let Steak = 20;
let Avocado = 1;
let Raw milk = 10; 
****************************/
let userNumber = ["Eggs", "Steak", "Avocado", "Raw milk"];
/****************************
Main code:
****************************/



/****************************
Functions:
****************************/


function getFormInput() {
    const NAME_FIELD = document.getElementById("nameField");
    const ORDER_FIELD = document.getElementById("orderField");
    const MONEY_FIELD = document.getElementById("moneyField");
    let name = NAME_FIELD.value;
    let order = Number(ORDER_FIELD.value);
    let money = Number(MONEY_FIELD.value);

    OUTPUT.innerHTML = "Come back anytime "+ name +", we appriciate you for ordering at Dietmaxxing.<br>";
    OUTPUT.innerHTML += "You ordered "+ userNumber[order-1] + ".<br>";
    OUTPUT.innerHTML += "Your money is " + money + ".<br>";

/****************************
    if (userMoney >= order) {
        OUTPUT.innerHTML += "<p>You CAN afford a chocolate bar";
        OUTPUT.innerHTML += "<p>You will get $" + calculateChange (money, order) + " change.</p>";
      } else {
        OUTPUT.innerHTML += "<p>Sorry you CAN'T afford a chocolate bar</p>";
      }

    function calculateChange(_money, _price) {
        let change = _money - _price;
        return change;
    }
     ****************************/   
}