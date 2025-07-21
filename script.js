const gridSize = 5;
let traps = 3;
let trapPositions = [];
let gameRunning = false;
const allowedTraps = [1, 3, 5, 7];

function changeTraps(delta) {
  const idx = allowedTraps.indexOf(traps);
  if (idx === -1) {
    traps = allowedTraps[0];
  } else {
    const newIndex = (idx + delta + allowedTraps.length) % allowedTraps.length;
    traps = allowedTraps[newIndex];
  }
  document.getElementById('trapCount').innerText = traps;
}

function startGame() {
  if (gameRunning) return;
  gameRunning = true;

  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  trapPositions = generateTraps(gridSize, traps);

  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';

    const isTrap = trapPositions.includes(i);
    cell.textContent = isTrap ? '❌' : '⭐';
    cell.classList.add(isTrap ? 'trap' : 'safe');

    grid.appendChild(cell);
  }

  // Можно снова запускать игру через 1 секунду
  setTimeout(() => { gameRunning = false; }, 1000);
}

function generateTraps(size, count) {
  const positions = new Set();
  while (positions.size < count) {
    positions.add(Math.floor(Math.random() * (size * size)));
  }
  return Array.from(positions);
}

function goBack() {
  if (window.Telegram?.WebApp?.close) Telegram.WebApp.close();
}
