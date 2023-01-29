/* 
Primitivos (imutáveis) -> string, number, boolean, undefined, null (bigint, symbol)
*/
let nome = 'Luiz';
nome = 'Otávio';
console.log(nome);

/**
 * Referência (mutável) -> array, object, function
 */
let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(5);
console.log(a);