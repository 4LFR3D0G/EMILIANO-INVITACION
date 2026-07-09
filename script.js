const cover = document.getElementById('cover');
const openBtn = document.getElementById('openBtn');
const music = document.getElementById('music');

openBtn.addEventListener('click', function () {
  cover.classList.add('is-hidden');
  music.volume = 0.72;
  music.play().catch(function () {});
  setTimeout(function () {
    document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' });
  }, 300);
});
