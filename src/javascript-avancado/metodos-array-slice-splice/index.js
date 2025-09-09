// 1) Vamos imaginar que você tem uma lista de frutas e deseja obter apenas as primeiras três frutas dessa lista.
let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];

let tresPrimeirasFrutas = frutas.slice(0, 3);
console.log(tresPrimeirasFrutas);

// 2) Você tem uma lista de tarefas e deseja obter todas as tarefas, exceto as duas primeiras, mas sem alterar a lista original.
let tarefas = [
  "Estudar para prova",
  "Revisar os exercícios",
  "Assistir as aulas",
  "Ler um livro",
];
let duasPrimeirasTarefas = tarefas.slice(2);
console.log(duasPrimeirasTarefas);

// 3) Refaça o exercício 2, mas dessa vez excluíndo os dois primeiros itens da lista original.

tarefas.splice(0, 2);
console.log(tarefas);
