// OBJETIVOS:
// OBJETIVO 1 - Quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o vídeo do trailer.

// OBJETIVO 2 - Quando o usuário clicar no X devemos fechar a modal.

// OBJETIVO 1 - Quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o vídeo do trailer.
//     - PASSO 1 - Dar um jeito de pegar o elemento que representa o botão na tela usando o JS.
//     - PASSO 2 - Dar um jeito de identificar quando o usuário clicar no botão.
//     - PASSO 3 - Dar um jeito de pegar o elemento da modal no JS.
//     - PASSO 4 - Abrir a modal na tela.
// OBJETIVO 2 - Quando o usuário clicar no X devemos fechar a modal.
//     - PASSO 1 - Dar um jeito de pegar o elemento de fechar modal usando o JS.
//     - PASSO 2 - Dar um jeito de identificar quando o usuário clicar no X.
//     - PASSAR 3 - Fechar a modal.

console.log("mostrar o document");

console.log(document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => { 
    alternarModal(); 
    video.setAttribute("src", linkDoVideo);
});

console.log("mostrar o objeto da modal", modal);

const botaoFecharModal = document.querySelector(".fechar-modal");
botaoFecharModal.addEventListener("click", () => {
    modal.classList.toggle("aberto");
    video.setAttribute("src", "");
});
