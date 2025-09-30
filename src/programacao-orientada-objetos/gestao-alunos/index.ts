import { AlunoEspecial } from "./aluno-especial.js";
import { Aluno } from "./aluno.js";
import { AlunoConvidado } from "./AlunoConvidado.js";

/* Exercício
Construa um sistema de gestão de alunos e provas. O aluno deve ter um identificador único, ddaos pessoais e sua lista de provas. Já uma prova deve ser composta obrigatóriamente pela disciplina e pela nota alcançada. Deve haver um relacionamento entre prova e aluno, onde o aluno é composto pela sua lista de provas.

O aluno deve ser capaz de registrar uma prova nova, mas não deve ser permitido excluir provas já registradas. Use encapsulamento para garantir esse comportamanto.

O aluno também pode consultar a informação de aprovação ou reprovação baseado na média das notas. Aluno aprovados possuem nota igual ou superior a 7. Alunos em recuperação possuem nota entre 5 e 7. Abaixo de 5 o aluno e considerado reprovado.

Nesse sistema, podem existir diferentes tipos de alunos:

  . Aluno especial: não pode ficar em recuperação, sendo assim sua nota minima para aprovar e 5.
  . Aluno convidado: não pode reprovar.
*/
const joao = new Aluno("joão");
const maria = new AlunoConvidado("Maria");

joao.registrarProva("Backend I", 10);
maria.registrarProva("Backend I", 8);

joao.registrarProva("React", 3);
maria.registrarProva("React", 1);

joao.consultarSituacao();
maria.consultarSituacao();
