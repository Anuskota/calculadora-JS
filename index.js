const beforeValue = document.getElementById("before-value");
const afterValue = document.getElementById("after-value");

/* 
creamos una variable que nos recoja todos los elementos que tengan una misma clase, en este caso toodos los numeros de los botones y de los operadores + - / * */

let numberButton = document.querySelectorAll(".number");
let operatorNumber = document.querySelectorAll("operator");

let calculator= new Calculator();

console.log(calculator.add(beforeValue, afterValue))
console.log(calculator.subtract(6, 7))
console.log(calculator.divide(21, 7))
console.log(calculator.multiply(6, 7))