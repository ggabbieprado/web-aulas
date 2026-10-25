const CHAVE = "produtos";

// Carrega do localStorage; se não houver nada, retorna vetor vazio
function carregarProdutos() {
  const texto = localStorage.getItem(CHAVE);
  if (!texto) return [];
  try {
    return JSON.parse(texto);
  } catch (e) {
    return [];
  }
}

const produtos = carregarProdutos();

const nomeInput = document.getElementById("nome");
const precoInput = document.getElementById("preco");
const qtdInput = document.getElementById("quantidade");
const botao = document.getElementById("btnCadastrar");
const lista = document.getElementById("lista");

function salvarProdutos() {
  localStorage.setItem(CHAVE, JSON.stringify(produtos));
}

function renderizar() {
  lista.innerHTML = "";
  for (let i = 0; i < produtos.length; i++) {
    const p = produtos[i];
    const li = document.createElement("li");
    li.textContent = `${p.nome} - R$ ${p.preco} - ${p.quantidade} unidades`;
    lista.appendChild(li);
  }
}

botao.addEventListener("click", function () {
  const nome = nomeInput.value.trim();
  const preco = Number(precoInput.value);
  const quantidade = Number(qtdInput.value);

  if (nome === "" || preco <= 0 || quantidade < 0) {
    alert("Preencha os campos corretamente.");
    return;
  }

  produtos.push({ nome: nome, preco: preco, quantidade: quantidade });
  salvarProdutos();

  nomeInput.value = "";
  precoInput.value = "";
  qtdInput.value = "";
  nomeInput.focus();

  renderizar();
});

// Carrega a interface ao abrir a página
renderizar();