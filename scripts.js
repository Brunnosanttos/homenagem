const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelectorAll('.carousel-inner img');
const indicators = document.querySelectorAll('.carousel-indicators li');

let currentIndex = 0; // Índice da imagem atual
let autoSlideInterval; // Variável para o intervalo automático

// Função para atualizar o carrossel
const updateCarousel = () => {
  // Calcula o deslocamento com base no índice atual
  const offset = -currentIndex * images[0].clientWidth;
  carouselInner.style.transform = `translateX(${offset}px)`;

  // Atualiza os indicadores
  updateIndicators();
};

// Função para atualizar os indicadores
const updateIndicators = () => {
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
  });
};

// Evento de clique para o botão "Anterior"
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
  restartAutoSlide(); // Reinicia o intervalo automático ao clicar
});

// Evento de clique para o botão "Próximo"
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
  restartAutoSlide(); // Reinicia o intervalo automático ao clicar
});

// Função para avançar automaticamente o carrossel
const autoSlide = () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
};

// Inicia o intervalo automático
const startAutoSlide = () => {
  autoSlideInterval = setInterval(autoSlide, 3000); // Muda a cada 2 segundos
};

// Reinicia o intervalo automático (útil após interações do usuário)
const restartAutoSlide = () => {
  clearInterval(autoSlideInterval);
  startAutoSlide();
};

// Inicialização
updateCarousel();
startAutoSlide();

const dataInicial = new Date("2024-10-21T22:00:00"); // Altere para a data de início do relacionamento

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - dataInicial;

  const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
  const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  document.getElementById("anos").textContent = String(anos).padStart(2, "0");
  document.getElementById("meses").textContent = String(meses).padStart(2, "0");
  document.getElementById("dias").textContent = String(dias).padStart(2, "0");
  document.getElementById("horas").textContent = String(horas).padStart(2, "0");
  document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
  document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}

setInterval(atualizarContador, 1000);

const emojis = ["❤️", "😍", "🔥", "✨", "💖"];
let emojisAtivos = 0;
const limiteEmojis = 20; // Limite máximo de emojis na tela

function criarEmoji() {
  if (emojisAtivos >= limiteEmojis) return; // Não cria mais emojis se o limite for alcançado

  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 80 + "vw";
  emoji.style.top = window.scrollY + "px"; // Define a posição inicial no topo do documento
  emoji.style.animationDuration = Math.random() * 3 + 2 + "s"; // Duração aleatória entre 2s e 5s
  document.body.appendChild(emoji);
  emojisAtivos++;

  // Remove o emoji após a animação
  emoji.addEventListener("animationend", () => {
    emoji.remove();
    emojisAtivos--;
  });
}


setInterval(criarEmoji, 300); // Cria um emoji a cada 300ms