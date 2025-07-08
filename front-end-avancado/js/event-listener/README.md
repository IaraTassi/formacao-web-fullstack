# 🚀 Módulo: JavaScript Avançado - DOM - Event Listener

Este módulo faz parte da formação em **Desenvolvimento Web Full Stack** e tem como foco o **DOM (Document Object Model)** e os recursos avançados da linguagem JavaScript. Ao longo deste módulo, desenvolvemos diversos exercícios práticos que envolvem manipulação de elementos HTML, eventos, interações com o navegador e armazenamento local.

---

## ✏️ Objetivos do Módulo

- Entender o funcionamento básico da árvore DOM.
- Capturar elementos HTML utilizando seletores (`getElementById`, `querySelector`, etc.).
- Manipular atributos, classes e conteúdos dinamicamente.
- Trabalhar com estilos diretamente no JavaScript.
- Lidar com eventos como `click`, `keydown`, `submit`, entre outros.
- Utilizar o objeto `window` e seus recursos (`alert`, `prompt`, `location`, etc.).
- Implementar armazenamento no navegador com `localStorage` e `sessionStorage`.
- Criar páginas mais dinâmicas e interativas com JavaScript puro.

---

## 📂 Arquivo

- [`index.js`](./index.js)

---

## 📌 Descrição das Atividades

### Event Listener

#### Questão 1

Crie uma página com os seguintes elementos:

1. Um título `<h1>`: `"Contador de Cliques"`.
2. Um parágrafo `<p>` com o texto `"Número de cliques: 0"`.
3. Um botão `"CLIQUE AQUI"`.
4. Um texto `<p>` adicional: `"Passe o mouse aqui!"` (para o evento hover).

**Requisitos:**

1. Clique no Botão: Cada vez que o usuário clicar no botão, o número no primeiro parágrafo
   deve aumentar e ser atualizado.
2. Hover no Texto: Quando o usuário passar o mouse sobre o segundo parágrafo, o texto
   deve mudar para `"Você passou o mouse!"`.
3. Ao Carregar a Página: Quando a página carregar, exiba um `alert` com a mensagem
   `"Bem-vindo, Visitante"`.
