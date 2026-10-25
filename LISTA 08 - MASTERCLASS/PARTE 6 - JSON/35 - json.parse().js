let textoJSON = '{"nome":"Mouse","preco":80,"quantidade":10}';

let obj = JSON.parse(textoJSON);

console.log(obj.nome);  // Mouse
console.log(obj.preco); // 80