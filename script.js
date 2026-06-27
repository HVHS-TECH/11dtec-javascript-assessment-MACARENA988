console.log("script.js")
console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

//Arrays
let items = ["Eggs", "Steak", "Avocado", "Rawmilk"];

let prices = [5, 20, 1, 10, 77];

/****************************
Main code:

****************************/
for (let i = 0; i < items.length; i++) {
  OUTPUT.innerHTML += "$" + prices[i] + ": " + items[i] + " " + '<input placeholder="Quantity..." type="number" id="' + items[i] + 'Field" name="formMoney"><br><br>';
}


/****************************
Functions:
****************************/
function calculateChange(_money, _price) {
  let change = _money - _price;
  return change;
}

function viewOrder() {

  for (let i = 0; i < items.length; i++) {
    const menuField = document.getElementById(items[i] + "Field")
      let quantity = Number(menuField.value);
      let total = quantity * prices[i]
      let cost += quantity * prices[i]
      OUTPUT.innerHTML += items[i] + " total: $" + total + "<br>";
       console.log(items[i] + " total: $" + total + "<br>")
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



