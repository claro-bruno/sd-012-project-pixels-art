window.onload = function pixelsArt() {
  finalBoarderElements();
  createPaletteElement('color1', 'black');
  createPaletteElement('color2', generateRandomColor());
  createPaletteElement('color3', generateRandomColor());
  createPaletteElement('color4', generateRandomColor());
  initialColor('color1');
  changeSelectedClick();
  changeColorClick();
  clearBoardClick();
};

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
    let createPixel = document.createElement('div');
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
  element.target.className += 'selected';
}

function changeColorClick() {
  let pixels = document.querySelectorAll('.pixel');
  for (let pixel of pixels) {
    pixel.addEventListener('click', changeColor);
  }
}

function changeColor(element) {
  let selectedColor = document.querySelector('.selected');
  let compStyle = window.getComputedStyle(selectedColor);
  element.target.style.backgroundColor = compStyle.getPropertyValue('background-color');
}

function changeSelectedClick() {
  let color1 = document.getElementById('color1');
  let color2 = document.getElementById('color2');
  let color3 = document.getElementById('color3');
  let color4 = document.getElementById('color4');

  color1.addEventListener('click', changeSelected);
  color2.addEventListener('click', changeSelected);
  color3.addEventListener('click', changeSelected);
  color4.addEventListener('click', changeSelected);
}

function clearBoardClick() {
  let clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clearBoard);
}
function clearBoard() {
  let pixels = document.querySelectorAll('.pixel');
  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}

function sizeBoard() {
  let pixelBoard = document.getElementById('pixel-board');
  let userInput = document.getElementById('board-size');
  let numberOfInput = 0;

  if (parseInt(userInput.value) < 5) {
    numberOfInput = 5;
  } else if (parseInt(userInput.value) > 50){
    numberOfInput = 50;
  } else {
    numberOfInput = parseInt(userInput.value);
  }
  let numberOfPixels = {};
  for (let index = 5; index <= 50; index += 1) {
    numberOfPixels[index] = index * index;
  }
  pixelBoard.style.width = `${(numberOfInput * 40) + (2 * numberOfInput)}px`;
  pixelBoard.style.height = `${(numberOfInput * 40) + (2 * numberOfInput)}px`;
}