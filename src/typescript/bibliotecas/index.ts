import pkg from "lodash";
const { uniq, sortBy, cloneDeep } = pkg;

/* Exercício ...

Cenário
Você deseja usar uma biblioteca externa no seu projeto TypeScript para manipulação de dados, mas precisa garantir que as funções dessa biblioteca sejam corretamente tipadas para evitar erros e melhorar a auto completação.
O lodash é uma biblioteca popular para manipulação de arrays e objetos, e possui tipos oficiais para TypeScript. Seu objetivo é usar o lodash para realizar algumas operações com arrays e objetos, tipando as variáveis corretamente.

Exercício ...

Tarefa
  ● Instale a biblioteca lodash e seu arquivo de tipos para TypeScript.
  ● Importe funções específicas do lodash no seu código.
  ● Crie um código que utilize as funções _.uniq, _.sortBy e _.cloneDeep para realizar operações com arrays e objetos. Tipifique as variáveis corretamente e use os recursos de tipagem do TypeScript.

Exercício ...

Requisitos
  ● Instalar a biblioteca lodash e as tipagens para TypeScript (@types/lodash).
  ● Usar a função _.uniq para remover elementos duplicados de um array de números.
  ● Usar _.sortBy para ordenar um array de objetos de acordo com uma chave.
  ● Usar _.cloneDeep para criar uma cópia profunda de um objeto.
  ● Tipar corretamente as variáveis no seu código TypeScript.*/
const numbers: number[] = [5, 3, 8, 3, 1, 5, 7, 7];

const uniqueNumbers: number[] = uniq(numbers);
console.log("Lista de números unicos: ", uniqueNumbers);

interface Book {
  title: string;
  author: string;
  year: number;
}

const books: Book[] = [
  { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  { title: "Refactoring", author: "Martin Fowler", year: 1999 },
  { title: "You Don't Know JS", author: "Kyle Simpson", year: 2015 },
  { title: "Design Patterns", author: "Erich Gamma", year: 2015 },
  { title: "Aprendendo Node", author: "Shelley Powers", year: 2017 },
  { title: "Aprendendo Git", author: "Anna Skoulikar", year: 2024 },
];

const ordainedBook: Book[] = sortBy(books, "title");
console.log("Lista de livros ordenados pelo título:", ordainedBook);

const projectOrigin = {
  id: 101,
  name: "Sistema de Vendas",
  status: "Em andamento",
  team: [
    {
      name: "Carlos Lima",
      role: "Product Owner",
    },
    {
      name: "Carolina Silva",
      role: "QA",
    },
    {
      name: "João Gomes",
      role: "Desenvolvedor",
    },
    {
      name: "Joana Boas",
      role: "Desenvolvedor",
    },
  ],
  milestones: {
    planning: {
      start: "2025-09-01",
      end: "2025-11-30",
    },
    development: {
      star: "2025-09-16",
      end: "2025-11-30",
    },
  },
};

const projectCloned = cloneDeep(projectOrigin);

console.log("Projeto Original: ", projectOrigin);
console.log("Projeto clonado: ", projectCloned);
