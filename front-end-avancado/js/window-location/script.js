/* Navegador de URLs
Crie uma página com os seguintes elementos:
1. Um título <h1>: "Navegador de URLs".
2. Um campo de entrada <input> para que o usuário insira uma URL.
3. Um botão "NAVEGAR".
4. Um botão "SUBSTITUIR URL".
Requisitos:
1. Navegar para a URL: Quando o usuário inserir uma URL no campo e clicar no botão "NAVEGAR", a página
deve redirecionar para a URL inserida utilizando window.location.href.
2. Substituir a URL: Quando o usuário clicar no botão "SUBSTITUIR URL", a página deve redirecionar para a URL
inserida utilizando window.location.replace. Isso deve evitar que a URL anterior fique no histórico de
navegação.
3. Atribuir URL: Adicione um terceiro botão "ATRIBUIR URL". Quando clicado, ele deve usar
window.location.assign para redirecionar para a URL inserida, permitindo que a URL anterior permaneça no
histórico.
4. Exibir URL Atual: Ao carregar a página, exiba a URL atual em um parágrafo abaixo dos botões. */
function goToPage() {
  const urlPage = document.getElementById("urlInput").value;
  window.location.href = urlPage;
}

function replacePage() {
  const urlPage = document.getElementById("urlInput").value;
  window.location.replace(urlPage);
}

function assignUrl() {
  const urlPage = document.getElementById("urlInput").value;
  window.location.assign(urlPage);
}

window.onload = function () {
  const currentUrl = window.location.href;
  document.getElementById("currentUrl").textContent =
    "URL atual: " + currentUrl;
};
