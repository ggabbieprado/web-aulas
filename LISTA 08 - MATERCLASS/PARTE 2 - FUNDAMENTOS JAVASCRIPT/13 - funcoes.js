function calcularTotal(preco, quantidade) {
  return preco * quantidade;
}

console.log(calcularTotal(150, 3)); // 450

//return vs console.log():

//return:
//devolve um valor ao chamador e encerra a função. 
//Permite reutilizar o resultado em cálculos, armazenar em variável etc.

//console.log():
//apenas imprime no console; a função continua e, sem return, devolve undefined. 
//Não serve para compor resultados.