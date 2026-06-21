const photos = [
  'assets/foto1.jpg',
  'assets/foto2.jpg',
  'assets/foto3.jpg',
  'assets/foto4.jpg',
  'assets/foto5.jpg',
  'assets/foto6.jpg',
  'assets/foto7.jpg'
];

let currentSlide = 0;
const slide = document.getElementById('slide');

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function openLetter() {
  document.querySelector('.envelope').classList.toggle('open');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % photos.length;
  slide.src = photos[currentSlide];
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + photos.length) % photos.length;
  slide.src = photos[currentSlide];
}

let startX = 0;
slide.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slide.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 40) nextSlide();
  if (endX - startX > 40) prevSlide();
});

function showLove() {
  document.getElementById('loveText').textContent = 'Aku sayang kamu, selalu 🤍';
}

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '♡';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 650);
