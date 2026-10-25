let produtos = [
  { nome: "Notebook", preco: 3500, quantidade: 2 },
  { nome: "Mouse", preco: 80, quantidade: 10 },
  { nome: "Teclado", preco: 150, quantidade: 5 }
];

let totalEstoque = 0;
// Calcula o valor total do estoque.

for (let i = 0; i < produtos.length; i++) {
  totalEstoque += produtos[i].preco * produtos[i].quantidade;
}

console.log("Valor total do estoque: R$ " + totalEstoque); // R$ 8550

//conta: 7000 + 800 + 750 = 8550.