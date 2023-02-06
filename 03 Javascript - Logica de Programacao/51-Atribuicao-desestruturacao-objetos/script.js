const pessoa = {
  nome: 'Jadson',
  sobrenome: 'Henrique',
  idade: 30,
  endereco: {
    rua: 'Alice de Brito Paiva',
    numero: 500
  }
};

// Atribuição via desestruturação
const { nome: eu, sobrenome, endereco} = pessoa;
console.log(pessoa.nome);
console.log(eu);