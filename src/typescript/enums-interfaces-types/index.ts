/* Exercício ...
Gerenciando Pedidos com TypeScript
Um sistema simples de gerenciamento de pedidos precisa:
  ● Identificar o status de um pedido.
  ● Organizar as informações de cada pedido.
  ● Calcular o valor total baseado em produtos e quantidades.

Exercício ...
  ● Defina um Enum para representar os possíveis status de um pedido (Pendente, Processando, Concluído, Cancelado).
  ● Crie uma Interface para representar os dados de um pedido, incluindo:
    ○ Identificação (id: string).
    ○ Produtos (products: array de strings).
    ○ Quantidades (quantities: array de números).
    ○ Status (status: use o Enum criado).
  ● Utilize um Type para representar os possíveis métodos de pagamento (Cartão, Boleto, Pix).

Exercício ...
  ● Implemente uma função que:
    ○ Recebe um pedido e calcula o valor total com base nos produtos e quantidades.
    ○ Exibe os dados completos do pedido no console.
  ● Exemplo de Saída Esperada:
    ○ Pedido: #123
    ○ Status: Processando
    ○ Total: R$ 190 */

enum OrderStatus {
  Pending = "Pendente",
  Processing = "Processando",
  Completed = "Concluído",
  Canceled = "Cancelado",
}

interface Order {
  id: string;
  products: string[];
  quantities: number[];
  status: OrderStatus;
  paymentMethod: PaymentMethods;
}

type PaymentMethods = "Cartão" | "Boleto" | "Pix";

function calculateTotal(
  order: Order,
  prices: { [key: string]: number }
): number {
  let total = 0;

  for (let i = 0; i < order.products.length; i++) {
    const product = order.products[i];
    const quantity = order.quantities[i];
    total += prices[product] * quantity;
  }
  return total;
}

const order: Order = {
  id: "#123",
  products: ["Caderno", "Caneta", "Borracha", "Lápis"],
  quantities: [5, 3, 2, 4],
  status: OrderStatus.Processing,
  paymentMethod: "Cartão",
};

const prices = {
  Caderno: 27,
  Caneta: 11,
  Borracha: 1,
  Lápis: 5,
};

const total = calculateTotal(order, prices);

console.log(`Pedido: ${order.id}`);
console.log(`Status: ${order.status}`);
console.log(`Total: R$ ${total}`);
