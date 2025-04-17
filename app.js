// Selecionando os elementos do DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let timeDom = document.querySelector('.carousel .time');

// Ajustando os thumbnails
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

let timeRunning = 3000;

// Função para avançar ou retroceder no slider
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]); // Move o primeiro item para o final
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]); // Move o último item para o início
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    // Remove as classes após um tempo para efeito de transição
    setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
}

// Eventos para os botões de navegação
nextDom.onclick = function() {
    showSlider('next');
};

prevDom.onclick = function() {
    showSlider('prev');
};

// Obter o modal
var modal = document.getElementById("synopsis-modal");
var modalText = document.getElementById("modal-text");

// Obter todos os botões de sinopse
var synopsisButtons = document.querySelectorAll(".synopsis-btn");

// Função para abrir o modal
synopsisButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Pega a sinopse do atributo 'data-synopsis' do botão
        var synopsis = this.getAttribute("data-synopsis");
        
        // Define o conteúdo do modal
        modalText.textContent = synopsis;
        
        // Exibe o modal
        modal.style.display = "block";
    });
});

// Função para fechar o modal
function closeModal() {
    modal.style.display = "none";
}

// Fechar o modal se o usuário clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}