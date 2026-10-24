function classificar(nota) {
  if (nota >= 9) {
    return "Excelente";
  } else if (nota >= 7) {
    return "Aprovado";
  } else if (nota >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

console.log(classificar(9.5)); // Excelente
console.log(classificar(7));   // Aprovado
console.log(classificar(5));   // Recuperação
console.log(classificar(3));   // Reprovado