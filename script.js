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
    let div = document.createElement('div');
    div.className = 'color';
    div.style.backgroundColor = randomRGB();
    colorPalette.appendChild(div); 
  }
}

function createBoard () { 
  let size = boardSize.value;
  if (size < 5 || size > 50 || size == null) {
    window.alert('Board inválido!')
    if (size < 5 || size == null) { size = 5; }
    if (size > 50) { size = 50; }
  } 
  resetBoard();
  pixelBoard.style.width = (size * 42) + 'px';
  for (let row = 1; row <= size*size; row += 1) {
    let div = document.createElement('div');
    div.className = 'pixel';
    pixelBoard.appendChild(div);
  }
}
  
function resetBoard() {
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.lastChild);
  }
}

function selectColor (event) {
  for (let index = 0; index < pallete.length; index += 1) {
    if (pallete[index].classList.contains('selected')) {
      pallete[index].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

function changeColor(event) {
  const color = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = color;
}

function clearBoard() {
  const board = document.getElementsByClassName('pixel');
  for (let index = 0; index < board.length; index += 1) {
    board[index].style.backgroundColor = 'white';
  }
}

window.onload = function pageLoad () {
  createPalette();
  pixelBoard.addEventListener('click', changeColor);
  for (let index = 0; index < pallete.length; index += 1) {
   pallete[index].addEventListener ('click', selectColor);
  }
  btnClear.addEventListener('click', clearBoard);
  createBoard();
  boardSize.value = null;
  btnGenerate.addEventListener('click', createBoard);
};
