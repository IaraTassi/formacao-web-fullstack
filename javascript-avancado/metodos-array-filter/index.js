// 1) Um usuário tem uma lista de números e deseja filtrar apenas os números pares.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = numeros.filter((numero) => numero % 2 === 0);

console.table(numerosPares);

// 2) Uma cliente te um lista de nomes e deseja filtrar apenas os nomes que iniciam com a palavra "João".
let nomes = ["João", "Maria", "Daphne", "Pedro", "João Pedro", "Ana", "José"];

let nomeFiltrado = nomes.filter((nome) => nome.includes("João"));

console.table(nomeFiltrado);

// 3) Um usuário tem um lista de objetos onde cada objeto possui várias propriedades, incluindo uma informação sobre o nível de urgência (de 1 a 5), sendo 1 pouco urgente e 5 muito urgente. O objetivo é filtrar apenas os objetos onde o campo urgente é maior ou igual a 3.
let itens = [
  {
    nome: "Item 1",
    categoria: "Eletrônicos",
    urgente: 5,
  },
  {
    nome: "Item 2",
    categoria: "Livros",
    urgente: 3,
  },
  {
    nome: "Item 3",
    categoria: "Alimentos",
    urgente: 4,
  },
  {
    nome: "Item 4",
    categoria: "Roupas",
    urgente: 2,
  },
  {
    nome: "Item 5",
    categoria: "Ferramentas",
    urgente: 5,
  },
];

let itensUrgente = itens.filter((item) => item.urgente >= 3);

console.table(itensUrgente);

// 4) Um cliente tem uma lista de cidades com seus recpectivos estados e deseja filtrar apenas as cidades que estão localizadas no estado de Rio GRande do Sul (RS).
let cidades = [
  {
    nome: "Porto Alegre",
    estado: "RS",
  },
  {
    nome: "Pelotas",
    estado: "RS",
  },
  {
    nome: "Caxias do Sul",
    estado: "RS",
  },
  {
    nome: "Curitiba",
    estado: "PR",
  },
  {
    nome: "Florianópolis",
    estado: "SC",
  },
];

let cidadesRS = cidades.filter((cidade) => cidade.estado === "RS");

console.table(cidadesRS);
