/* Alterar Cor de Fundo

Crie uma página HTML que tenha um botão com o texto "ALTERAR COR DE FUNDO".
Abaixo do botão, insira um parágrafo com a frase "Clique no botão acima para mudar a cor de
fundo!".
Quando o usuário clicar no botão, deve ser exibido um prompt solicitando que ele escolha uma
cor (por exemplo, "red", "blue", "green", etc.).
Após o usuário inserir a cor, a cor de fundo da página deve ser alterada para a cor escolhida.

IMPORTANTE! O nome da cor deve ser informado em inglês. */

const validColors = [
  "red",
  "blue",
  "green",
  "gray",
  "pink",
  "yellow",
  "purple",
  "black",
  "Orange",
];

function changecolor() {
  const color = prompt(
    "Escolha uma cor e digite: red, blue, green, gray, pink, yellow, purple"
  )
    ?.trim()
    .toLowerCase();
  if (validColors.includes(color)) {
    document.body.style.backgroundColor = color;
  } else {
    alert("Cor inválida! Tente novamente com uma cor em inglês.");
  }
  document.body.style.backgroundColor = color;
}
