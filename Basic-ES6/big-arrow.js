// If the function has only one statement, and the statement returns a value, we dont need to give the brackets and the return keyword:
const add = (num1, num2) => num1 + num2;
const res1 = add(3, 7);
console.log(res1);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const res2 = multiply(3, 4, 12);
console.log(res2);

// if have only one parameter, we can skip the parentheses as well:
const fiveTimes = num => num * 5;
const res3 = fiveTimes(7);
console.log(res3);

const getName = () => 'Musharrat Tabassum';
const res4 = getName();
console.log(res4);

const doMath = (x, y) => {
    const add = x + y;
    const diff = x - y;
    const output = diff * add;
    return output;
};
const res5 = doMath(12, 10);
console.log(res5);
