let produto = {
  nome: "Notebook",
  preco: 3500,
  quantidade: 5,
  calcularTotal() {
    return this.preco * this.quantidade;
  }
};

console.log(produto.calcularTotal()); // 17500