/* Crie uma página com os seguintes elementos:
1. Um título <h1>: "Contador de Cliques".
2. Um parágrafo <p> com o texto "Número de cliques: 0".
3. Um botão "CLIQUE AQUI".
4. Um texto <p> adicional: "Passe o mouse aqui!" (para o evento hover).
Requisitos:
1. Clique no Botão: Cada vez que o usuário clicar no botão, o número no primeiro parágrafo
deve aumentar e ser atualizado.
2. Hover no Texto: Quando o usuário passar o mouse sobre o segundo parágrafo, o texto
deve mudar para "Você passou o mouse!".
3. Ao Carregar a Página: Quando a página carregar, exiba um alert com a mensagem
"Bem-vindo, Visitante". */
let counter = 0;

function clickCounter() {
  counter++;
  document.getElementById("counter").textContent =
    "Número de cliques: " + counter;
}

const paragraphHover = document.getElementById("messageHover");

paragraphHover.onmouseover = function () {
  paragraphHover.textContent = "Você passou o mouse!";
};

paragraphHover.onmouseout = function () {
  paragraphHover.textContent = "Passe o mouse aqui!";
};

window.onload = function () {
  alert("Bem-vindo, Visitante");
};
