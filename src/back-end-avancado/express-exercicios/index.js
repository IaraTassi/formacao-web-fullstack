import express from "express";
import * as dotenv from "dotenv";
import { growdevers } from "./dados.js";
import { randomUUID } from "crypto";
import {
  logMiddleware,
  logRequestMiddleware,
  logBody,
  validateGrowdeverMiddleware,
  validateGrowdeverMatriculadoMiddleware,
} from "./middlewares.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(logMiddleware);
app.use(cors());

// GET /growdvers - Listar growdeves
//     /growdevers?idade=20
app.get("/growdevers", [logRequestMiddleware], (req, res) => {
  try {
    const { idade, nome, email, email_includes } = req.query;

    let dados = growdevers;
    if (idade) {
      const idadeNum = Number(idade);
      if (isNaN(idadeNum)) {
        return res.status(400).send({
          ok: false,
          mensagem: "O parâmetro 'idade' inválido",
        });
      }
      dados = dados.filter((item) => item.idade >= idadeNum);
    }

    if (nome) dados = dados.filter((item) => item.nome.includes(nome));

    if (email) dados = dados.filter((item) => item.email === email);

    if (email_includes)
      dados = dados.filter((item) => item.email.includes(email_includes));

    res.status(200).send({
      ok: true,
      mensagem: "Growdevers listados com sucesso",
      dados,
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensagem: "Erro interno do servidor",
    });
  }
});

// POST /growdevers - Criar um growdever
app.post("/growdevers", [logBody, validateGrowdeverMiddleware], (req, res) => {
  try {
    // 1- Entrada
    const body = req.body;

    const novoGrowdever = {
      id: randomUUID(),
      nome: body.nome,
      email: body.email,
      idade: body.idade,
      matriculado: body.matriculado,
    };

    // 2- Processamento
    growdevers.push(novoGrowdever);

    // 3- Saída
    res.status(201).send({
      ok: true,
      mensagem: "Growdever criado com sucesso",
      dados: growdevers,
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensagem: "Erro interno do servidor",
    });
  }
});

// GET /growdevers/:id => - Obter um growdever pelo id houteParams
app.get("/growdevers/:id", [logRequestMiddleware], (req, res) => {
  try {
    // Entrada
    const { id } = req.params;

    // Processamento
    const growdever = growdevers.find((item) => item.id === id);
    if (!growdever) {
      return res.status(400).send({
        ok: false,
        mensagem: "Growdever não encontrado",
      });
    }

    // Saída
    return res.status(200).send({
      ok: true,
      mensagem: "Growdever obtido com sucesso",
      dados: growdever,
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensagem: "Erro interno do servidor",
    });
  }
});

// PUT /growdevers/:id - Atualizar um growdevers especifíco
app.put(
  "/growdevers/:id",
  [
    logBody,
    validateGrowdeverMiddleware,
    validateGrowdeverMatriculadoMiddleware,
  ],
  (req, res) => {
    // Entrada
    const { id } = req.params;
    const { nome, email, idade, matriculado } = req.body;

    // Processamento
    const growdever = growdevers.find((item) => item.id === id);

    if (!growdever) {
      return res.status(404).send({
        ok: false,
        mensagem: "Growdever não encontrado",
      });
    }

    growdever.nome = nome;
    growdever.email = email;
    growdever.idade = idade;
    growdever.matriculado = matriculado;

    // Saída
    res.status(200).send({
      ok: true,
      mensagem: "Growdever atualizado com sucesso",
      dados: growdevers,
    });
  }
);

// PACHT /growdevers/:id - Toggle do campo matriculado - Atualização parcial de um growdever
app.patch("/growdevers/:id", [], (req, res) => {
  try {
    // Entrada
    const { id } = req.params;

    // Processamento
    const growdever = growdevers.find((item) => item.id === id);
    if (!growdever) {
      return res.status(404).send({
        ok: false,
        mensagem: "Growdever não encontrado",
      });
    }
    growdever.matriculado = !growdever.matriculado;

    // Saída
    res.status(200).send({
      ok: true,
      mensagem: "Growdever atualizado (matricula) com sucesso",
      dados: growdevers,
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensagem: "Erro interno do servidor.",
    });
  }
});

// DELETE /growdevers/:id - Excluir um growdever
app.delete("/growdevers/:id", [], (req, res) => {
  try {
    // Entrada
    const { id } = req.params;

    // Processamento
    const growdeverIndex = growdevers.findIndex((item) => item.id === id);
    if (growdeverIndex < 0) {
      return res.status(404).send({
        ok: false,
        mensagem: "Growdever não encontrado",
      });
    }

    growdevers.splice(growdeverIndex, 1);

    // Saída
    res.status(200).send({
      ok: true,
      mensagem: "Growdever excluído com sucesso",
      dados: growdevers,
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensagem: "Erro interno do servidor.",
    });
  }
});

// 1- Crie um servidor Node.js com express e crie duas rotas simples:
//    1. GET /hello
//       1. Retorno uma string simples com uma mensagem de boas vindas

//    2. GET /about
//       1. Retorna um JSON com as suas informações de perfil (nome, email, resumo de perfil, idade, lista de skills)

// Todos os filtros devem ser opcionais e devem funcionar juntos. Se nenhum filtro for informado, a rota deve listar todos os registros.

// 2 -Utilize a rota de listar growdevers construída em aula e adicione query params:
//    1. Ajuste o filtro de idade para comparação seja por idade maior ou igual ao invés de ser por igualdade.

//    2. Crie um query params para filtrar por email, por igualdade.

//    3. Crie um query params email_includes que deverá filtrar os itens por e-mail. Esse filtro não deve ser por igualdade, mas deve retornar os itens cujo e-mail possuem em sua composição o valor a ser filtrado. Exemplo: email_includes=gmail => filtrar todos os e-mails que possuem gmail em sua composição.

// 3- Crie os seguintes middleware
//    1. Middleware que faz um log de hello - aplicar em todas as rotas.

//    2. Middleware para log do body - aplicar em rotas de criação de atualizações

// ! DESAFIO -
//    3. Middleware para bloquear atualização de growdever não matriculados na rota PUT.
app.get("/hello", [], (req, res) => {
  res.send("👋 Olá, seja bem-vindo(a) ao meu repositório de estudos!");
});

app.get("/about", [], (req, res) => {
  res.send({
    nome: "Iara Tassi",
    email: "iaratassi@hotmail.com",
    resumo:
      "Sou estudante de Análise e Desenvolvimento de Sistemas, apaixonada pelo universo da tecnologia e inovação. Inicialmente, comecei minha jornada na área de Quality Assurance (QA), mas me encontrei verdadeiramente no desenvolvimento de software. Resido em Novo Hamburgo, Rio Grande do Sul, e estou sempre em busca de aprendizado contínuo para me tornar uma desenvolvedora. Atualmente, estou focada em aprimorar minhas habilidades de programação e estou sempre em busca de novos desafios. Embora ainda não tenha experiência profissional formal, já participei de diversos cursos e bootcamps que me proporcionaram uma sólida base para meu desenvolvimento.",
    idade: 52,
    skills: ["HTML", "CSS", "JavaScript", "Java", "React", "TypeScript"],
  });
});

const porta = process.env.PORT;

app.listen(porta, () => {
  console.log(`O servidor está executando na porta ${porta}`);
});
