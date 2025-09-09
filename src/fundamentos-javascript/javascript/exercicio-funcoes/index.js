/* Crie uma função chamada exibirMensagem que imprime "Este é o meu primeiro exercício com funções"*/
function exibirMensagem() {
  console.log("Este é o meu primeiro exercício com funções");
}
exibirMensagem();

/* Crie uma função chamada calcularTriplo que recebe um número como parâmetro e imprime o triplo deste resuldado.*/
function calcularTriplo(numero) {
  const triplo = numero * 3;
  console.log(triplo);
}
calcularTriplo(5); // não esquecer de colocar o valor do parâmentro

/* Escreva uma função chamada calcularAreaRetangulo que receba a largura e a altura de um retângulo e retorne a áreas. Teste a função com diferentes valores.*/

function calcularAreaRetangulo(base, altura) {
  const areaRetangulo = base * altura;
  return areaRetangulo;
}
console.log(calcularAreaRetangulo(3, 5));

/* Crie uma arrow function chamada calcularPrecoComDesconto que recebe: 
- preçoOriginal: preço inicial a de um produto.  
- desconto: porcentagem de desconto. 
A função deve retornar o preço final após aplicar o desconto, arredondo para duas casas decimais.*/
const calcularPrecoComDesconto = (precoOriginal, desconto) => {
  const precoFinal = precoOriginal - precoOriginal * (desconto / 100);
  return precoFinal.toFixed(2);
};

console.log(calcularPrecoComDesconto(180, 30));
console.log(calcularPrecoComDesconto(250, 15));
