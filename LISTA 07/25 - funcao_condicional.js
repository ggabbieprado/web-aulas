function verificarIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  }
  return "Menor de idade";
}

console.log(verificarIdade(20)); // Maior de idade
console.log(verificarIdade(15)); // Menor de idade