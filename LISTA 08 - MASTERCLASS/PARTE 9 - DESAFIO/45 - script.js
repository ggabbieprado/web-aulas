const CHAVE = "produtos";

// ---------- persistência ----------
function carregarProdutos() {
  const texto = localStorage.getItem(CHAVE);
  if (!texto) return [];
  try {
    return JSON.parse(texto);
  } catch (e) {
    return [];
  }
}

function salvarProdutos() {
  localStorage.setItem(CHAVE, JSON.stringify(produtos));
}

// ---------- estado ----------
const produtos = carregarProdutos();

// ---------- referências do DOM ----------
const form = document.getElementById("formProduto");
const nomeInput = document.getElementById("nome");
const precoInput = document.getElementById("preco");
const qtdInput = document.getElementById("quantidade");
const lista = document.getElementById("lista");
const mensagem = document.getElementById("mensagem");
const totalProdutos = document.getElementById("totalProdutos");
const totalEstoque = document.getElementById("totalEstoque");

// ---------- renderização ----------
function renderizar() {
  lista.innerHTML = "";

  let valorTotal = 0;

  for (let i = 0; i < produtos.length; i++) {
    const p = produtos[i];
    valorTotal += p.preco * p.quantidade;

    const li = document.createElement("li");
    li.textContent = `${p.nome} - R$ ${p.preco.toFixed(2)} - ${p.quantidade} unidades`;
    lista.appendChild(li);
  }

  totalProdutos.textContent = produtos.length;
  totalEstoque.textContent = valorTotal.toFixed(2);
}

// ---------- cadastro ----------
form.addEventListener("submit", function (evento) {
  evento.preventDefault(); // impede recarregar a página
  mensagem.textContent = "";

  const nome = nomeInput.value.trim();
  const preco = Number(precoInput.value);
  const quantidade = Number(qtdInput.value);

  // RF02 — validação
  if (nome === "") {
    mensagem.textContent = "Informe o nome do produto.";
    nomeInput.focus();
    return;
  }
  if (!Number.isFinite(preco) || preco <= 0) {
    mensagem.textContent = "Informe um preço válido (maior que zero).";
    precoInput.focus();
    return;
  }
  if (!Number.isInteger(quantidade) || quantidade < 0) {
    mensagem.textContent = "Informe uma quantidade válida (inteiro ≥ 0).";
    qtdInput.focus();
    return;
  }

  // RF01 / RF03 — cadastrar no vetor de objetos
  produtos.push({ nome: nome, preco: preco, quantidade: quantidade });

  // RF07 — persistir
  salvarProdutos();

  // limpar campos
  nomeInput.value = "";
  precoInput.value = "";
  qtdInput.value = "";
  nomeInput.focus();

  // RF04 / RF05 / RF06 — atualizar interface
  renderizar();
});

// RF08 — recuperar ao abrir a página
renderizar();