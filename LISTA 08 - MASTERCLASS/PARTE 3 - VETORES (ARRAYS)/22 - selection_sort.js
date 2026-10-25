let numeros = [8, 3, 6, 1, 9, 2];

for (let i = 0; i < numeros.length - 1; i++) {
  let indiceMenor = i;

  for (let j = i + 1; j < numeros.length; j++) {
    if (numeros[j] < numeros[indiceMenor]) {
      indiceMenor = j;
    }
  }

  if (indiceMenor !== i) {
    let aux = numeros[i];
    numeros[i] = numeros[indiceMenor];
    numeros[indiceMenor] = aux;
  }
}

console.log(numeros); // [1, 2, 3, 6, 8, 9]