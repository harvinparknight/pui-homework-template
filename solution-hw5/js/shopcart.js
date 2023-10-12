//value of select options mapping
//made nicer and shorter style with chatgpt
let glazingOptions = [
    { text: "Keep original", value:0},
    { text: "Sugar milk", value:0},
    { text: "Vanilla milk", value:0.5},
    { text: "Double chocolate", value:1.5}
];
let packOptions = [
    { text: "1", value: 1 },
    { text: "3", value: 3 },
    { text: "6", value: 5 },
    { text: "12", value: 10 }
];

//Array for cart

const cart = new Set();

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.rollPrice = rollPrice;
    }
}

// hw 5 section
// preloading cart
function addToCartComplete(rollType, rollGlazing, packSize, basePrice) {
    let finalPrice = basePrice;
    for (let glazeChoice of glazingOptions){
        if (glazeChoice.text == rollGlazing){
            finalPrice += glazeChoice.value;
        }
    }
    for (let packPrice of packOptions){
        if (packPrice.text == packSize){
            finalPrice *= packPrice.value;
        }
    }
    finalPrice = finalPrice.toFixed(2);
    let newRoll = new Roll(rollType, rollGlazing, packSize, finalPrice);
    cart.add(newRoll);
}

//calculate the total price of all items in cart
function calcTotalCart(cart){
    let total = 0;
    if (cart.length == 0){
        return 0.00
    }
    else{
        for (let item of cart){
            total += parseFloat(item.rollPrice);
        }
    }
    return total;
}




addToCartComplete("Original", "Sugar milk", 1, 2.49);
addToCartComplete("Walnut", "Vanilla milk", 12, 3.49);
addToCartComplete("Raisin", "Sugar milk", 3, 2.99);
addToCartComplete("Apple", "Keep original", 3, 3.49);


console.log(cart);


//DOM the cart

function createElement(roll) {
    //make clone
    const template = document.querySelector("#cartItemTemplate");
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector("#cartBlock");

    console.log(roll.element);
    const remove = roll.element.querySelector(".remove");
    remove.addEventListener("click", ()=>{
        removeRoll(roll);
    })

    const cartHolder = document.querySelector("#cartContent");
    console.log(roll.element);
    cartHolder.append(roll.element);
    updateElement(roll);
}

function updateElement(roll) {
    const imgElement = roll.element.querySelector("img");
    imgElement.src = '../assets/products/' + rolls[roll.type].imageFile;
    imgElement.alt = "image of " + roll.type + " cinnamon roll";

    roll.element.querySelector(".product-name").innerText = roll.type + " Cinnamon Roll";
    roll.element.querySelector(".glazing").innerText = roll.glazing;
    roll.element.querySelector(".pack-size").innerText = "Pack Size: " + roll.size;
    roll.element.querySelector(".price").innerText = "$" + roll.rollPrice;
}

//update calculated totals
function updateCartTotal(){
    let cartTotal = document.querySelector("#calculated-cart-total");
    let total = calcTotalCart(cart);
    total = total.toFixed(2);
    if (total == 0){
        cartTotal.innerText = "$ 0.00";
    }
    else {
        cartTotal.innerText = "$ " + calcTotalCart(cart);
    }
    
}
//remove removes from array

function removeRoll(roll){
    roll.element.remove();
    cart.delete(roll);

    updateCartTotal();
}

updateCartTotal();

for (const roll of cart) {
    console.log(roll);
    createElement(roll);
  }

