// 1) Um usuário tem um lista de pessoas com suas idades e deseja verificar se existe pelo menos uma pessoa maior de 18 anos.
let pessoas = [
  {
    nemos: "Lucas",
    idade: 16,
  },
  {
    nemos: "Maria",
    idade: 22,
  },
  {
    nemos: "Carlos",
    idade: 15,
  },
  {
    nemos: "Fernanda",
    idade: 30,
  },
];

let existePessoaMaiorDeIdade = pessoas.some((item) => item.idade > 18);
console.log(existePessoaMaiorDeIdade);

// 2) Um estudante tem uma lista de tarefas de estudo e deseja verificar se todas as tarefas foram concluídas (Status true).
let tarefasEstudo = [
  {
    descricao: "Estudar Matemática",
    concluido: true,
  },
  {
    descricao: "Revisar Física",
    concluido: true,
  },
  {
    descricao: "Fazer exercícios de Química",
    concluido: true,
  },
  {
    descricao: "Ler capítulo de Biologia",
    concluido: false,
  },
];

let todasTarefasStatusTrue = tarefasEstudo.every(
  (item) => item.concluido === true
);
console.log(todasTarefasStatusTrue);
