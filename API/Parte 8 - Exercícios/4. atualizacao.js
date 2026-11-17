const resposta = await fetch(`${URL_API}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: novoTitulo })
});

const atualizada = await resposta.json();

const indice = publicacoes.findIndex((p) => p.id === Number(id));
if (indice !== -1) {
    publicacoes[indice] = { ...publicacoes[indice], ...atualizada };
    atualizarLista();
}