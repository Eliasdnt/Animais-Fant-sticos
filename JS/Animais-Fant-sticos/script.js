document.addEventListener("DOMContentLoaded", function() {
    const imagens = document.querySelectorAll(".animais-lista img");
    const descricoes = document.querySelectorAll(".animals-desc section");
     
     descricoes.forEach(descricao => {
                descricao.style.display = "none";
            });
            descricoes[0].style.display = "block";

    imagens.forEach((imagem, index) => {
        imagem.addEventListener("click", function() {
            descricoes.forEach(descricao => {
                descricao.style.display = "none";
            });
            descricoes[index].style.display = "block";
        });
    });
});
