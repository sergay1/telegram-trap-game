const gridSize = 5;
let traps = 3;
let trapPositions = [];

function changeTraps(delta) {
  traps = Math.max(1, traps + delta);
  document.getElementById('trapCount').innerText = traps;
}

function startGame() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  trapPositions = generateTraps(gridSize, traps);

  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerHTML = '⭐';
    cell.dataset.index = i;
    cell.onclick = () => reveal(cell);
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

function reveal(cell) {
  const index = parseInt(cell.dataset.index);
  if (trapPositions.includes(index)) {
    cell.innerHTML = '❌';
    cell.classList.add('trap');
  } else {
    cell.innerHTML = '✅';
    cell.classList.add('safe');
  }
  cell.onclick = null;
}

function goBack() {
  Telegram.WebApp.close();
}