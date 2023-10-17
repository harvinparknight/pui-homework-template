

//Array for cart

const cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.rollPrice = rollPrice;
    }
}




//customizing the page depending on the roll clicked
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

const basePrice = rolls[rollType].basePrice;
let initialPrice = document.querySelector('#dynamicprice');
initialPrice.innerText = basePrice;

const heading = document.querySelector('.title');
heading.innerText = rollType + ' Cinnamon Roll';

const image = document.querySelector('#bun');
image.src = '../assets/products/' + rolls[rollType].imageFile;
image.alt = "image of " + rollType + " cinnamon roll";



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

//populate select
let selectGlazing = document.querySelector('#glazingOptions');
for (let glaze of glazingOptions) {
    var option = document.createElement('option');
    option.text = glaze.text;
    option.value = glaze.value;
    selectGlazing.add(option);
}

let selectPack = document.querySelector('#packOptions');
for (let pack of packOptions) {
    var option = document.createElement('option');
    option.text = pack.text;
    option.value = pack.value;
    selectPack.add(option);
}

//creating const for roll construction
//grabbed from chatgpt on how to do current select, insanely wonky

let rollGlazing = selectGlazing.options[selectGlazing.selectedIndex].textContent;
let packSize = selectPack.options[selectPack.selectedIndex].textContent;


//base price variable
let glazingPrice = 0;
let packMultiplier = 1;

//change price for glazing change
function glazingChange(element) {
    const priceChange = element.value;
    glazingPrice = parseFloat(priceChange);
    let finalPrice = document.querySelector('#dynamicprice');
    let calc = (basePrice + glazingPrice) * packMultiplier;
    calc = calc.toFixed(2);
    finalPrice.innerText = calc;

    rollGlazing = selectGlazing.options[selectGlazing.selectedIndex].textContent;
}
  

//change price for pack change
function packChange(element) {
    const multiplierChange = element.value;
    packMultiplier = parseFloat(multiplierChange);
    let finalPrice = document.querySelector('#dynamicprice');
    let calc = (basePrice + glazingPrice) * packMultiplier;
    calc = calc.toFixed(2);
    finalPrice.innerText = calc;

    packSize = selectPack.options[selectPack.selectedIndex].textContent;
}

// json time
function addToCart(rollType,rollGlazing,packSize, basePrice) {
    let newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(newRoll);
}

//for when button is pushed so that it can trigger storage update
function addSaveToCart() {
    let newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(newRoll);
    saveToLocalStorage();
}

function saveToLocalStorage() {
    console.log("now I'm saving!");
    const rollArray = cart;

    const rollArrayString = JSON.stringify(rollArray);
    console.log(rollArrayString);
  
    localStorage.setItem('storedRolls', rollArrayString);
}

function retrieveFromLocalStorage() {
    const rollArrayString = localStorage.getItem('storedRolls');
    let rollArray = [];
    if (rollArrayString){
        rollArray = JSON.parse(rollArrayString);
    }
    for (const rollData of rollArray) {
        addToCart(rollData.type, rollData.glazing,
        rollData.size, rollData.rollPrice);
    }
}

retrieveFromLocalStorage();