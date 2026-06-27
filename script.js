console.log("script.js")
console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");



//Arrays
let items = ["Eggs", "Steak", "Avocado", "Rawmilk"];

let prices = [5, 20, 1, 10];

let quantities = []
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

  let cost = 0;

  for (let i = 0; i < items.length; i++) {
    const menuField = document.getElementById(items[i] + "Field")
    let quantity = Number(menuField.value);
    let total = quantity * prices[i]
    cost += total
    OUTPUT.innerHTML += items[i] + " total: $" + total + "<br>";

  }

  OUTPUT.innerHTML += "Total: $" + cost + "<br><br>";
}

function getFormInput() {
  const NAME_FIELD = document.getElementById("nameField");
  const MONEY_FIELD = document.getElementById("moneyField");
  let name = NAME_FIELD.value;
  let money = Number(MONEY_FIELD.value);
  let cost = 0;

  for (let i = 0; i < items.length; i++) {
      const menuField = document.getElementById(items[i] + "Field")
      quantities[i] = Number(menuField.value);
      let total = quantities[i] * prices[i]
      cost += total
    }

  if (cost > money) {
    OUTPUT.innerHTML = "Sorry, you can't afford these items.<br>";
  } else {

    OUTPUT.innerHTML = "<h3>Name: " + name + "</h3>";
    OUTPUT.innerHTML += "<h4>Here's your receipt: " + "</h4><br>";

    for (let i = 0; i < items.length; i++) {
      let total = quantities[i] * prices[i]
      OUTPUT.innerHTML += items[i] + " total: $" + total + "<br>";
    }

    OUTPUT.innerHTML += "<h4>Total: $" + cost + "</h4>";
    OUTPUT.innerHTML += "<h4>Money provided: $" + money + "</h4>";
    OUTPUT.innerHTML += "<h4>Change: $" + calculateChange(money, cost) + "</h4>";
    OUTPUT.innerHTML += "<p>Come back anytime " + name + ", we apprieciate you for ordering at Dietmaxxing.";
  }
}
function updateCart(){
let total = 0;
let itemCount = 0;
let cartHTML = "";

 for (let i = 0; i < items.length; i++) {
      const menuField = document.getElementById(items[i] + "Field")
     let quantity = Number(menuField.value);
      if (quantity > 0){
        let cost = quantity * prices[i]
        total += cost;
        itemCount += quantity;
        cartHTML += items[i] + " x" + quantity + " = $" + cost + "<br>";
      }
    }

    document.getElementById("cartBadge").innerHTML = itemCount;
    document.getElementById("cartContents").innerHTML = cartHTML || "Cart is empty";
    document.getElementById("cartTotal").innerHTML = total;
}



function toggleCart(){
const dropDown = document.getElementById("cartDropdown")
updateCart();
if (dropDown.style.display === "none"){
  dropDown.style.display = "block";
} else {
dropDown.style.display = "none";
}
} 
