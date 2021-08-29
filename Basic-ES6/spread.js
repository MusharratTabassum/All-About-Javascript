const numbers = [5, 17, 97, 3, 21];
console.log(numbers);
// console.log(...numbers);


const maxNumber = Math.max(10, 7, 22);
console.log(maxNumber);

const maxNumberInArray = Math.max(...numbers);
console.log(maxNumberInArray);

const numbers2 = [...numbers, 88];
numbers.push(144);
console.log(numbers2);
console.log(numbers);
