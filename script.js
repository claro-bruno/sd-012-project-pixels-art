
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
function initialColor(id) {
  let initialColor = document.getElementById(id);
  initialColor.className += 'selected';
}
function changeSelect(element) {
  let selected = document.querySelector('.selected');
  selected.className = 'color';
  elemento.target.className += 'selected';
}

function changeSelectedClick() {
  let color1 = document.getElementById('color1');
  let color2 = document.getElementById('color2');
  let color3 = document.getElementById('color3');
  const color4 = document.getElementById('color4');

  color1.addEventListener('click', changeSelected);
  color2.addEventListener('click', changeSelected);
  color3.addEventListener('click', changeSelected);
  color4.addEventListener('click', changeSelected);
}