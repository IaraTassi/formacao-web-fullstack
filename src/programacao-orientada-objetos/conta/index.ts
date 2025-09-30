import { Conta } from "./conta-corrente.js";

/* Crie uma classe para implementar uma conta corrente. A Classe deve 
possuir os seguintes atributos:

a. Número da conta
b. Nome do correntista
c. saldo

Implemente métodos para as seguintes ações:

a) Alterar nome
b) Depósito
c) Saque

No construtor, o saldo é opcional, com valor padrão zero e os demais atributos são obrigatórios. A conta não pode ficar com saldo. negativo.*/

const contaPessoaFisica = new Conta(123, "João Gomes", 200);

contaPessoaFisica.alterarNome("João Paulo Gomes");
contaPessoaFisica.depositar(1200);
contaPessoaFisica.sacar(500);
console.log(contaPessoaFisica);
