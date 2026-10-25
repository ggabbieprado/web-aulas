let novoProduto = { nome: "Monitor", preco: 900, quantidade: 8 };
produtos.push(novoProduto);

for (let i = 0; i < produtos.length; i++) {
  console.log(`${produtos[i].nome} - R$ ${produtos[i].preco} - ${produtos[i].quantidade} un.`);
}