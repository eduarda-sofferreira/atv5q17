let valorCompra = parseFloat(prompt("Digite o valor de compra do produto:"));
let valorVenda;

if (valorCompra < 20) {
  valorVenda = valorCompra * 1.45;
} else {
  valorVenda = valorCompra * 1.30;
}

alert("O valor da venda será: R$ " + valorVenda.toFixed(2));
