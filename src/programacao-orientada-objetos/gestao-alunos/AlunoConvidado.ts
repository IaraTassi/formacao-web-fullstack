import { Aluno } from "./aluno.js";

export class AlunoConvidado extends Aluno {
  consultarSituacao() {
    const media = this.calcularMedia();

    if (media >= 7) {
      console.log("Aluno aprovado!");
    } else if (media >= 5) {
      console.log("Aluno em recuperação");
    } else {
      console.log("Aluno participa, mas não pode ser reprovado!");
    }
  }
}
