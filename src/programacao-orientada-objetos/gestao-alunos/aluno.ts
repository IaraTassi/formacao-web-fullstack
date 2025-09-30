import { randomUUID } from "crypto";
import { Prova } from "./prova.js";

export class Aluno {
  private id: string;
  public nome: string;
  protected provas: Prova[];

  constructor(nome: string) {
    this.id = randomUUID();
    this.nome = nome;
    this.provas = [];
  }

  registrarProva(disciplina: string, nota: number) {
    const prova = new Prova(disciplina, nota);
    this.provas.push(prova);
  }

  protected calcularMedia() {
    if (this.provas.length === 0) return 0;
    const soma = this.provas.reduce((atual, item) => atual + item.nota, 0);
    return soma / this.provas.length;
  }

  consultarSituacao() {
    const media = this.calcularMedia();

    if (media >= 7) {
      console.log("Aluno aprovado!");
    } else if (media >= 5) {
      console.log("Aluno em recuperação");
    } else {
      console.log("Aluno Reprovado");
    }
  }
}
