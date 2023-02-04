const verdadeira = true;
let nome = 'Jadson';
var nome2 = 'Jadson';
/**
 * let não pode ser redeclarada, var pode.
 * let tem escopo de bloco
 * var só tem escopo de função
 */

if (verdadeira) {
  let nome = 'Henrique'; // criando dentro de um bloco. NÃO É A MESMA VARIÁVEL
  console.log(nome, nome2);

  if (verdadeira) {
    let nome = 'Outra coisa';
    console.log(nome, nome2);
  }
}