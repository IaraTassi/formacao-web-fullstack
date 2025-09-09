// while 👉 Executa o bloco enquanto a condição for verdadeira.

/* Crie um programa que faça um contagem regressiva de um número até chegar a zero. O programa deve imprimir cada número de contagem no console.
Instruções:
1- Solicite que a pessoa usuária insira um número positivo.
2- Imprima cada número no console.
3- Quando chegar em zero, imprima "Contagem finalizada".
- Use prompt() para obter a entrada da pessoa usuária.
- Certifique-se de que o número seja um inteiro positivo antes de começar a contagem.
Daída no console
2
1
0
Contagem finalizada*/

let numero = parseInt(prompt("Digite um número."));

if (numero > 0) {
  while (numero >= 0) {
    console.log(numero);
    numero--;
  }
  console.log(`Contagem finalizada.`);
} else {
  console.log(`Digite um número inteiro positivo.`);
}

// do...while 👉 Semelhante ao while, mas garante que o bloco será executado pelo menos uma vez, mesmo que a condição seja falsa no início.

/* Crie um programa que solicite a pessoa usuária para inserir números positivos e continue somando esses números até que um número negativo seja digitado. Ao final, exiba o total da soma. */

let soma = 0;
let numeroPositivo;

do {
  numeroPositivo = parseInt(
    prompt("Digite um número positivo. Para encerrar digite um número negativo")
  );

  if (numeroPositivo > 0) {
    soma += numeroPositivo;
  }
} while (numeroPositivo >= 0);
console.log(`A soma total dos números positivos é: ${soma}`);

// for 👉 Ideal quando você sabe quantas vezes quer repetir algo.

/* Crie um programa que exiba a tabuada de multiplicação de um número formecido pela pessoa usuária.*/
const numeroPessoaUsuaria = parseInt(prompt("Digite um número."));

for (let i = 0; i <= 10; i++) {
  console.log(`${numeroPessoaUsuaria} X ${i} = ${numeroPessoaUsuaria * i}`);
}

// Exercício While Do While ou for qual devo usar?

// Questão 1: Imprima os números de 1 a 10, cada um em uma linha.
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Questão 2: Peça ao usuário para inserir palavras. Continue pedindo até que o usuário digite a palavra"sair". Exiba cada palavra digitada.
let palavra = prompt(`Digite qualquer palavra. Para encerrar digite "sair"`);

while (palavra !== "sair") {
  console.log("Você digitou a palavra: ", palavra);
  palavra = prompt(`Digite qualquer palavra. Para encerrar digite "sair"`);
}

// Questão 3: Peça ao usuário que insira a palavra "aceito" para continuar a leitura dos termos. Continue pedindo até que a palavra "aceito" seja digitada.
let confirmacao;

do {
  confirmacao = prompt(`Digite aceito para ler e confirmar os termos`);
} while (confirmacao !== "aceito");
console.log("Termos aceito.");

/* Questão 1: Crie um array com os anos que o Brasil ganhou a copa (1959, 1942, 1994, 2002).
Interaja com o array utilizando um loop para mostrar no console o Brasil ganhou a copa de 19590 1942 ...*/
const anosBrasilCampeao = [1959, 1962, 1994, 2002];

for (const ano of anosBrasilCampeao) {
  console.log(`O Brasil ganhou a copa em ${ano}`);
}

/* Questão 2: Crie um objeto chamado original com algumas propriedades e valores (por exemplo, nome, idade, cidade). Ultilize um loop para criar uma cópia do objeto em uma nova variável chamada cópia, e exiba a cópia no console. 
Dica: Inicialize a variável copia como um objeto vazio{}, e vá adicionando as propriedades conforme o laço percorre o objeto original.*/
const original = {
  nome: "José",
  idade: 25,
  cidade: "Novo Hamburgo",
};

const copia = {};

for (const chave in original) {
  copia[chave] = original[chave];
}
console.log(copia);
