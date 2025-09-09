# 🚀 Módulo: JavaScript Avançado - DOM - Window Location

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

### Window Location

#### Questão 1

Navegador de URLs

Crie uma página com os seguintes elementos:

1. Um título `<h1>`: `"Navegador de URLs"`.
2. Um campo de entrada `<input>` para que o usuário insira uma URL.
3. Um botão `"NAVEGAR"`.
4. Um botão `"SUBSTITUIR URL"`.

**Requisitos:**

1. Navegar para a URL: Quando o usuário inserir uma URL no campo e clicar no botão `"NAVEGAR"`, a página
   deve redirecionar para a URL inserida utilizando window.location.href.
2. Substituir a URL: Quando o usuário clicar no botão `"SUBSTITUIR URL"`, a página deve redirecionar para a URL
   inserida utilizando window.location.replace. Isso deve evitar que a URL anterior fique no histórico de
   navegação.
3. Atribuir URL: Adicione um terceiro botão `"ATRIBUIR URL"`. Quando clicado, ele deve usar
   window.location.assign para redirecionar para a URL inserida, permitindo que a URL anterior permaneça no
   histórico.
4. Exibir URL Atual: Ao carregar a página, exiba a URL atual em um parágrafo abaixo dos botões.
