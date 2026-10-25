const produtos = [];

const nomeInput = document.getElementById("nome");
const precoInput = document.getElementById("preco");
const qtdInput = document.getElementById("quantidade");
const botao = document.getElementById("btnCadastrar");
const lista = document.getElementById("lista");

botao.addEventListener("click", function () {
  const nome = nomeInput.value.trim();
  const preco = Number(precoInput.value);
  const quantidade = Number(qtdInput.value);

  if (nome === "" || preco <= 0 || quantidade < 0) {
    alert("Preencha os campos corretamente.");
    return;
  }

  produtos.push({ nome: nome, preco: preco, quantidade: quantidade });

  nomeInput.value = "";
  precoInput.value = "";
  qtdInput.value = "";

  renderizar();
});

function renderizar() {
  lista.innerHTML = "";
  for (let i = 0; i < produtos.length; i++) {
    const p = produtos[i];
    const li = document.createElement("li");
    li.textContent = `${p.nome} - R$ ${p.preco} - ${p.quantidade} unidades`;
    lista.appendChild(li);
  }
}