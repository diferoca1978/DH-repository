//* exercice to do different kind of arithmetic operations.

let plus = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let times = (num1, num2) => num1 * num2;
let division = (num1, num2) => num1 / num2;
let remainder = (num1, num2) => num1 % num2;
let lessThan = (num1, num2) => num1 < num2;
let greaterThan = (num1, num2) => num1 > num2;

function calculator (num1, num2, callback) {
  return callback(num1, num2)
}  

console.log(` El resultado es: ${calculator(5, 4, times)}`);
