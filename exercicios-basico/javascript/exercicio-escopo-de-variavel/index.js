/* Questão 1: Crie uma variável global chamada contadorGlobal e atribua o valor 0. E seguida, incremente essa variável e imprima o resultado no console.*/
let contadorGlobal = 0;
contadorGlobal++;
console.log(contadorGlobal); // 1

/* Questão 2: Crie uma variável global chamada mensagemGlobal (usando const) e atribua a valor "Olá, mundo!", imprima essa variável no console. Em seguida, tente alterar o valor da variável para "Mudança de mensagem" e imprima novamente. O que acontece? */
const mensagemGlobal = "Olá, mundo!";
console.log(mensagemGlobal);
// mensagemGlobal = "Mudança de mensagem"; // ❌ Erro: não é possível reatribuir uma constante

/* Exercício de escopo de bloco  
Questão 1: E um bloco if. crie uma variável chamada valorBloco usando let e atribua a ele o valort 50. Imprima essa variável dentro do bloco e, em seguida, tente imprmir fora do bloco. Oque aconteceu?*/
if (true) {
  let valorBloco = 50;
  console.log(valorBloco); // 50
}
// console.log(valorBloco); // ❌ Erro: variável está fora do escopo (let tem escopo de bloco)

/* Questão 2: Crie uma variável chamada numero usando const e atribua o valor de 10. Em um bloco for. crie uma variavél chamada resultado usando let que multiplique numero por 3. Imprima resultado dentro de bloco e, em seguida, tente imprimir fora do bloco. O que aconteceu?*/
const numero = 10;

for (let i = 0; i < 1; i++) {
  let resultado = numero * 3;
  console.log(resultado); // 30
}
// console.log(resultado); // ❌ Erro: variável está fora do escopo
