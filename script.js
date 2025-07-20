const gridSize = 5;
let traps = 3;
let trapPositions = [];
const allowedTraps = [1, 3, 5, 7];

function changeTraps(delta) {
  const idx = allowedTraps.indexOf(traps) + delta;
  traps = allowedTraps[(idx + allowedTraps.length) % allowedTraps.length];
  document.getElementById('trapCount').innerText = traps;
}

function startGame() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  trapPositions = generateTraps(gridSize, traps);

  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerText = trapPositions.includes(i) ? '❌' : '⭐';
    cell.classList.add(trapPositions.includes(i) ? 'trap' : 'safe');
    grid.appendChild(cell);
  }
}

function generateTraps(size, count) {
  const positions = new Set();
  while (positions.size < count) {
    positions.add(Math.floor(Math.random() * size * size));
  }
  return Array.from(positions);
}

function goBack() {
  if (window.Telegram?.WebApp?.close) Telegram.WebApp.close();
}
