function LargeElement(array) {
    let largest = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

// var arrSum = arrayTotal(numbers);

var arrElement = LargeElement([12, 32, 35]);
console.log(arrElement);