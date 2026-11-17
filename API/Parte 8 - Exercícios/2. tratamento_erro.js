if (resposta.status === 404) {
    mostrarMensagem(`Publicação ${id} não encontrada.`, "erro");
    return;
}
if (!resposta.ok) {
    throw new Error("Erro HTTP: " + resposta.status);
}