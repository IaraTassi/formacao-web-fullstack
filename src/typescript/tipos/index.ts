/*Exercício ...
Refatorando JavaScript para TypeScript
Você recebeu um código JavaScript simples no arquivo codigo-para-refatorar.js.
Sua tarefa é refatorá-lo para TypeScript, garantindo que todos os tipos sejam explicitamente definidos.
  ● Defina os tipos das variáveis (string, number, boolean).
● O código deve verificar se uma pessoa é maior de idade (idade >= 18) e exibir uma mensagem
personalizada no console.
● Teste o código para diferentes idades e nomes. */

let name: string = "Camile";
let age: number = 17;
let isAdult: boolean = age >= 18;

if (isAdult) {
  console.log(`${name} é maior de idade.`);
} else {
  console.log(`${name} não é maior de idade.`);
}
