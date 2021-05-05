const color = document.querySelectorAll('.color');
// const palette = document.querySelector('#color-palette');
const board = document.querySelector('#pixel-board');
const sizeQuery = document.getElementById('board-size');
let boardSize = 5;
let pixelSize = 40;
let selected = 'black';

resetBoard();
resizeGrid();

document.addEventListener('click', function(eventObject){
  let target = eventObject.target
  if ( target.classList.contains('pixel')){
    target.style.backgroundColor = selected;
  }
  if ( target.classList.contains('color')){
    resetPaletteClasses();
    target.className = ("color selected");
    selected = window.getComputedStyle(target).backgroundColor
  }
});

function newSize(){
  if (sizeQuery.value === ''){
    alert('Board inválido!')
    return;
  }
  if (sizeQuery.value > 50) {
    boardSize = 50;
    return;
  }
  if (sizeQuery.value < 5) {
    boardSize = 5;
    return;
  }
  boardSize = sizeQuery.value;
  resetBoard();
  resizeGrid();
}

function resetPaletteClasses(){
  for(let index = 0; index < color.length; index += 1){
    color[index].className = ('color');
  }
}


function resizeGrid(){
  grid = `repeat(${boardSize}, ${pixelSize}px)`
  board.style.gridTemplateColumns = grid;
}

// Cria ou reseta a board com numero de elementos definidos e com pixels em branco
function resetBoard() {
  board.innerHTML = '';
  let numberOfPixels = boardSize * boardSize;
  for (let index = 0; index < numberOfPixels; index += 1){
    let div = document.createElement("div");
    div.className = ('pixel');
    div.style.backgroundColor = 'white';
    board.appendChild(div);
  }
}