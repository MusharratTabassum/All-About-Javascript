// Conversion from celsius to fahrenheit 

function celsiusToFarenheit(tempInCels) {
    var tempInFarenheit = tempInCels * (9 / 5) + 32;
    return tempInFarenheit;

}
const givenTemp = 0;
var cToF = celsiusToFarenheit(givenTemp);
console.log(cToF);

// Conversion from fahrenheit to celsius  

function FarenheitTocelsius(tempInFar) {
    var tempInCelsius = (tempInFar - 32) * (5 / 9);
    return tempInCelsius;

}
const givenTempInFar = 32;
var fToC = FarenheitTocelsius(givenTempInFar);
console.log(fToC);