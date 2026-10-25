let produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 80 }
];

let json = JSON.stringify(produtos);
console.log(json);
// [{"nome":"Notebook","preco":3500},{"nome":"Mouse","preco":80}]

let recuperado = JSON.parse(json);
console.log(recuperado);
// [{ nome: "Notebook", preco: 3500 }, { nome: "Mouse", preco: 80 }]