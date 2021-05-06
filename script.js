function randomColorGenereter() {
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
  for (let index = 0; index < number; index += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    pixelBoard.appendChild(createPixel);
  }
}

function initialColor(id) {
  const corInicial = document.getElementById(id);
  corInicial.className += ' selected';
}

function changeSelected(element) {
  const selected = document.querySelector('.selected');
  selected.className = 'color';
  element.target.className += ' selected';
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

function changeColor(element) {
  const selectedColor = document.querySelector('.selected');
  const compStyle = window.getComputedStyle(selectedColor);
  element.target.style.backgroundColor = compStyle.getPropertyValue('background-color');
}

function changeColorClick() {
  const pixels = document.querySelectorAll('.pixel');
  for (const pixel of pixels) {
    pixel.addEventListener('click', changeColor);
  }
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}

function clearBoardClick() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clearBoard);
}

function userBoarder() {
  const inputNumber = document.getElementById('board-size');
  let numberOfInput = 0;
  if (parseInt(inputNumber.value) < 5) {
    numberOfInput = 5;
  } else if (parseInt(inputNumber.value) > 50) {
    numberOfInput = 50;
  } else {
    numberOfInput = parseInt(inputNumber.value);
  }
  const numberOfPixels = {};
  for (let index = 5; index <= 50; index += 1) {
    numberOfPixels[index] = index * index;
  }
  const finalNumber = numberOfPixels[numberOfInput];
  if (inputNumber.value.length < 1) {
    return alert('Board inválido!'); // createPixelBoard(25);
  }
  return finalNumber;
}

function sizeBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  const inputNumber = document.getElementById('board-size');
  let numberOfInput = 0;
  if (parseInt(inputNumber.value) < 5) {
    numberOfInput = 5;
  } else if (parseInt(inputNumber.value) > 50) {
    numberOfInput = 50;
  } else {
    numberOfInput = parseInt(inputNumber.value);
  }
  const numberOfPixels = {};
  for (let index = 5; index <= 50; index += 1) {
    numberOfPixels[index] = index * index;
  }
  pixelBoard.style.width = `${(numberOfInput * 40) + (2 * numberOfInput)}px`;
  pixelBoard.style.height = `${(numberOfInput * 40) + (2 * numberOfInput)}px`;
}

function finalBoarderElements() {
  const pixelBoard = document.getElementById('pixel-board');
  const vqvButton = document.getElementById('generate-board');
  // let defaultSize = createPixelBoard(25);

function vqvButton.addEventListener('click') {
    pixelBoard.innerHTML = '';
    defaultSize = createPixelBoard(userBoarder());
    sizeBoard();
    changeSelectedClick();
    changeColorClick();
    clearBoardClick();
  }
}

window.onload = function pixelsArt() {
  finalBoarderElements();
  createPalette('color1', 'black');
  createPalette('color2', randomColorGenereter());
  createPalette('color3', randomColorGenereter());
  createPalette('color4', randomColorGenereter());
  initialColor('color1');
  changeSelectedClick();
  changeColorClick();
  clearBoardClick();
};
