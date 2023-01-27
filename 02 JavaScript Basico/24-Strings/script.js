//               01234567
let umaString = 'Um texto';

console.log(umaString[4]);
console.log(umaString.charAt(6));
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('o'));
console.log(umaString.search(/x/));
console.log(umaString.replace('Um', 'Outra'));
// Substitui o que está no 1º parametro pelo que está no 2º parametro

let outraString = 'O rato roeu a roupa do rei de roma';

console.log(outraString.replace(/r/, '#'));
// Substitui a primeira letra r pelo #
console.log(outraString.replace(/r/g, '#'));
// Substitui todas as letras r pelo #
console.log(outraString.length);
// Retorna o tamanho da string
console.log(outraString.slice(2, 6));
// "Fatia a string"