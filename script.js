const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');

function createPalette() {
  let div = document.createElement('div');
  div.className = 'color';
  div.style.backgroundColor = 'black';
  colorPalette.appendChild(div);
  for (let index = 0; index < 3; index += 1) {
    let div = document.createElement('div');
    div.className = 'color';
    div.style.backgroundColor = randomRGB();
    colorPalette.appendChild(div); 
  }
}

function randomRGB() {
  let r, g, b;
  r = parseInt(Math.random() * 255);
  g = parseInt(Math.random() * 255);
  b = parseInt(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function createBoard (size) {
  pixelBoard.style.width = (size * 42) + 'px';
  for (let row = 1; row <= size; row += 1) {
    for (let column = 1; column <= size; column += 1) {
      let div = document.createElement('div');
      div.className = 'pixel';
      pixelBoard.appendChild(div);
    }
  }
}

window.onload = function pageLoad () {
  createPalette();
  createBoard(5);
};