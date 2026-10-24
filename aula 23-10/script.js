

let carrinho = [
    {
        nome: "gabbie",
        valor: 7.0,
        quantidade: 7,
        categoria: "engenharia de software"
    },
    {
        nome: "berto",
        valor: 100.0,
        quantidade: 1,
        categoria: "informatica"
    },

]

const lista = document.getElementById("lista");

function atualizarlista(){

    lista.innerHTML = "";
    for (let i = 0; i < carrinho.length; i++){
        let item = document.createElement("li");

        item.textContent = carrinho[i].nome + " R$" + 
        carrinho[i].valor + "Disponível: " + 
        carrinho[i].quantidade;

        lista.appendChild(item);
        
        console.log(carrinho[i].nome);
        console.log(carrinho[i].valor);
    }
}

atualizarlista();

for (let i = 0; i < carrinho.length; i++){
    console.log(carrinho[i].nome);
    console.log(carrinho[i].valor);
    console.log(carrinho[i].quantidade);
    console.log(carrinho[i].categoria);
}
