// Questão 1: Crie um programa que recebe um número e verifica se ele é par. Caso seja, exiba "O número é par".
const numeroPar = 6;

if (numeroPar % 2 === 0) {
  console.log("O número é par");
}

// Questão 2: Crie um programa que recebe um número e verifica se ele é negativo. Caso seja, exiba "O número é negativo".
const numeroNegativo = -1;

if (numeroNegativo < 0) {
  console.log("O número é negativo");
}

// Questão 3: Crie um programa que recebe um valor e verifica se ele é maior que um limite de R$100,00. Se for, exiba "O valor excede o limite".
const valorLimite = 101.0;
if (valorLimite > 100.0) {
  console.log("O valor excede o limite");
}

// Questão 1: Verificar se uma pessoa é elegível para um prêmio com base em idade e número de compras. Regras: a pessoa será elegível se for maior de 18 anos e tiver feito mais de 5 compras, ou se for membro VIP. Ultilize variáveis para simular comportamentos.
const idadePessoa = 20;
const numeroDeCompras = 4;
const membroVIP = false;

if ((idadePessoa >= 18 && numeroDeCompras > 5) || membroVIP) {
  console.log("Você é elegível para receber um prêmio!");
} else {
  console.log("Você não elegível para receber um prêmio.");
}

// Questão 2: Verificar se a pessoa tem idade suficiente para dirigir e se possui carteira de habilitação. Regras: só poderá dirigir se tiver pelo menos 18 anos e tiver carteira de habilitação.
const idade = 18;
const temHabilitacao = false;

if (idade >= 18 && temHabilitacao) {
  console.log("Você está habilitado a dirigir!");
} else {
  console.log("Você não está habilitado a dirigir.");
}

/* Questão: Crie um programa que calcule o desconto de um produto com base no valor total. Regra: 
- Se o valor for menor que R$100,00, sem desconto
- Se o valor estiver entre R$100,00 e R$500,00, 10% de desconto.
- Se for maior que R$500,00, 20% de desconto. */
const valor = Number(prompt("Digite o valor do produto"));
let valorFinal;

if (valor < 100.0) {
  valorFinal = valor;
  console.log(
    `Você não tem desconto. valor final da compra: R$ ${valorFinal.toFixed(2)}`
  );
} else if (valor >= 100.0 && valor <= 500.0) {
  valorFinal = valor * 0.9;
  console.log(
    `Você teve desconto de 10%, valor final da compra: R$ ${valorFinal.toFixed(
      2
    )} `
  );
} else if (valor > 500.0) {
  valorFinal = valor * 0.8;
  console.log(
    `Você teve desconto de 20%, valor final da compra : R$ ${valorFinal.toFixed(
      2
    )}`
  );
}

/* Crie uma estrutura switch que recebe uma variável nota (A, B, C, D ou E) e exibe uma mensagem correspondente à avaliação:
A: "Excelente!"
B: "Muito bom!"
C: "Bom"
D: "Precisa melhorar"
E: "Reprovado"
Para qualquer outra nota, exiba: "Nota inválida."*/
const nota = "B";
let mensagem;

switch (nota) {
  case "A":
    mensagem = "Excelente!";
    break;
  case "B":
    mensagem = "Muito bom!";
    break;
  case "C":
    mensagem = "Bom";
    break;
  case "D":
    mensagem = "Precisa melhorar";
    break;
  case "E":
    mensagem = "Reprovado";
    break;
  default:
    mensagem = "Nota inválida.";
}

console.log(mensagem);
100;

/* Questão 1: Crie um programa que recebe a hora do dia e exibe se é "Manhã", "Tarde","Noite" ou "Hora inválida. Considere: 
- Manhã: 5h às 11h
- Tarde: 12h às 17h
- Noite: 18h às 22h*/
const hora = 23;

if (hora >= 5 && hora <= 11) {
  console.log("Manhã");
} else if (hora >= 12 && hora <= 17) {
  console.log("Tarde");
} else if (hora >= 18 && hora <= 22) {
  console.log("Noite");
} else {
  console.log("Hora inválida");
}
