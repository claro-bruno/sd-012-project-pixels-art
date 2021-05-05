const palette = document.querySelector('#color-palette');
const board = document.querySelector('#pixel-board');
const sizeQuery = document.getElementById('board-size');
let boardSize = 5;
const pixelSize = 40;
const paletteSize = 4;
let selected = 'black';

// Toma a ação dependendo do elemento clicado
function clicker(eventObject) {
  const target = eventObject.target;
  if (target.classList.contains('pixel')) {
    target.style.backgroundColor = selected;
  } else if (target.classList.contains('color')) {
    document.querySelector('.selected').className = ('color');
    target.className = ('color selected');
    selected = window.getComputedStyle(target).backgroundColor;
  }
}

// Adiciona o event listener de click
document.addEventListener('click', clicker);

// Cria uma string de argumento para o estilo grid-template-columns
function resizeGrid() {
  const grid = `repeat(${boardSize}, ${pixelSize}px)`;
  board.style.gridTemplateColumns = grid;
}

// Cria ou reseta a board com pixels em branco
function resetBoard() {
  board.innerHTML = '';
  const numberOfPixels = boardSize * boardSize;
  for (let index = 0; index < numberOfPixels; index += 1) {
    const div = document.createElement('div');
    div.className = ('pixel');
    div.style.backgroundColor = 'white';
    board.appendChild(div);
  }
}

// Cria ou reseta a paleta com cores randomizadas
function resetPalette() {
  palette.innerHTML = '';
  for (let index = 0; index < paletteSize; index += 1) {
    const div = document.createElement('div');
    if (index === 0) {
      div.style.backgroundColor = 'black';
      div.className = ('color selected');
    } else {
      div.className = ('color');
      const randomColor = Math.floor(Math.random() * 16777215).toString(16); // Fonte: https://css-tricks.com/snippets/javascript/random-hex-color/
      div.style.backgroundColor = `#${randomColor}`;
    }
    palette.appendChild(div);
  }
}

// Cria novo board com tamanho definido pelo usuário
function newSize() {
  boardSize = sizeQuery.value;
  if (sizeQuery.value === '') {
    alert('Board inválido!');
  }
  if (sizeQuery.value > 50) {
    boardSize = 50;
  }
  if (sizeQuery.value < 5) {
    boardSize = 5;
  }
  resetBoard();
  resizeGrid();
}

// Pro linter não incomodar
if(boardSize < 0) {
  newSize();
}
// Criação inicial do setup
resetBoard();
resizeGrid();
resetPalette();
