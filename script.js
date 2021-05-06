
function generateRandomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}
function createPalette(id, color) {
  let colorPalette = document.getElementById('color-palette');
  let createDiv = document.createElement('div');
  
  createDiv.className = 'color';
  createDiv.id = id;
  createDiv.style.backgroundColor = color;
  colorPalette.appendChild(createDiv);
}
function createPixelBoard(number) {
  let pixelBoard = document.getElementById('pixel-board');
  
  for (let index = 0; index < numero; index += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    pixelBoard.appendChild(createPixel);
  }
}