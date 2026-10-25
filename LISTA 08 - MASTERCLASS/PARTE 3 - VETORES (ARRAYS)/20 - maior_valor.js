let numeros = [12, 5, 27, 8, 19];

let maior = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}

console.log("Maior:", maior); // 27