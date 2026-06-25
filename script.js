console.log("script.js")
console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const EGGS_FIELD = document.getElementById("eggsField");
const STEAK_FIELD = document.getElementById("steakField");
const AVOCADO_FIELD = document.getElementById("avocadoField");
const RAWMILK_FIELD = document.getElementById("rawmilkField");

//Arrays
let userNumber = ["Eggs", "Steak", "Avocado", "Rawmilk"];

let price = [5, 20, 1, 10, 77];

/****************************
Main code:

****************************/
for (let i = 0; i < userNumber.length; i++) {
  console.log("$" + price[i] + ":" + userNumber[i] + '<input placeholder="Quantity..." type="number" id="' + userNumber[i] + 'Field" name="formMoney"><br><br>')
  OUTPUT.innerHTML += "$" + price[i] + ": " + userNumber[i] + " " + '<input placeholder="Quantity..." type="number" id="' + userNumber[i] + 'Field" name="formMoney"><br><br>';
}


/****************************
Functions:
****************************/
/****************************
function getFormInput() {
  const NAME_FIELD = document.getElementById("nameField");
  const ORDER_FIELD = document.getElementById("orderField");
  const MONEY_FIELD = document.getElementById("moneyField");
  let name = NAME_FIELD.value;
  let order = Number(ORDER_FIELD.value);
  let cost = Number(ORDER_FIELD.value);
  let money = Number(MONEY_FIELD.value);

  OUTPUT.innerHTML = "<p>Come back anytime " + name + ", we apprieciate you for ordering at Dietmaxxing.";
  OUTPUT.innerHTML += "You ordered " + userNumber[order - 1] + ".</p>";

  if (money >= price[cost - 1]) {
    OUTPUT.innerHTML += "You will get $" + calculateChange(money, price[cost - 1]) + " change.";
  } else {
    OUTPUT.innerHTML += "Sorry you can't afford " + userNumber[order - 1] + "</p>";
  }

}
****************************/
function calculateChange(_money, _price) {
  let change = _money - _price;
  return change;
}

function viewOrder() {

  let amount = ["Number(EGGS_FIELD.value);", "Number(STEAK_FIELD.value);", " Number(AVOCADO_FIELD.value);", "Number(RAWMILK_FIELD.value);"];
  let userNumber = ["Eggs", "Steak", "Avocado", "Rawmilk"];
  let price = [5, 20, 1, 10, 77];
  let cost = eggsAmount * price[0] + steakAmount * price[1] + avocadoAmount * price[2] + rawmilkAmount * price[3];

  for (let i = 0; i < userNumber.length; i++) {
    OUTPUT.innerHTML += (amount[i] * price[i]) + " <br>";
  }

  for (let i = 0; i < userNumber.length; i++) {
    OUTPUT.innerHTML += userNumber[i] + ": " + amount[i] + " = $" + amount[i] * price[i] + " <br>";
  }

  OUTPUT.innerHTML += "Total: $" + cost + "<br><br>";
}

function getFormInput() {
  const NAME_FIELD = document.getElementById("nameField");
  const MONEY_FIELD = document.getElementById("moneyField");
  const EGGS_FIELD = document.getElementById("eggsField");
  const STEAK_FIELD = document.getElementById("steakField");
  const AVOCADO_FIELD = document.getElementById("avocadoField");
  const RAWMILK_FIELD = document.getElementById("rawmilkField");

  let name = NAME_FIELD.value;
  let money = Number(MONEY_FIELD.value);



  let eggsAmount = Number(EGGS_FIELD.value);
  let steakAmount = Number(STEAK_FIELD.value);
  let avocadoAmount = Number(AVOCADO_FIELD.value);
  let rawmilkAmount = Number(RAWMILK_FIELD.value);
  let cost = eggsAmount * price[0] + steakAmount * price[1] + avocadoAmount * price[2] + rawmilkAmount * price[3];

  if (cost > money) {
    OUTPUT.innerHTML += "Sorry, you can't afford these items.<br>";
  } else {
    OUTPUT.innerHTML = "<h3>Name: " + name + "</h3>";
    OUTPUT.innerHTML += "<h4>Here's your receipt: " + "</h4><br>";

    if (eggsAmount > 0) {
      OUTPUT.innerHTML += "Eggs: " + eggsAmount + " = $" + eggsAmount * price[0] + "<br>";
    }
    if (steakAmount > 0) {
      OUTPUT.innerHTML += "Steak: " + steakAmount + " = $" + steakAmount * price[1] + "<br>";
    }
    if (avocadoAmount > 0) {
      OUTPUT.innerHTML += "Avocado: " + avocadoAmount + " = $" + avocadoAmount * price[2] + "<br>";
    }
    if (rawmilkAmount > 0) {
      OUTPUT.innerHTML += "Raw milk: " + rawmilkAmount + " = $" + rawmilkAmount * price[3] + "<br>";
    }
    OUTPUT.innerHTML += "<h4>Total: $" + cost + "</h4>";
    OUTPUT.innerHTML += "<h4>Money provided: $" + money + "</h4>";
    OUTPUT.innerHTML += "<h4>Change: $" + calculateChange(money, cost) + "</h4>";

    OUTPUT.innerHTML += "<p>Come back anytime " + name + ", we apprieciate you for ordering at Dietmaxxing.";
  }
}



