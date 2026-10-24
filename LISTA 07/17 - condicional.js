function situacao(media) {
  if (media >= 7) {
    console.log("APROVADO");
  } else {
    console.log("REPROVADO");
  }
}

situacao(8);   // APROVADO
situacao(6.5); // REPROVADO