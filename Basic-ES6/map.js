const numbers = [1, 2, 3, 4, 5];
const output = [];

// function doubleIt(inputNumber) {
//     return inputNumber * 2;
// }


//Normal process by loop

const doubleIt = num => num * 2;

for (const number of numbers) {
    output.push(doubleIt(number));
}
console.log(output);

// Working Process of map

// 1.loop through every Element
// 2.for each element call the function
// 3.result for each element will be stored in an array

// const outputByMap = numbers.map(doubleIt);
const outputByMap = numbers.map(num => num * 2); //another way

console.log(outputByMap);


const squares = numbers.map(num => num * num);
console.log(squares);