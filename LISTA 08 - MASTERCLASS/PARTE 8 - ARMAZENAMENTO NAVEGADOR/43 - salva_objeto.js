let usuario = {
  nome: "Ana",
  idade: 22,
  curso: "Sistemas de Informação"
};

// salvar
localStorage.setItem("usuario", JSON.stringify(usuario));

// recuperar
const texto = localStorage.getItem("usuario");
const recuperado = texto ? JSON.parse(texto) : null;

console.log(recuperado);