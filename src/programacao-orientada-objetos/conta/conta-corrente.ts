export class Conta {
  numero: number;
  nomeDoCorrentista: string;
  saldo: number;

  constructor(numero: number, nomeDoCorrentista: string, saldo?: number) {
    this.numero = numero;
    this.nomeDoCorrentista = nomeDoCorrentista;

    this.saldo = saldo ?? 0;
  }

  alterarNome(nome: string) {
    this.nomeDoCorrentista = nome;
    console.log("Nome do correntista alterado com sucesso!");
  }

  depositar(valor: number) {
    if (valor <= 0) {
      console.log("Não é possivel depositar valor igual ou menor do que zero.");
      return;
    }
    this.saldo += valor;
    console.log("Deposito realizado.");
  }

  sacar(valor: number) {
    const novoSaldo = this.saldo - valor;

    if (novoSaldo < 0) {
      console.log("Valor do saque é maior do que o saldo disponivel");
      return;
    }

    this.saldo = novoSaldo;
    console.log("Saque realizado");
  }
}
