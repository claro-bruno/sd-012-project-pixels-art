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
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}
function createPalette(id, color) {
  const colorPalette = document.getElementById('color-palette');
  const createDiv = document.createElement('div');
  
  createDiv.className = 'color';
  createDiv.id = id;
  createDiv.style.backgroundColor = color;
  colorPalette.appendChild(createDiv);
}
function createPixelBoard(number) {
  const pixelBoard = document.getElementById('pixel-board');
  
  for (let index = 0; index < numero; index += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    pixelBoard.appendChild(createPixel);
  }
}
function initialColor(id) {
  const initialColor = document.getElementById(id);
  initialColor.className += 'selected';
}
function changeSelect(element) {
  const selected = document.querySelector('.selected');
  selected.className = 'color';
  element.target.className += 'selected';
}

function changeColorClick() {
  const pixels = document.querySelectorAll('.pixel');
  for (const pixel of pixels) {
    pixel.addEventListener('click', changeColor);
  }
}

function changeColor(element) {
  const selectedColor = document.querySelector('.selected');
  const compStyle = window.getComputedStyle(selectedColor);
  element.target.style.backgroundColor = compStyle.getPropertyValue('background-color');
}

function changeSelectedClick() {
  const color1 = document.getElementById('color1');
  const color2 = document.getElementById('color2');
  const color3 = document.getElementById('color3');
  const color4 = document.getElementById('color4');

  color1.addEventListener('click', changeSelected);
  color2.addEventListener('click', changeSelected);
  color3.addEventListener('click', changeSelected);
  color4.addEventListener('click', changeSelected);
}

function clearBoardClick() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clearBoard);
}
function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}

function sizeBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  const userInput = document.getElementById('board-size');
  const numberOfInput = 0;

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

function userBoarder() {
  const userInput = document.getElementById('board-size');
  let numberOfInput = 0;
  if (parseInt(userInput.value) < 5) {
    numberOfInput = 5;
  } else if (parseInt(userInput.value) > 50){
    numberOfInput = 50;
  } else {
    numberOfInput = parseInt(userInput.value);
  }
  const numberOfPixels = {};
  for (let index = 5; index <= 50; index += 1) {
    numberOfPixels[index] = index * index;
  }
  const finalNumber = numberOfPixels[numberOfInput];
  if (userInput.value.length < 1) {
    return alert('Board inválido!'), createPixelBaordElement(25);
  }
  return finalNumber;
}