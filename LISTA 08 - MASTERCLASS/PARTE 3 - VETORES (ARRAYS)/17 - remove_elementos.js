let produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];

console.log(produtos.pop());    // "Monitor"
console.log(produtos);          // ["Notebook", "Mouse", "Teclado"]

console.log(produtos.shift());  // "Notebook"
console.log(produtos);          // ["Mouse", "Teclado"]

produtos.unshift("Monitor");
console.log(produtos);          // ["Monitor", "Mouse", "Teclado"]