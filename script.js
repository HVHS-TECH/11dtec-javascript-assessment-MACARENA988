console.log("script.js")
console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const RECEIPT = document.getElementById("receiptOutput");


//Arrays
//the menu
let items = ["Eggs(Dozen)", "Steak(500g)", "Avocado", "Rawmilk(1L)", "Water(600ml)", "Nuts"];

//the prices of the foods and drinks
let prices = [5, 20, 1, 10, 2, 5];

//makes it so the code can read the quantities
let quantities = []
/****************************
Main code:

****************************/

//puts the menu on the page
for (let i = 0; i < items.length; i++) {
  OUTPUT.innerHTML += "$" + prices[i] + ": " + items[i] + " " + '<input placeholder="Quantity..." type="number" min="0" id="' + items[i] + 'Field" name="formMoney"   oninput="updateCart()"> <img src="' + items[i] + '.jpg"> <br><br>';
  console.log("$" + prices[i] + ": " + items[i] + " " + '<input placeholder="Quantity..." type="number" id="' + items[i] + 'Field" name="formMoney"   oninput="updateCart()" <img src="' + items[i] + '.jpg"> <br><br>')
}


/****************************
Functions:
****************************/

//Calculate change function
function calculateChange(_money, _price) {
  let change = _money - _price;
  return change;
}

//This gives the reciept 
function getFormInput() {
  const NAME_FIELD = document.getElementById("nameField");
  const MONEY_FIELD = document.getElementById("moneyField");
  let name = NAME_FIELD.value;

  //checks for numbers and other invalid characters
  if (!/^[A-Za-z\s]+$/.test(name)) {
    RECEIPT.innerHTML = "<h3>Please use a valid name.</h3>";
    return;
  }

  //Mr. you cant break my code, (You have to put a name)
  if (name === "") {
    RECEIPT.innerHTML = "<h3>Please use a valid name.</h3>";
    return;
  }

  let money = Number(MONEY_FIELD.value);
  let cost = 0;

  //This interprests the user's order
  for (let i = 0; i < items.length; i++) {
    const menuField = document.getElementById(items[i] + "Field")
    quantities[i] = Number(menuField.value);
    let total = quantities[i] * prices[i]


    //This makes it so they can't order a negtive amonut of items 
    if (total < 0) {
      RECEIPT.innerHTML = "<h3>Do not use a negative quantity</h3>";
      return;
    }

    cost += total
  }

  //Mr. you cant break my code, ( of course you need to buy something to order)

  if (cost === 0) {
    RECEIPT.innerHTML = "<h3>Please order at least one item.</h3>";
    return;
  }

  //The following code in this function is the code that gets printed onto the receipt.
  RECEIPT.innerHTML = "<h3>Name: " + name + "</h3>";
  RECEIPT.innerHTML += "<h4>Here's your receipt: " + "</h4><br>";

  if (cost > money) {
    RECEIPT.innerHTML = "<h3>Sorry, you can't afford these items.</h3><br>";
  } else {
    for (let i = 0; i < items.length; i++) {
      if (quantities[i] > 0) {
        let total = quantities[i] * prices[i]
        RECEIPT.innerHTML += quantities[i] + "x " + items[i] + " total: $" + total + "<br>";
      }
    }

    RECEIPT.innerHTML += "<h4>Total: $" + cost + "</h4>";
    RECEIPT.innerHTML += "<h4>Money provided: $" + money + "</h4>";
    RECEIPT.innerHTML += "<h4>Change: $" + calculateChange(money, cost) + "</h4>";
    RECEIPT.innerHTML += "<p>Come back anytime " + name + ". We appreciate you for ordering at Dietmaxxing.";
  }
}


//This function resets the order and leaves all fields blank
function resetOrder() {
  document.getElementById("nameField").value = "";
  document.getElementById("moneyField").value = "";

  for (let i = 0; i < items.length; i++) {
    const menuField = document.getElementById(items[i] + "Field")
    menuField.value = "";
  }
  quantities = [];

  document.getElementById("receiptOutput").innerHTML = "";
  updateCart();
}

//This is stating the carts items
function updateCart() {
  let total = 0;
  let itemCount = 0;
  let cartHTML = "";

  for (let i = 0; i < items.length; i++) {
    const menuField = document.getElementById(items[i] + "Field")
    let quantity = Number(menuField.value);
    if (quantity > 0) {
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


//This is the dropdown from the cart items and if the cart is pressed it will activate the updateCart(); function
function toggleCart() {
  const dropDown = document.getElementById("cartDropdown")
  updateCart();
  if (dropDown.style.display === "none") {
    dropDown.style.display = "block";
  } else {
    dropDown.style.display = "none";
  }
} 