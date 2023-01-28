let num1 = 9.54578;

let num2 = Math.floor(num1); // Arredonda o valor para baixo
console.log(num2);

let num3 = Math.ceil(num1); // Arredonda o valor para cima
console.log(num3);

let num4 = Math.round(num1); // Arredonda o valor para o numero mais proximo (pode ser tanto menor quanto maior)
console.log(num4);

let num5 = Math.max(1,2,3,4,5,-10,-15,60,500,-8000); // Busca o maior valor da sequência
console.log(num5);

let num6 = Math.min(1,2,3,4,5,-10,-15,60,500,-8000); // Busca o menor valor da sequência
console.log(num6);

let aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);
