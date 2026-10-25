const nomes = [];

const campo = document.getElementById("campoNome");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("lista");
const quantidade = document.getElementById("quantidade");

botao.addEventListener("click", function () {
  const nome = campo.value.trim();
  if (nome === "") return;

  nomes.push(nome);
  campo.value = "";
  campo.focus();

  lista.innerHTML = "";
  for (let i = 0; i < nomes.length; i++) {
    const li = document.createElement("li");
    li.textContent = nomes[i];
    lista.appendChild(li);
  }

  quantidade.textContent = nomes.length;
});