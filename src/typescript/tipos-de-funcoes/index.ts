/* Exercício ...

Crie um tipo de função chamado calculator
A função do tipo calculator em TypeScript deve ser uma função que recebe um número indefinido de parâmetros, todos do tipo number, e retorna um valor do tipo number. Ela utiliza a sintaxe de rest
parameter (...numbers), permitindo que qualquer quantidade de números seja passada como
argumento.
Usando o tipo calculator, crie 4 funções:
  ● add (retorna a soma dos parâmetros)
  ● subtract (retorna a subtração dos parâmetros)
  ● divide (retorna a divisão dos parâmetros)
  ● multiply (retorna a multiplicação dos parâmetros)*/

type calculator = (...numbers: number[]) => number;

const add: calculator = (...numbers: number[]): number => {
  let result = 0;
  numbers.forEach((n) => (result += n));
  return result;
};

const substract: calculator = (...numbers: number[]): number => {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result -= numbers[i];
  }
  return result;
};

const divide: calculator = (...numbers: number[]): number => {
  if (numbers.includes(0)) {
    throw new Error("Não é possível dividir por zero.");
  }
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result /= numbers[i];
  }
  return result;
};

const multiply: calculator = (...numbers: number[]): number => {
  let result = 1;
  numbers.forEach((n) => (result *= n));
  return result;
};

console.log(`Soma: `, add(10, 5, 12, 4));
console.log(`Subtrai: `, substract(10, 5, 2));
console.log(`Divide: `, divide(70, 5, 2));
console.log(`Multiplica: `, multiply(2, 3, 4));
