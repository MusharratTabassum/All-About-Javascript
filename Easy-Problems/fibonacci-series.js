let fibo = [0, 1];
for (let i = 2; i <= 15; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return 'please give a number';
    }
    else if (num < 2) {
        return 'give a positive number which is greater than 2';
    }
    let fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
var fibonacci = fibonacciSeries("6");
console.log(fibonacci);

