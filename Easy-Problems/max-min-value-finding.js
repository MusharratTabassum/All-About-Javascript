// finding the largest between two numbers

function findLargest(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}
var Largest = findLargest(20, 88);
console.log(Largest);


// finding the largest between three numbers

function findLargestOnThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    return num3;
}

var findTheLargest = findLargestOnThree(20, 87, 98);
console.log(findTheLargest);

// min-max by function 

const a = 22;
const b = 77;
const c = 75;
const max = Math.max(a, b, c);
const min = Math.min(a, b, c);

console.log(max);
console.log(min);

// finding the smallest between three numbers

function findSmallestOnThree(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    return num3;
}

var findTheSmallest = findSmallestOnThree(20, 87, 98);
console.log(findTheSmallest);