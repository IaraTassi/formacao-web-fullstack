/* Capturar e Exibir Texto de Elementos
Crie uma página HTML com os seguintes elementos:
1. Um título <h1> com o texto "Bem-vindo à Página de Exercícios DOM".
2. Um parágrafo <p> com o texto "Este é o parágrafo 1".
3. Outro parágrafo <p> com o texto "Este é o parágrafo 2".
4. Um botão com o texto "EXIBIR TEXTO".
Quando o usuário clicar no botão, crie uma função que capture e exiba em um alert o texto do
segundo parágrafo.
Requisitos:
1. Utilize getElementById ou getElementsByTagName para capturar o segundo parágrafo.

Requisito:

1 - Ultilize getElementById ou getElementByTagName para capturar o segundo elemento parágrafo.

*/
// function textToDisplayOnClick() {
//   const paragraphById = document.getElementsByTagName("p");
//   const paragraphText = paragraphById[1].textContent;
//   alert(paragraphText);
// }

function textToDisplayOnClick() {
  const paragraphById = document.getElementById("paragraphTwo");
  alert(paragraphById.textContent);
}
