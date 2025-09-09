// 1) Um usuário criou um lista de compras com alguns itens. Agora ele deseja adicionar novos itens, tanto no início quanto no final da lista. Adicione pelo menos um itens no ínicio e um item no final da lista.
let listaCompras = ["arroz", "feijão", "carne"];
console.table(listaCompras);
listaCompras.unshift("pão");
listaCompras.push("farinha");
console.table(listaCompras);

// 2) Um cliente tem um lista de frutas e quer remover a última fruta da lista.
let frutas = ["maçã", "banana", "laranja"];
console.table(frutas);
frutas.pop();
console.table(frutas);

// 3) Um usuário tem uma estante de livros com os seguintes títulos: "Game of Thrones", "Harry Potter" e o "Código Da Vinci". Ele deseja remover o primeiro livroda estante.
let estanteDeLivros = ["Game of Thrones", "Harry Potter", "Código Da Vinci"];
console.table(estanteDeLivros);
estanteDeLivros.shift();
console.table(estanteDeLivros);
