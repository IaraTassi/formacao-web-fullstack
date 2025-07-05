/* Alterar Imagem com Clique
Crie uma página HTML com os seguintes elementos:
1. Um título <h1> com o texto "Clique para Trocar a Imagem".
2. Uma imagem <img> com um src padrão, como "image1.jpg".
3. Um botão com o texto "TROCAR IMAGEM".
4. Quando o usuário clicar no botão, a função deve alterar o src da imagem para um novo arquivo
de imagem, como "image2.jpg".
*/
function changeImage() {
  let imageCat = document.getElementById("set-image");
  if (imageCat.src.includes("images/image1.jpg")) {
    imageCat.src = "images/image2.jpg";
    imageCat.alt = "Imagem Gato Ragdoll";
  } else {
    imageCat.setAttribute("src", "images/image1.jpg");
    imageCat.alt = "Imagem Gato Exótico";
  }
}
