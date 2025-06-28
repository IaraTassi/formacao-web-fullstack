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
