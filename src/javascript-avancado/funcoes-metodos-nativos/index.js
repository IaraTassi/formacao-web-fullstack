// 1) Um cliente chamado "João" preencheu o formulário com o nemo cheio de espaços em branco no início e na final. Agora você precisa corrigir isso.
const cliente = "   João  ";
console.log(cliente.trim());

// 2) Uma aluna chama "Ana" preencheu um formulário, eo sistema precisa exibir o nome dela em letras maiúsculas, já que será usado em um banner piblicitário. Converta todo o nome para maiúscula.
const aluna = "ana";
console.log(aluna.toLocaleUpperCase());

// 3) Um escritor chamado "Paulo" está escrevendo em livro e, por engano, usou a palavra "antigo" onde deveria estar "novo". Substitua todas as ocorrêcias da palavra "antigo" por "novo" no texto abaixo.
const livro =
  "O livro antigo foi revisado. A capa do livro antigo também foi trocada.";
livroRevisado = livro.replaceAll("antigo", "novo");
console.log(livroRevisado);

// 4) Um professor está verificando as respostas de seus alunos, e ele quer garantir que todas as respostas iniciem com a palavra "Resposta". Verifique se as respostas abaixo começam com a palavra "Resposta".
const resposta1 = "Resposta: A capital do Brasil é Brasília.";
const resposta2 = "Minha resposta: A capital do Brasil é Brasília.";
console.log(resposta1.startsWith("Resposta"));
console.log(resposta2.startsWith("Resposta"));

// 5) Um Usuário quer garantir que sua mensagem de saudação termine com "!"no final. Ele já escreveu a saudação "Olá, como vai", mas quer adicionar um ponto de exclamação no final usando um método.
const saudacao = "Olá, como vai";
console.log(saudacao.concat("!"));
