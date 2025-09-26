/* Exercício ...

Refatorando JavaScript para TypeScript
Você recebeu um código JavaScript simples no arquivo codigo-para-refatorar.js.
Sua tarefa é refatorá-lo para TypeScript, garantindo que todos os tipos sejam explicitamente definidos.
  ● Defina os tipos de parâmetro e retorno das funções (string, number, boolean...).
  ● Teste o código para verificar se o comportamento esperado das funções é mantido.*/
function soma(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(`Soma ${soma(10, 20)}`);

function concatena(text1: string, text2: string): string {
  return text1 + text2;
}

console.log(`Olá ${concatena("tudo bem? ", "Como vai?")}`);

function saudarVisitante(nome: string): void {
  console.log(`Olá ${nome}! Seja bem-vindo!`);
}

saudarVisitante("Iara");
