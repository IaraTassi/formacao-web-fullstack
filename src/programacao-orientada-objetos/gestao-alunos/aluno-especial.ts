import { Aluno } from "./aluno.js";

export class AlunoEspecial extends Aluno {
  consultarSituacao() {
    const media = this.calcularMedia();

    if (media >= 5) {
      console.log("Aluno aprovado!");
    } else {
      console.log("Aluno reprovado");
    }
  }
}
