let produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];
let pesquisa = "Teclado";

let encontrado = false;

for (let i = 0; i < produtos.length; i++) {
  if (produtos[i] === pesquisa) {
    console.log(`Produto encontrado na posição ${i}.`);
    encontrado = true;
    break;
  }
}

if (!encontrado) {
  console.log("Produto não encontrado.");
}

//Saída: Produto encontrado na posição 2.