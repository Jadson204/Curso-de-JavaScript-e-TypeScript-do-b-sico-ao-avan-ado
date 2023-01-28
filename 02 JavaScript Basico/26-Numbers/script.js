// IEEE 754-2008
let num1 = 10; // number
let num2 = 2.5; // number

console.log(num1.toString() + num2.toString());
console.log(typeof num1);
console.log(num1.toString(2)); // Mostra o valor binário do número
console.log(num1.toFixed(2)); // Limita o número de casas decimais
console.log(Number.isInteger(num1)); // Retorna se o número é inteiro ou não
let temp = num1 * 'ola';
console.log(Number.isNaN(temp)); // Retorna se o número é NaN ou não

let num3 = 0.7;
let num4 = 0.1;

num3 += num4;
num3 += num4;
num3 += num4;

num3 = parseFloat(num3.toFixed(2));
console.log(num3);