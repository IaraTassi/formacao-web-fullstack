/* Exercício …
Cenário 
Você está criando uma função que manipula dados de diferentes tipos, mas precisa garantir que o tipo de entrada seja consistente. Para isso, você utilizará tipos genéricos para permitir que a função trabalhe com qualquer tipo, mantendo a segurança do tipo ao mesmo tempo.
Exercício …
Tarefa
  ● Crie uma função genérica printArray que recebe um array de qualquer tipo e imprime os valores do array no console.
  ● Crie uma função genérica getFirstElement que recebe um array de qualquer tipo e retorna o primeiro elemento do array.
  ● Ambas as funções devem ser genéricas, ou seja, capazes de lidar com arrays de diferentes tipos (números, strings, objetos, etc.).
  ● Use a função printArray para exibir os valores de um array de números e de um array de strings.
  ● Use a função getFirstElement para obter o primeiro elemento de um array de números e de um
  array de objetos. 
Exercício …
Requisitos
  ● A função printArray deve aceitar um array de qualquer tipo e imprimir cada elemento no console.
  ● A função getFirstElement deve retornar o primeiro elemento do array e garantir que o tipo de retorno corresponda ao tipo do array.
  ● Utilize tipos genéricos para garantir que ambas as funções possam lidar com qualquer tipo de dado, mas ainda mantendo a tipagem correta.*/
function printArray<T>(array: T[]): void {
  array.forEach((element) => {
    console.log(element);
  });
}

function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

const numberArray: number[] = [115, 87, 42, 96];
console.log("Array de números:");
printArray(numberArray);

const firstNumber = getFirstElement(numberArray);
console.log("Primeiro número:", firstNumber);

const stringArray: string[] = ["Livro", "Caderno", "Borracha", "Lápis"];
console.log("Array de strings:");
printArray(stringArray);

const firstString = getFirstElement(stringArray);
console.log("Primeira string:", firstString);

interface Person {
  name: string;
  age: number;
}

const peopleArray: Person[] = [
  { name: "Camile", age: 23 },
  { name: "José", age: 27 },
  { name: "André", age: 32 },
];

const firstPerson = getFirstElement(peopleArray);
console.log("Primeira pessoa:", firstPerson);
