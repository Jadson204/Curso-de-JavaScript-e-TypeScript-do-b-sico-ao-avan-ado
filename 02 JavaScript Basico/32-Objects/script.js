const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25
};

console.log(pessoa1.nome);

function criaPessoa (nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa01 = criaPessoa('Jadson', 'Henrique', 18);
console.log(pessoa01);

const invididuo1 = {
  nome: 'Jadson',
  sobrenome: 'Henrique',
  idade: 19,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    console.log(`A minha idade atual é ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  }
};

invididuo1.fala();
invididuo1.incrementaIdade();