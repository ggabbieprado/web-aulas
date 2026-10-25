let produto = { nome: "Mouse", preco: 80, quantidade: 0 };

function verificarDisponibilidade(produto) {
  if (produto.quantidade > 0) {
    return "Disponível";
  } else {
    return "Indisponível";
  }
}

console.log(verificarDisponibilidade(produto)); // Indisponível