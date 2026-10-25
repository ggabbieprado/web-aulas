let produto = { nome: "Notebook", preco: 3500, quantidade: 5 };

let json = JSON.stringify(produto);

console.log(json);        // {"nome":"Notebook","preco":3500,"quantidade":5}
console.log(typeof json); // "string"