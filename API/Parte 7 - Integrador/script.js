const URL_API = "https://jsonplaceholder.typicode.com/posts";

let publicacoes = [];

/* ---------- utilitários ---------- */

function mostrarMensagem(texto, tipo = "") {
    const p = document.getElementById("mensagem");
    p.textContent = texto;
    p.className = tipo; // "" | "erro" | "sucesso"
}

function atualizarLista() {
    const lista = document.getElementById("listaPublicacoes");
    lista.innerHTML = "";

    if (publicacoes.length === 0) {
        const vazio = document.createElement("li");
        vazio.textContent = "Nenhuma publicação para exibir.";
        lista.appendChild(vazio);
        return;
    }

    for (const publicacao of publicacoes) {
        const item = document.createElement("li");

        const texto = document.createElement("span");
        texto.textContent = `${publicacao.title} — ${publicacao.body}`;

        // Exercício 5: botão de exclusão por item
        const btnExcluir = document.createElement("button");
        btnExcluir.type = "button";
        btnExcluir.textContent = "Excluir";
        btnExcluir.addEventListener("click", () =>
            excluirPublicacao(publicacao.id, btnExcluir)
        );

        item.append(texto, btnExcluir);
        lista.appendChild(item);
    }
}

/* ---------- GET (lista) ---------- */

async function carregarPublicacoes() {
    const btn = document.getElementById("btnCarregar");

    // Exercício 3: desabilita durante a requisição
    btn.disabled = true;
    mostrarMensagem("Carregando publicações...");

    try {
        const resposta = await fetch(`${URL_API}?userId=1`);

        if (!resposta.ok) {
            throw new Error("Erro HTTP: " + resposta.status);
        }

        publicacoes = await resposta.json();
        atualizarLista();
        mostrarMensagem(
            `${publicacoes.length} publicação(ões) carregada(s).`,
            "sucesso"
        );

    } catch (erro) {
        mostrarMensagem("Erro ao consultar a API.", "erro");
        console.error(erro);

    } finally {
        btn.disabled = false; // reabilita sempre
    }
}

/* ---------- GET por ID (Exercícios 1 e 2) ---------- */

async function buscarPublicacaoPorId() {
    const id = document.getElementById("idBusca").value.trim();
    const detalhe = document.getElementById("detalhePublicacao");

    detalhe.innerHTML = "";

    if (id === "") {
        mostrarMensagem("Informe um ID para buscar.", "erro");
        return;
    }

    const btn = document.getElementById("btnBuscar");
    btn.disabled = true;

    try {
        const resposta = await fetch(`${URL_API}/${id}`);

        // Exercício 2: tratamento específico de 404
        if (resposta.status === 404) {
            mostrarMensagem(`Publicação ${id} não encontrada.`, "erro");
            return;
        }

        if (!resposta.ok) {
            throw new Error("Erro HTTP: " + resposta.status);
        }

        const publicacao = await resposta.json();

        const titulo = document.createElement("h2");
        titulo.textContent = publicacao.title;

        const corpo = document.createElement("p");
        corpo.textContent = publicacao.body;

        detalhe.append(titulo, corpo);
        mostrarMensagem(`Publicação ${id} carregada.`, "sucesso");

    } catch (erro) {
        mostrarMensagem("Falha ao buscar a publicação.", "erro");
        console.error(erro);

    } finally {
        btn.disabled = false;
    }
}

/* ---------- POST ---------- */

async function cadastrarPublicacao(evento) {
    evento.preventDefault();

    const titulo = document.getElementById("titulo").value.trim();
    const conteudo = document.getElementById("conteudo").value.trim();

    if (titulo === "" || conteudo === "") {
        mostrarMensagem("Preencha todos os campos.", "erro");
        return;
    }

    const botao =
        evento.submitter ??
        document.querySelector("#formPublicacao button");
    if (botao) botao.disabled = true;

    try {
        const resposta = await fetch(URL_API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: titulo, body: conteudo, userId: 1 })
        });

        if (!resposta.ok) {
            throw new Error("Erro HTTP: " + resposta.status);
        }

        const criada = await resposta.json();

        // API simulada: guardamos no vetor local só para exibir nesta sessão
        publicacoes.push(criada);
        atualizarLista();
        mostrarMensagem("Cadastro simulado com sucesso.", "sucesso");
        document.getElementById("formPublicacao").reset();

    } catch (erro) {
        mostrarMensagem("Erro ao enviar a publicação.", "erro");
        console.error(erro);

    } finally {
        if (botao) botao.disabled = false;
    }
}

/* ---------- PATCH (Exercício 4) ---------- */

async function alterarTitulo(evento) {
    evento.preventDefault();

    const id = document.getElementById("idAlterar").value.trim();
    const novoTitulo = document.getElementById("novoTitulo").value.trim();

    if (id === "" || novoTitulo === "") {
        mostrarMensagem("Informe o ID e o novo título.", "erro");
        return;
    }

    const botao =
        evento.submitter ??
        document.querySelector("#formAlteracao button");
    if (botao) botao.disabled = true;

    try {
        const resposta = await fetch(`${URL_API}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: novoTitulo })
        });

        if (!resposta.ok) {
            throw new Error("Erro HTTP: " + resposta.status);
        }

        const atualizada = await resposta.json();

        // Reflete a alteração no vetor local, se o item estiver na lista
        const indice = publicacoes.findIndex((p) => p.id === Number(id));
        if (indice !== -1) {
            publicacoes[indice] = { ...publicacoes[indice], ...atualizada };
            atualizarLista();
        }

        mostrarMensagem(
            `Título da publicação ${id} alterado (simulado).`,
            "sucesso"
        );
        document.getElementById("formAlteracao").reset();

    } catch (erro) {
        mostrarMensagem("Erro ao alterar o título.", "erro");
        console.error(erro);

    } finally {
        if (botao) botao.disabled = false;
    }
}

/* ---------- DELETE (Exercício 5) ---------- */

async function excluirPublicacao(id, botao) {
    botao.disabled = true;

    try {
        const resposta = await fetch(`${URL_API}/${id}`, { method: "DELETE" });

        if (!resposta.ok) {
            throw new Error("Erro HTTP: " + resposta.status);
        }

        publicacoes = publicacoes.filter((p) => p.id !== id);
        atualizarLista();
        mostrarMensagem(`Publicação ${id} excluída (simulado).`, "sucesso");

    } catch (erro) {
        mostrarMensagem("Erro ao excluir a publicação.", "erro");
        console.error(erro);
        botao.disabled = false;
    }
}

/* ---------- inicialização ---------- */

document.getElementById("btnCarregar")
    .addEventListener("click", carregarPublicacoes);

document.getElementById("btnBuscar")
    .addEventListener("click", buscarPublicacaoPorId);

document.getElementById("formPublicacao")
    .addEventListener("submit", cadastrarPublicacao);

document.getElementById("formAlteracao")
    .addEventListener("submit", alterarTitulo);

carregarPublicacoes();