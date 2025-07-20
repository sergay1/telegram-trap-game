const gridSize = 5;
let traps = 3;
let trapPositions = [];
const allowedTraps = [1, 3, 5, 7];

function changeTraps(delta) {
  const currentIndex = allowedTraps.indexOf(traps);
  let newIndex = currentIndex + delta;

  if (newIndex >= allowedTraps.length) newIndex = 0;
  if (newIndex < 0) newIndex = allowedTraps.length - 1;

  traps = allowedTraps[newIndex];
  document.getElementById('trapCount').innerText = traps;
}

function startGame() {
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
}

function generateTraps(size, count) {
  const total = size * size;
  const positions = new Set();
  while (positions.size < count) {
    positions.add(Math.floor(Math.random() * total));
  }
  return Array.from(positions);
}

function goBack() {
  if (window.Telegram && Telegram.WebApp && Telegram.WebApp.close) {
    Telegram.WebApp.close();
  } else {
    alert('Закрыть приложение можно только внутри Telegram');
  }
}
