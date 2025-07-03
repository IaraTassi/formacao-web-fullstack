// 1) Um funcionário de uma loja precisa saber quanto vendeu no último dia. Então ele fez uma lista com os valores das vendas dos produtos e calculou o total.
let vendas = [150.75, 200.5, 50.25, 80.0, 120.0];
let totalVendas = vendas.reduce((atual, item) => {
  return atual + item;
}, 0);
console.log(totalVendas);

// 2) Você está acompanhando um campeonato de videogame e deseja saber quantos pontos seus amigos acumularam juntos em uma partida.
let pontos = [
  {
    jogador: "Pedro",
    pontos: 20,
  },
  {
    jogador: "Maria",
    pontos: 50,
  },
  {
    jogador: "Cleide",
    pontos: 5,
  },
  {
    jogador: "Pedro",
    pontos: 150,
  },
  {
    jogador: "Maria",
    pontos: 298,
  },
];
let quantidadeTotalPontos = pontos.reduce((atual, item) => {
  return atual + item.pontos;
}, 0);
console.log(quantidadeTotalPontos);
