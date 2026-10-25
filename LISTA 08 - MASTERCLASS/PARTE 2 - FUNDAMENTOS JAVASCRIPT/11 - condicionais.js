function verificarEstoque(quantidade) {
  if (quantidade === 0) {
    console.log("Produto indisponível");
  } else if (quantidade <= 5) {
    console.log("Estoque baixo");
  } else {
    console.log("Produto disponível");
  }
}

verificarEstoque(0);  // Produto indisponível
verificarEstoque(3);  // Estoque baixo
verificarEstoque(10); // Produto disponível