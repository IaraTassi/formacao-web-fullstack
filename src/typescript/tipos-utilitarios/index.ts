/* Exercício …
Cenário
Você tem um tipo que representa um usuário. Esse tipo possui algumas propriedades que nem sempre
são obrigatórias. Você precisará usar os tipos utilitários Required e Partial para modificar esse
comportamento, fazendo com que as propriedades sejam todas obrigatórias ou todas opcionais,
dependendo do caso.

Exercício …
Tarefa
  ● Crie um tipo User com as propriedades id, name e email, sendo que name e email são opcionais.
  ● Use o tipo utilitário Required para criar um tipo FullUser onde todas as propriedades de User são obrigatórias.
  ● Use o tipo utilitário Partial para criar um tipo UserUpdate onde todas as propriedades de User são opcionais.

Exercício …
Requisitos
  ● O tipo User deve ter as propriedades id, name e email. As propriedades name e email devem ser opcionais.
  ● O tipo FullUser deve tornar todas as propriedades de User obrigatórias.
  ● O tipo UserUpdate deve permitir que qualquer propriedade de User seja opcional.*/
type User = {
  id: number;
  name?: string;
  email?: string;
};

type FullUser = Required<User>;

type UserUpdate = Partial<User>;

const user: User = {
  id: 1,
};

const fullUser: FullUser = {
  id: 2,
  name: "Daiane Silva",
  email: "daiane@email.com",
};

const userUpdate: UserUpdate = {
  name: "Daiane da Silva",
};

console.log(user, fullUser, userUpdate);
