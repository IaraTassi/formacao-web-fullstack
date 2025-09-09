// 1) Encontre o primeiro número par da lista abaixo e exiba no console a posição desse número mna lista.
const numeros = [1, 3, 7, 8, 9, 12, 20, 21];
let posicaoNumeroPar = numeros.findIndex((item) => item % 2 === 0);
console.log(posicaoNumeroPar);

// 2) Considere a lista de produtos abaixo e resolva as questões para encontrar determinados produtos. Se houver produto com a condição da questão, mostre o produto no console. Caso contrário, exiba "Produto não entrado".
const produtos = [
  {
    nome: "Caneta",
    preco: 5,
    estoque: 6,
  },
  {
    nome: "Caderno",
    preco: 20,
    estoque: 20,
  },
  {
    nome: "Mochila",
    preco: 150,
    estoque: 2,
  },
  {
    nome: "Borracha",
    preco: 3,
    estoque: 1,
  },
  {
    nome: "Lápis",
    preco: 2,
    estoque: 12,
  },
];

// 2.1 - Econtre o primeiro produto caro (acima de R$100).
let produtoMaiorValor = produtos.find((item) => item.preco > 100.0);
if (!produtoMaiorValor) {
  console.log("Produto não entrado");
} else {
  console.log(produtoMaiorValor);
}

// 2.3 - Encontre o primeiro produto que está sem estoque.
let produtoSemEstoque = produtos.find((item) => item.estoque < 0);
if (!produtoSemEstoque) {
  console.log("Produto não entrado");
} else {
  console.log(produtoSemEstoque);
}

// 2.3 - Encontre o primeiro produto que possua ao menos 10 itens no estoque.
let possueProdutoMenos10Item = produtos.find((item) => item.estoque >= 10);
if (!possueProdutoMenos10Item) {
  console.log("Produto não entrado");
} else {
  console.log(possueProdutoMenos10Item);
}
