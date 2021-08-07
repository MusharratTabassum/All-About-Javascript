function interestCalculation(principle, rate, time) {
    var interest = (principle * rate * time) / 100;
    return interest;

}
const givenPrinciple = 1000;
const givenRate = 5;
const givenTime = 1;
var theInterestIs = interestCalculation(givenPrinciple, givenRate, givenTime);
console.log(theInterestIs);
