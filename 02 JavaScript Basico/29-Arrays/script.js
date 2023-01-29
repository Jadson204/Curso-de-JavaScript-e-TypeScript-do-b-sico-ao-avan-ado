// Array é uma lista/coleção de dados
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos); // Imprime o array completo
console.log(alunos[0]); // Imprime o elemento de índice 0
alunos[0] = 'Eduardo'; // Muda o valor do elemento de índice 0
alunos[3] = 'Luiza'; // Adiciona mais um elemento ao array
console.log(alunos.length);
alunos.push = ('Jadson'); // Adiciona um elemento no final do array
alunos.unshift('Luiza'); // Adiciona um elemento no começo do array
alunos.pop(); // Remove o último elemento do array
alunos.shift(); // Remove o primeiro elemento do array
delete alunos[1]; // Deleta o elemento de índice 1 do array
console.log(alunos);
console.log(typeof alunos);
console.log(alunos instanceof Array); // Retorna se o parâmetro é ou não um array