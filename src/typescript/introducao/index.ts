/* Exercício ...
1. Configuração do Projeto
  ● Inicialize um projeto TypeScript.
  ● Configure tsconfig.json para:
    ○ rootDir: ./src (arquivos .ts);
    ○ outDir: ./dist (arquivos .js).
Exercício ...
2. Criação do Código
  ● Crie uma função chamada saudarVisitante no arquivo index.ts (na pasta ./src), que:
    ○ Receba como parâmetro o nome de um visitante (uma string).
    ○ Exiba no console uma mensagem de boas-vindas personalizada no formato:
    ○ "Olá {nome}! Seja bem-vindo!"
  ● Certifique-se de invocar a função para testá-la.
  ● Compile o TypeScript para gerar o arquivo JavaScript na pasta ./dist.   
Exercício ...

2. Execução e Testes
  ● No Navegador:
    ○ Crie um arquivo index.html na raiz do projeto e importe o .js gerado (em ./dist) para testá-lo no console do navegador.

  ● No Node.js:
    ○ Execute o arquivo .js no terminal com node. */

function saudarVisitante(nome: string): void {
  console.log(`Olá ${nome}! Seja bem-vindo!`);
}

saudarVisitante("Iara");
