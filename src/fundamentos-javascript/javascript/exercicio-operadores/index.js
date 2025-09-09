// Use operadores aritméticos para resolver:

/* Questão 1: Dado que um funcionário trabalha 8 horas por dia e trabalhou 5 dias na semana, calcule o total de horas trabalhadas. */

const totalDeHorasTrabalhadas = 8 * 5;
console.log(totalDeHorasTrabalhadas);
//
const horasDia = 8;
const diasTrabalhado = 5;
const totalHorasTrabalhado = horasDia * diasTrabalhado;
console.log(totalHorasTrabalhado);

/* Questão 2: O preço de um produto é R$50,00 e um cliente comprou 3 unidades. Ele recebeu um desconto de R$10,00 no valor final. Calcule o valor da compra após aplicar o desconto */
const valorFinalProdutos = 50.0 * 3 - 10.0;
console.log(valorFinalProdutos);
//
const produto = 50.0;
const unidades = 3;
const desconto = 10.0;
const valorFinal = produto * unidades - desconto;
console.log(valorFinal);

// Utilize os operadores de atribuição

/* Questão 1: Um cliente fez um depósito de R$200,00 em sua conta bancária, que tinha um saldo de R$1000,00. Atualize o saldo da conta.*/
let saldoConta = 1000.0;
const deposito = 200.0;
saldoConta += deposito;
console.log(saldoConta);

/* Questão 2: Uma loja vendeu 5 unidades de um produto que tem 50 unidades em estoque. Atualize o estoque.*/
let estoque = 50;
const itensVendidos = 5;
estoque -= itensVendidos;
console.log(estoque);

// Utilize operadores relacionais

/* Questão 1: Um cliente tem 17 anos e o produto que ele deseja comprar exige idade miníma de 18 anos. Verifique se ele pode comprar o produto*/
const idade = 17;
const idadeMinima = 18;
const podeComprar = idade >= idadeMinima;
console.log(podeComprar);
console.log(17 >= 18);

/* Questão 2: Um cliente deseja realizar uma compra de R$300,00, mas seu limite de crédito é de R$500,00. Verifique se a compra está dentro do limite de crédito.*/
const compra = 300.0;
const limiteCredito = 500.0;
const temLimiteCredito = compra <= limiteCredito;
console.log(temLimiteCredito);

/* Questão 1: A partir de uma idade da pessoa usuária, verifique se ela pode votar (idade maior ou igual a 16) e se ela é obrigada a votar (idade entre 18 a 70 anos). */
const idadePessoaUsuaria = 71;

const podeVotar = idadePessoaUsuaria >= 16;
const votoObrigatorio = idadePessoaUsuaria >= 18 && idadePessoaUsuaria <= 70;
console.log(`Pode votar:  ${podeVotar}`);
console.log(`Voto obrigatório:  ${votoObrigatorio}`);

/* Questão 2: Você está programando um sistema de e-commerce e precisa verificar se a pessoa cliente te direito a um desconto. As regras são:  

- A pessoa cliente tem direito ao desconto se for VIP ou se o valor da compra for maior ou igual a 100 reais. */

// Dica utilize variáveis com as condições.
const clienteVip = false;
const valorCompra = 101.0;
const temDireitoDesconto = clienteVip || valorCompra >= 100;
console.log(temDireitoDesconto);

/* Questão 1: Você está desenvolvendo um sistema para calcular o preço final de um produto após aplicar um desconto. O produto custa 100 reais e tem um desconto de 20%. Em seguida, você precisa calcular o preço final após adicionar 5 reais de taxa de entrega. */
const precoProduto = 100.0;
const percentualDesconto = 0.8;
const taxa = 5.0;
const precoFinal = precoProduto * percentualDesconto + taxa;
console.log(precoFinal);

/* Questão 2: Você está ajudando a calcular a média das notas de uma pessoa estudante.
As notas são armazenadas em variáveis e a média deve ser calculada considerando as notas de três provas. Defina as variáveis de nota e calcule a média.
*/
const nota1 = 7.5;
const nota2 = 9.3;
const nota3 = 8.2;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);
