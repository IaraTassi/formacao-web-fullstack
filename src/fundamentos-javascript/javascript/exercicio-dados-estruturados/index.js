// Questão 1: Crie um array chamado `cores` que contenha pelo menos cinco cores e escreva um código que imprima a terceira cor.
const cores = ["Amarelo", "Azul", "Rosa", "Vermelho", "Preto"];
console.log(cores[2]);

// Crie um objeto que represente um aluno, com as propriedades nome, idade, nota e curso. Exiba cada informação no console.

const aluno = {
  nome: "José",
  idade: 25,
  nota: 8.5,
  curso: "ADS",
};

console.log("Nome do aluno:", aluno.nome);
console.log("Nome do aluno:", aluno.idade);
console.log("Nome do aluno:", aluno.nota);
console.log("Nome do aluno:", aluno.curso);

// Crie um array chamado produtos, onde cada objeto representa um produto com as propriedades nome, preço, e categoria. A tarefa e exibir as informações do terceiro produto da lista.
const produtos = [
  {
    nome: "lápis",
    preco: 4.9,
    categoria: "material escolar",
  },
  {
    nome: "caderno",
    preco: 12.9,
    categoria: "material escolar",
  },
  {
    nome: "borracha",
    preco: 2.9,
    categoria: "material escolar",
  },
];

console.log(produtos[2]);

console.log("Nome do produto:", produtos[2].nome);
console.log("Valor do produto:", produtos[2].preco);
console.log("Categoria do produto:", produtos[2].categoria);
