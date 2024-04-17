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
            descricoes[index].style.animation ="show 0.6s forwards"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const accordionlist = document.querySelectorAll('.js-accordion dt');
    
    accordionlist[0].classList.add('ativo');
    accordionlist[0].nextElementSibling.classList.add('ativo');

    function activeAccordion(){
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }

    accordionlist.forEach((item) => {
        item.addEventListener('click', activeAccordion)
    });
});



function scrollSuave() {
    const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");
    console.log(linksInternos);

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href'); // Fixed typo in currentTarget
        console.log(href);
        const section = document.querySelector(href);

        if (section) { // Added a check if section exists
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection); // Added scrollToSection as event listener
    });
}

scrollSuave();
