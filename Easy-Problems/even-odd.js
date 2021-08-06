function evenOddChecker(num) {
    if (num % 2 == 0) {
        return 'This is an even number';
    }
    return 'This is an odd number';
}

const myNumber = 4;
const isMyNumEvenOrOdd = evenOddChecker(myNumber);
console.log(isMyNumEvenOrOdd);