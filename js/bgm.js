/* BGM */
const audio = document.getElementById('myAudio');
const playIcon = document.querySelector('.play');
const pauseIcon = document.querySelector('.pause');

playIcon.addEventListener('click', () => {
  audio.pause();
  playIcon.style.display = 'none';
  pauseIcon.style.display = 'block';
});

pauseIcon.addEventListener('click', () => {
  audio.play();
  playIcon.style.display = 'block';
  pauseIcon.style.display = 'none';
});