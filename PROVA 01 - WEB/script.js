let produtos = [obterResumo];

//DOM
const form = document.getElementById("formProduto");
const lista = document.getElementById("lista");
const mensagem = document.getElementById("mensagem");
const totalProdutos = document.getElementById("totalProdutos");
const valorEstoque = document.getElementById("valorEstoque");

  function adicionarProduto(nome, preco, quantidade) {
  let nome = nomeProduto.value;
     if (nome === ""){
        alert("O nome do produto não pode ser vazio!");
        return true;
    }
  let preco = precoProduto.value;
     if (preco <= 0){
      alert("O preço do produto tem que ser maior que zero!")
      return;
     }
  let quantidade = quantidadeProduto.value;
     if (quantidade >= 0) {
      alert("Informe a quantidade")
      return;
     }
    produtos.push({ nome: nome, preco: preco, quantidade: quantidade });
}

form.addEventListener("submit", function (evento)) {
  evento.adicionarProduto(); 
  mensagem.textContent = "";

  const nome = nomeInput.value.trim();
  const preco = Number(precoInput.value);
  const quantidade = Number(qtdInput.value);
  
}

function listarProdutos(produtos) {
  listaProdutos.innerHTML = "";

    for (let i = 0; i < produtos.length; i++){
        let item = document.createElement("li");
        item.textContent = produtos[i];
        listaProdutos.appendChild(item);
    }
}

function obterResumo() {
  lista.innerHTML = "";

  let valorEstoque = 0;

  for (let i = 0; i < produtos.length; i++) {
    const p = produtos[i];
    valorEstoque += p.preco * p.quantidade;

    const li = document.createElement("li");
    li.textContent = `${p.nome} - R$ ${p.preco.toFixed(2)} - ${p.quantidade} unidades`;
    lista.appendChild(li);
  }

  totalProdutos.textContent = produtos.length;
  valorEstoque.textContent = valorTotal.toFixed(2);
  return { totalProdutos: 0, valorEstoque: 0 };
}

function atualizarInterface() {
  listarProdutos();
  for (let i = 0; i < carrinho.length; i++){
    console.log(carrinho[i].nome);
    console.log(carrinho[i].valor);
    console.log(carrinho[i].quantidade);
} 
}

window.App = {
  adicionarProduto,
  listarProdutos,
  obterResumo,
  atualizarInterface
};