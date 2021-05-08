const colorPalette = document.getElementById('color-palette');
const generateBoard = document.getElementById('generate-board');
const clearBoard = document.getElementById('clear-board');
const pixelBoard = document.getElementById('pixel-board');
const boardSize = document.getElementById('board-size');

// cria quadrado das paletas
function criaPaletas() {
  for (let i = 0; i < 4; i++) {
    let square = document.createElement('div')
    square.className = 'color';
    colorPalette.appendChild(square);
  }
}
criaPaletas();

// atribui cor às palaetas
function corPaletas() {
  let options = '0123456789abcdef';
  let paletas = document.getElementsByClassName('color');
  for (let i1 = 0; i1 < 4; i1++) {
    let cor = '#';
    if (i1 === 0) { cor = 'black' } else {
      for (let i2 = 0; i2 < 6; i2++) {
        cor += options[Math.floor(Math.random() * 16)]; }
    }
    paletas[i1].style.backgroundColor = cor;
  }
}
corPaletas();

function geraQuadro(size) {
  for (let linhas = 0; linhas < size; linhas++){
    let row = document.createElement('tr');
    for (let colunas = 0; colunas < size; colunas++) {
      let column = document.createElement('td');
      column.className = 'pixel';
      row.appendChild(column);
    }
    pixelBoard.appendChild(row);
  }
}


function blackSelected() {
  let selected = document.querySelector('.color');
  selected.classList.add('selected');
}

function colorSelected(event) {
  let previous = document.querySelector('.selected');
  previous.classList.remove('selected');
  event.target.classList.add('selected');
}
colorPalette.addEventListener('click', () => colorSelected(event));

function pixelPaint(event) {
  let selectedColor = document.querySelector('.selected');
  let color = selectedColor.style.backgroundColor;
  let eventColor = event.target.style.backgroundColor;
  if (eventColor === color) {
    event.target.style.backgroundColor = 'white';
  } else { 
    event.target.style.backgroundColor = color 
  }
}
pixelBoard.addEventListener('click', () => pixelPaint(event));

function eraseGrid() {
  let pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.backgroundColor =  'white';
  }
}
clearBoard.addEventListener('click', eraseGrid);

function novoQuadro(size) {
  if (size) {
    if (size < 5) { size = 5 } else if (size > 50) { size = 50 }
    pixelBoard.innerHTML = '';
    geraQuadro(size);
  } else { alert('Board inválido!') }
}
generateBoard.addEventListener('click', () => novoQuadro(boardSize.value))



window.onload = function() {
  blackSelected();
  geraQuadro(5)
}
