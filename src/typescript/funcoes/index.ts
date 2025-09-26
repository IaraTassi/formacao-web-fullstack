/* Exercício ...

Refatorando JavaScript para TypeScript
Você recebeu um código JavaScript simples no arquivo codigo-para-refatorar.js.
Sua tarefa é refatorá-lo para TypeScript, garantindo que todos os tipos sejam explicitamente definidos.
  ● Defina os tipos de parâmetro e retorno das funções (string, number, boolean...).
  ● Faça 3 tipos de refatoração da função:
    ○ Função nomeada
    ○ Função anônima
    ○ Função de Flecha
  ● Teste o código para verificar se o comportamento esperado das funções é mantido.*/

function saudarVisitante(nome: string): void {
  console.log(`Olá ${nome}! Seja bem-vindo!`);
}

saudarVisitante(`Iara Tassi`);

const saudarVisitante1 = function (nome: string): void {
  console.log(`Olá ${nome}! Seja bem-vindo!`);
};

saudarVisitante1(`Iara Tassi`);

const saudarVisitante2 = (nome: string): void => {
  console.log(`Olá ${nome}! Seja bem-vindo!`);
};

saudarVisitante2(`Iara Tassi`);
