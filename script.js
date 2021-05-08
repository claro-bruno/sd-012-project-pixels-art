const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const pallete = document.getElementsByClassName('color');
const btnClear = document.getElementById('clear-board');
const btnGenerate = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');

function randomRGB() {
  const r = parseInt((Math.random() * 255), 10);
  const g = parseInt((Math.random() * 255), 10);
  const b = parseInt((Math.random() * 255), 10);
  return `rgb(${r}, ${g}, ${b})`;
}

function createPalette() {
  const div = document.createElement('div');
  div.className = 'color';
  div.classList.add('selected');
  div.style.backgroundColor = 'black';
  colorPalette.appendChild(div);
  for (let index = 0; index < 3; index += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'color';
    newDiv.style.backgroundColor = randomRGB();
    colorPalette.appendChild(newDiv);
  }
}

function resetBoard() {
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.lastChild);
  }
}

function fixValue(size) {
  if (size < 5 || size == null) { return 5; }
  if (size > 50) { return 50; }
  return size;
}

function getValue() {
  const size = boardSize.value;
  if (size < 5 || size > 50 || size == null) {
    window.alert('Board inválido!');
    return fixValue(size);
  }
  return size;
}

function createBoard() {
  const size = getValue();
  resetBoard();
  pixelBoard.style.width = `${(size * 42)}px`;
  for (let row = 1; row <= size * size; row += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    pixelBoard.appendChild(div);
  }
}

function selectColor(event) {
  for (let index = 0; index < pallete.length; index += 1) {
    if (pallete[index].classList.contains('selected')) {
      pallete[index].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

function changeColor(event) {
  const functionEvent = event;
  const color = document.querySelector('.selected').style.backgroundColor;
  functionEvent.target.style.backgroundColor = color;
}

function clearBoard() {
  const board = document.getElementsByClassName('pixel');
  for (let index = 0; index < board.length; index += 1) {
    board[index].style.backgroundColor = 'white';
  }
}

window.onload = () => {
  createPalette();
  pixelBoard.addEventListener('click', changeColor);
  for (let index = 0; index < pallete.length; index += 1) {
    pallete[index].addEventListener('click', selectColor);
  }
  btnClear.addEventListener('click', clearBoard);
  createBoard();
  boardSize.value = null;
  btnGenerate.addEventListener('click', createBoard);
};
