const gridSize = 5;
let traps = 3;
let trapPositions = [];
const allowedTraps = [1, 3, 5, 7];

let playLocked = false;

function changeTraps(delta) {
  const currentIndex = allowedTraps.indexOf(traps);
  let newIndex = currentIndex + delta;

  if (newIndex >= allowedTraps.length) newIndex = 0;
  if (newIndex < 0) newIndex = allowedTraps.length - 1;

  traps = allowedTraps[newIndex];
  document.getElementById('trapCount').innerText = traps;
}

function startGame() {
  if (playLocked) {
    alert('Слишком часто, пожалуйста подождите');
    return; // выходим, чтобы не запускать игру и не открывать ссылку
  }

  playLocked = true;
  const playBtn = document.querySelector('.play');
  playBtn.style.backgroundColor = '#555'; // делаем кнопку темной
  playBtn.style.cursor = 'not-allowed';   // меняем курсор

  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  trapPositions = generateTraps(gridSize, traps);

  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;

    if (trapPositions.includes(i)) {
      cell.innerHTML = '❌';
      cell.classList.add('trap');
    } else {
      cell.innerHTML = '⭐';
      cell.classList.add('safe');
    }

    grid.appendChild(cell);
  }

  setTimeout(() => {
    playLocked = false;
    playBtn.style.backgroundColor = ''; // возвращаем цвет кнопки
    playBtn.style.cursor
