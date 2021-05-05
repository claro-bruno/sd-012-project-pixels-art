const color = document.querySelectorAll('.color');
const palette = document.querySelector('#color-palette');
const board = document.querySelector('#pixel-board');
let paletteSize = 4;
let boardSize = 5;
let numberOfPixels = boardSize * boardSize;
let selected

let paletteWidth = (paletteSize * 45);
let boardWidth = (boardSize * 42);

// palette.style.width = paletteWidth + 'px';
// board.style.width = boardWidth + 'px';

document.querySelector('body').addEventListener('click', clicked);

createBoard();

// const pixel = document.querySelectorAll('.pixel');

// Cria ou reseta a board com numero de elementos definidos e com pixels em branco


function clicked (eventObject){
  let target = eventObject.target
  if ( target.classList.contains('pixel')){

  }
  if ( target.classList.contains('color')){
    
  }
}

function createBoard() {
  board.innerHTML = '';
  for (let index = 0; index < numberOfPixels; index += 1){
  let div = document.createElement("div");
  div.className = ('pixel');
  board.appendChild(div);
  }
}