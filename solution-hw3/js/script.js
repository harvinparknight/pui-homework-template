//value of select options mapping
//made nicer and shorter style with chatgpt
let glazingOptions = [
    { text: "Keep original", value:0},
    { text: "Sugar milk", value:0},
    { text: "Vanilla milk", value:0.5},
    { text: "Double chocolate", value:1}
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

//base price variable
let basePrice = 2.49;
let glazingPrice = 0;
let packMultiplier = 1;

//change price for glazing change
function glazingChange(element) {
    const priceChange = element.value;
    glazingPrice = parseFloat(priceChange);
    let finalPrice = document.querySelector('#dynamicprice');
    calc = (basePrice + glazingPrice) * packMultiplier;
    calc = calc.toFixed(2);
    finalPrice.innerText = calc;
}
  

//change price for pack change
function packChange(element) {
    const multiplierChange = element.value;
    packMultiplier = parseFloat(multiplierChange)
    let finalPrice = document.querySelector('#dynamicprice');
    calc = (basePrice + glazingPrice) * packMultiplier;
    calc = calc.toFixed(2);
    finalPrice.innerText = calc;
}


