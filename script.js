const color = document.querySelectorAll('.color');
const palette = document.querySelector('#color-palette');
const board = document.querySelector('#pixel-board');
let paletteSize = 4;
let boardSize = 5;
let numberOfPixels = boardSize * boardSize;
let selected = 'black';

let paletteWidth = (paletteSize * 45);
let boardWidth = (boardSize * 42);

// palette.style.width = paletteWidth + 'px';
// board.style.width = boardWidth + 'px';

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

function resetPaletteClasses (){
  for(let index = 0; index < color.length; index += 1){
    color[index].className = ('color');
  }
}

createBoard();

// const pixel = document.querySelectorAll('.pixel');

// Cria ou reseta a board com numero de elementos definidos e com pixels em branco




function createBoard() {
  board.innerHTML = '';
  for (let index = 0; index < numberOfPixels; index += 1){
  let div = document.createElement("div");
  div.className = ('pixel');
  div.style.backgroundColor = 'white';
  board.appendChild(div);
  }
}