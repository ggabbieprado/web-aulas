function pesquisarProduto(nome) {
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].nome === nome) {
      return produtos[i];
    }
  }
  return null;
}

console.log(pesquisarProduto("Mouse"));   // { nome: "Mouse", preco: 80, quantidade: 20 }
console.log(pesquisarProduto("Webcam"));  // null