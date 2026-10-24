// Versão 1 — testando o resto
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// Versão 2 — pulando de 2 em 2 (mais eficiente)
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
// 0 2 4 6 8 10 12 14 16 18 20