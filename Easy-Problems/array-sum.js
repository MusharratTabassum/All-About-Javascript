const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arrayTotal(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// var arrSum = arrayTotal(numbers);
var arrSum = arrayTotal([12, 32, 35]);
console.log(arrSum);