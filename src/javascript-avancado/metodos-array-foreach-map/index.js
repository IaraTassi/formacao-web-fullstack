// 1) Em um supermercado, o gerente decidiu dar um desconto de 10% em alguns produtos. Sua tarefa é calcular o preço final desses produto com o desconto aplicado e exibir a nova lista de preços.
let produtos = [
  {
    nome: "Arroz",
    preco: 20,
  },
  {
    nome: "Feijão",
    preco: 10,
  },
  {
    nome: "Macarrão",
    preco: 8,
  },
  {
    nome: "Açúcar",
    preco: 5,
  },
];

let produtosPrecoFinal = produtos.map((item) => {
  return {
    nome: item.nome,
    preco: item.preco - item.preco * 0.1,
  };
});

console.log(produtosPrecoFinal);

// 2) Você trabalha numa biblioteca e precisa criar uma lista para saber quantas páginas ainda faltam para terminar de ler cada livro. Para isso, você tem uma lista de livros com o total de páginas e as páginas que já foram lidas.
let livros = [
  {
    titulo: "O Senhor dos Anéis",
    totalPaginas: 1000,
    paginasLidas: 320,
  },
  {
    titulo: "1984",
    totalPaginas: 328,
    paginasLidas: 100,
  },
  {
    titulo: "O Código da Vinci",
    totalPaginas: 96,
    paginasLidas: 50,
  },
];

let quantasPaginasRestantesALer = livros.map((item) => {
  return {
    titulo: item.titulo,
    paginasRestantes: item.totalPaginas - item.paginasLidas,
  };
});
console.log(quantasPaginasRestantesALer);

// 3) Você está organizando uma festa e tem uma lista de convidados. Agora quer enviar uma mensagem de confirmação para cada um deles. Mostre no console uma mensagem para cada convidado usando forEach.
let convidados = ["João", "Maria", "Carlos", "Fernando"];
convidados.forEach((item) => {
  console.log(`Olá, ${item}! Sua presença na festa está confirmada.`);
});
