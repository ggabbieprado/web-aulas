let numeros = [7, 3, 9, 2, 5];

for (let i = 0; i < numeros.length - 1; i++) {
  let indiceMenor = i;

  // procura o menor elemento na parte não ordenada
  for (let j = i + 1; j < numeros.length; j++) {
    if (numeros[j] < numeros[indiceMenor]) {
      indiceMenor = j;
    }
  }

  // troca o menor encontrado com a posição i
  if (indiceMenor !== i) {
    let aux = numeros[i];
    numeros[i] = numeros[indiceMenor];
    numeros[indiceMenor] = aux;
  }
}

console.log(numeros); // [2, 3, 5, 7, 9]