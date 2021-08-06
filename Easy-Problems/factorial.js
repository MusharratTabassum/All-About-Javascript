// Using For loop
var factorial = 1;
for (var i = 1; i <= 7; i++) {
    factorial = factorial * i;
}
console.log(factorial);

// Using function

function factorialCalculator(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
const givenNum = 5;
var ans = factorialCalculator(givenNum);
console.log(ans);

// using a while loop or a decrementing loop
function getFactorial(wnum) {
    var wfact = 1;
    while (i >= 1) {
        wfact = wfact * i;
        i--;
    }
    return wfact;
}
const wgivenNum = 9;
var wans = factorialCalculator(wgivenNum);
console.log(wans);

// Calculate Factorial in a Recursive function

function recursiveFactorial(rnum) {
    if (rnum == 1) {
        return 1;
    }
    return rnum * recursiveFactorial(rnum - 1);
}
const rgivenNum = 9;
var rans = recursiveFactorial(rgivenNum);
console.log(rans);


