const cells = [...document.querySelectorAll(".cell")];
const statusElement = document.querySelector("#status");
const resetButton = document.querySelector("#reset-game");
const scoreElements = {
  X: document.querySelector("#score-x"),
  O: document.querySelector("#score-o"),
  draw: document.querySelector("#score-draw")
};

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let board = Array(9).fill("");
let currentPlayer = "X";
let gameOver = false;
const scores = { X: 0, O: 0, draw: 0 };

function getWinningCombination() {
  return winningCombinations.find(([first, second, third]) => (
    board[first] &&
    board[first] === board[second] &&
    board[first] === board[third]
  ));
}

function renderBoard() {
  cells.forEach((cell, index) => {
    const value = board[index];
    cell.textContent = value;
    cell.disabled = Boolean(value) || gameOver;
    cell.classList.toggle("cell--x", value === "X");
    cell.classList.toggle("cell--o", value === "O");
    cell.setAttribute("aria-label", value
      ? `Casa ${index + 1}: jogador ${value}`
      : `Casa ${index + 1}, vazia`);
  });

  scoreElements.X.textContent = scores.X;
  scoreElements.O.textContent = scores.O;
  scoreElements.draw.textContent = scores.draw;
}

function playTurn(event) {
  const index = cells.indexOf(event.currentTarget);

  if (gameOver || board[index]) {
    return;
  }

  board[index] = currentPlayer;
  const winningCombination = getWinningCombination();

  if (winningCombination) {
    gameOver = true;
    winningCombination.forEach((winningIndex) => {
      cells[winningIndex].classList.add("cell--winner");
    });
    scores[currentPlayer] += 1;
    statusElement.textContent = `Jogador ${currentPlayer} venceu!`;
  } else if (board.every(Boolean)) {
    gameOver = true;
    scores.draw += 1;
    statusElement.textContent = "Deu velha! A partida terminou empatada.";
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusElement.textContent = `Vez do jogador ${currentPlayer}`;
  }

  renderBoard();
}

function resetGame() {
  board = Array(9).fill("");
  currentPlayer = "X";
  gameOver = false;
  statusElement.textContent = "Vez do jogador X";
  cells.forEach((cell) => cell.classList.remove("cell--winner"));
  renderBoard();
  cells[0].focus();
}

cells.forEach((cell) => cell.addEventListener("click", playTurn));
resetButton.addEventListener("click", resetGame);
renderBoard();