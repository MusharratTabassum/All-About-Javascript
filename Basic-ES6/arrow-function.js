//function declaration

function add(num1, num2) {
    return num1 + num2;
}
const addingNumbers = add(16, 16);
console.log(addingNumbers);


//function express

const add2 = function add(num1, num2) {
    return num1 + num2;
}
const sum1 = add2(2, 2);
console.log(sum1);


//function express (anonymous)

const add3 = function (num1, num2) {
    return num1 + num2;
}
const sum2 = add3(3, 2);
console.log(sum2);


//arrow function

const add4 = (num1, num2) => num1 + num2;
const sum3 = add4(3, 7);
console.log(sum3);
