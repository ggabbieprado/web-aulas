const input = document.getElementById("nome");
const botao = document.getElementById("salvar");
const saudacao = document.getElementById("saudacao");

function exibirNome() {
  const nome = localStorage.getItem("nomeUsuario");
  saudacao.textContent = nome ? `Olá, ${nome}!` : "Nenhum nome salvo.";
}

botao.addEventListener("click", function () {
  const nome = input.value.trim();
  if (nome === "") return;
  localStorage.setItem("nomeUsuario", nome);
  exibirNome();
});

exibirNome(); // executa ao carregar a página