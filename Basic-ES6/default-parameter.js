// normal way to declare a function

function add1(num1, num2) {
    return num1 + num2;
}
const addingNumbers1 = add1(16, 16);
console.log(addingNumbers1);



// default parameter with one passing umber in function

function add2(num1, num2 = 0) {
    return num1 + num2;
}
const addingNumbers2 = add2(16); // if one parameter is passed in the two functioned parameter then it takes the default parameter
console.log(addingNumbers2);


// default parameter with two passing umber in function

function add3(num1, num2 = 0) {
    return num1 + num2;
}
const addingNumbers3 = add3(16, 15); // if one parameter is passed in the funtion then it takes the passing parmeter not the default one
console.log(addingNumbers3);

