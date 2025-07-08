/* Contador de Cliques com Geral e por Sessão
Crie uma página com:
1. Um título <h1>: "Contador de Cliques".
2. Um parágrafo <p> para exibir o número total de cliques (usando localStorage).
3. Um parágrafo <p> para exibir o número de cliques na sessão atual (usando sessionStorage).
4. Um botão "CLIQUE AQUI".
Requisitos:
1. Ao clicar no botão, incremente o contador de cliques da sessão e o contador total.
2. Exiba os contadores atualizados nos parágrafos correspondentes.
3. Inicie o contador de cliques da sessão em 0 ao carregar a página.
4. O contador total deve persistir entre as sessões. */
window.onload = function () {
  if (!localStorage.getItem("counterClicks")) {
    localStorage.setItem("counterClicks", 0);
  }

  sessionStorage.setItem("sessionClicks", 0);

  updateCounter();
};

function updateCounter() {
  const counterClicks = localStorage.getItem("counterClicks") || 0;
  const sessionClicks = sessionStorage.getItem("sessionClicks") || 0;

  document.getElementById("counterClicks").textContent =
    "Total de cliques: " + counterClicks;
  document.getElementById("sessionClicks").textContent =
    "Cliques na sessão atual: " + sessionClicks;
}

function incrementClicks() {
  let counterClicks = parseInt(localStorage.getItem("counterClicks")) || 0;
  counterClicks++;
  localStorage.setItem("counterClicks", counterClicks);

  let sessionClicks = parseInt(sessionStorage.getItem("sessionClicks")) || 0;
  sessionClicks++;
  sessionStorage.setItem("sessionClicks", sessionClicks);

  updateCounter();
}
