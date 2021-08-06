// Inches To Feet Conversion
function inchToFeet(inches) {
    let feet = inches / 12;
    return feet;
}

let givenInches = 132;
let calculation = inchToFeet(givenInches);
console.log('Your height in feet is ', calculation);

// miles to kilometer Conversion

function mileToKilometer(miles) {
    let km = miles * 1.60934;
    return km;
}

let givenMiles = 132;
let kmCalculation = mileToKilometer(givenMiles);
console.log('Your height in kilometer is ', kmCalculation);


