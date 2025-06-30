// 1) Um engenheiro está trabalhando em um projeto e precisa calcular a potência de um número. Faça um código que calcule o valor de 5 elevado ao cubo (5³).
const numero = 5;
const potencia = 3;
console.log(Math.pow(numero, potencia));

// 2) Uma pessoa está preenchendo um formulário online e inseriu a idade com "25 anos" (uma string). O sistema precisa extrair apenas o número inteiro dessa string.
const idade = "25 anos";
console.log(parseInt(idade));

// 3) Um contador está calculando a taxa de um empréstimo online e inseriu um número com muitas casas decimais. Ele precisa formatar esse número para que tenha apenas 2 casas decimais.
const taxa = 3.78955;
console.log(taxa.toFixed(2));

// 4) Uma equipe de cientistas registrou as temperaturas mais altas de três cidades diferentes. Agora, eles precisam descobrir qual foi a maior temperatura registrada entre essas cidades.
const temperaturaNovoHamburgo = 38;
const temperaturaCampoBom = 39;
const temperaturaSaoLeopoldo = 35;
const temperaturaMaxima = Math.max(
  temperaturaNovoHamburgo,
  temperaturaCampoBom,
  temperaturaSaoLeopoldo
);
console.log(temperaturaMaxima);

const temperaturaMinima = Math.min(
  temperaturaNovoHamburgo,
  temperaturaCampoBom,
  temperaturaSaoLeopoldo
);
console.log(temperaturaMinima);
