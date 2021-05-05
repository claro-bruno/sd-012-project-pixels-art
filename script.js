const color = document.querySelectorAll('.color');
const palette = document.querySelector('#color-palette');
const board = document.querySelector('#pixel-board');
const sizeQuery = document.getElementById('board-size');
let boardSize = 5;
let pixelSize = 40;
let paletteSize = 4;
let selected = 'black';

resetBoard();
resizeGrid();
resetPalette();

document.addEventListener('click', function(eventObject){
  let target = eventObject.target
  if ( target.classList.contains('pixel')){
    target.style.backgroundColor = selected;
  }
  if ( target.classList.contains('color')){
    document.querySelector('.selected').className = ('color');
    target.className = ("color selected");
    selected = window.getComputedStyle(target).backgroundColor
  }
});

function newSize(){
  if (sizeQuery.value === ''){
    alert('Board inválido!')
  }
  if (sizeQuery.value > 50) {
    boardSize = 50;
  }
  if (sizeQuery.value < 5) {
    boardSize = 5;
  }
  else {
    boardSize = sizeQuery.value;
  }
  resetBoard();
  resizeGrid();
  resetPalette();
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

function resetPalette(){
  palette.innerHTML = '';
  for (let index = 0; index < paletteSize; index += 1){
    let div = document.createElement("div");
    if(index === 0) {
      div.style.backgroundColor = 'black';
      div.className = ('color selected');
    } else{
      div.className = ('color');
      let randomColor = Math.floor(Math.random()*16777215).toString(16); //https://css-tricks.com/snippets/javascript/random-hex-color/
      div.style.backgroundColor = '#' + randomColor;
    }
    palette.appendChild(div);
  }
}