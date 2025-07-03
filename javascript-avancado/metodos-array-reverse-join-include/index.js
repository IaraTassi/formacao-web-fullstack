// 1) Você tem uma lista de ingredientes para uma receita e deseja criar uma única string qeue contenha todos os ingredientes separados por vírgulas.
let ingredientes = ["Farinha", "Açucar", "Ovos", "Leite", "Manteiga"];
let listaIngredientes = ingredientes.join(", ");
console.log(listaIngredientes);

// 2) Você está organizando um campeonato de jogos e tem uma lista de jogadores inscritos. Você quer verificar se um jogador específico se inscreveu no campeonato.
let jogadoresInscritos = ["Lucas", "Mariana", "Felipe", "Tatiane", "Roberto"];
let jogadorMariana = jogadoresInscritos.includes("Mariana");
console.log(jogadorMariana);

// 3) Você é o organizador de um campeonato futebol. Para garantir que tudo saia conforme o planejado, você criou uma lista de tarefas. Mas essa lista está em ordem invertida e você precisa corrigir.
let tarefasDoCampeonato = [
  "Divulgar o evento",
  "Definir as equipes",
  "Comprar os prêmios",
  "Escolher o local do Jogo",
  "Criar as regras do torneio",
];
tarefasDoCampeonato.reverse();
console.log(tarefasDoCampeonato);
