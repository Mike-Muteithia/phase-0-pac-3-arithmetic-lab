/* 1 + 80;
60 - 40;
2 * 3.4;
5.0 / 2.5;

console.log(1 + 80, 60 - 40, 2 * 3.4, 5.0 / 2.5); */

function add(a,b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

/* let number = 5;
console.log(number++, number, number--, number);
console.log(--number, number, ++number, number);
console.log(number += 3, number -= 2, number *= 10, number /= 5); */

/* //reset number
number = 10;

function add5() {
  return (number += 5);
}

function divideBy3() {
  return (number /= 3);
}

divideBy3(); //=> 3.3333333333333335

add5(); //=> 8.333333333333334

// reset number
number = 10;

add5(); //=> 15

divideBy3(); //=> 5 */

function increment(n) {
    return ++n;
}

function decrement(n) {
    return --n;
}

/* parseInt("2", 10); //=> 2
parseInt("2.2222", 10); //=> 2
parseInt("nonsense!", 10); //=>NaN */

/* parseFloat("80.123999"); // 80.123999 */

/* makeInt(string) and preserveDecimal(string) */

function makeInt(n) {
    const parsed = parseInt(n, 10);
    return isNaN(parsed) ? NaN : parsed;
}

function preserveDecimal(n) {
    const parsed = parseFloat(n);
    return isNaN(parsed) ? NaN : parsed;
}