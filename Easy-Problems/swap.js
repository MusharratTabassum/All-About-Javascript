var a = 10;
var b = 5;

var temp;
console.log(a, b);

temp = a;
a = b;
b = temp;

console.log('After swaping');
console.log(a, b);

// destructuring
var num1 = 99;
var num2 = 100;
console.log(num1, num2);
console.log('After swaping');
[num1, num2] = [num2, num1];
console.log(num1, num2);