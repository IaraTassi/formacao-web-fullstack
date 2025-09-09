import axios from "axios";

// 1. Consumir a API do CEP para obter informações de um endereço específico
// -  Mostrar os dados do endereço no console

// 2. Consumir a API de livros para atualizar um livro e testar os casos:
// -  Caso de sucesso: atualização de um livro existente.
// -  Caso de erro: atualizaçõa de um livro inexistente.
// -  Caso de erro: atualizaçõa de um livro sem passar os dados no body.

const api = axios.create({
  baseURL: "https://viacep.com.br/ws",
});

async function cepUniversidadeLuteranaDoBrasilUlbra(cep) {
  try {
    const result = await api.get(`/${cep}/json/`);
    console.log(result.data);
  } catch (error) {
    console.log("Erro ao buscar CEP: ", error.message);
  }
}

cepUniversidadeLuteranaDoBrasilUlbra("92425900");

const apiBooks = axios.create({
  baseURL: "https://books-api-j138.onrender.com",
});

async function updateBook(id, dados) {
  try {
    const result = await apiBooks.put(`/books/${id}`, dados);
    console.log(result.data);
    console.log(result.status);
  } catch (error) {
    console.log("Erro ao atualizar livro: ", error.message);
  }
}

updateBook("8f2c942f-a408-4ca4-b137-2210176a7be3", {
  title: "Scrum: A arte de fazer o dobro do trabalho na metade do tempo",
  resume:
    "Repleto de histórias empolgantes e exemplos reais. O método de gerenciamento de projetos conhecido como Scrum deve ser a ferramenta de produtividade mais largamente empregada entre as empresas de alta tecnologia. Jeff Sutherland tem sido brilhantemente bem-sucedido em sua missão de pôr esse recurso nas mãos de mais negócios em todo o mundo.",
  totalPages: 256,
  isFavorite: false,
  authorId: "785771c6-ab61-4a71-9579-09eb000f2351",
});

async function updateErrorBook(id, dados) {
  try {
    const result = await apiBooks.put(`/books/${id}`, dados);
    console.log(result.data);
    console.log(result.status);
  } catch (error) {
    console.log("Erro ao atualizar livro: ", error.message);
  }
}

updateErrorBook("8f2c942f-a408-4ca4-b137-2210176a7be0", {
  title: "Scrum: A arte de fazer o dobro do trabalho na metade do tempo",
  resume:
    "Repleto de histórias empolgantes e exemplos reais. O método de gerenciamento de projetos conhecido como Scrum deve ser a ferramenta de produtividade mais largamente empregada entre as empresas de alta tecnologia. Jeff Sutherland tem sido brilhantemente bem-sucedido em sua missão de pôr esse recurso nas mãos de mais negócios em todo o mundo.",
  totalPages: 256,
  isFavorite: false,
  authorId: "785771c6-ab61-4a71-9579-09eb000f2351",
});

// Erro ao atualizar livro:  Request failed with status code 404

async function updateErrorBook(id, dados) {
  try {
    const result = await apiBooks.put(`/books/${id}`, dados);
    console.log(result.data);
    console.log(result.status);
  } catch (error) {
    console.log("Erro ao atualizar livro: ", error.message);
  }
}

updateErrorBook("8f2c942f-a408-4ca4-b137-2210176a7be3");

// Mesmo sem body atualizou
