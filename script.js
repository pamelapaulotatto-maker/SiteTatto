const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const cards = document.querySelectorAll('.card');

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth + 30; // largura + margin

// quantos cabem na tela
function visibleCards() {
  return Math.floor(document.querySelector('.carousel-container').offsetWidth / cardWidth);
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < cards.length - visibleCards()) {
    currentIndex++;
    track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
  }
});

let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Usuário está rolando para baixo -> esconder
        header.classList.add("hidden");
    } else {
        // Usuário rolando para cima -> mostrar
        header.classList.remove("hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // evita negativos
}, false);


