const colorPalette = document.querySelector('#color-palette');
const colorChoices = ['black', 'red', 'blue', 'pink', 'purple', 'green', 'orange', 'yellow'];
const pixelBoard = document.querySelector('#pixel-board');
const clearButton = document.querySelector('#clear-board');

let selectedColor = 'black';

clearButton.innerHTML = 'Limpar';

function paletaDeCores(colorNumber, colorArray) {
  for (let index = 0; index < colorNumber; index += 1) {
    const divColorPalette = document.createElement('div');
    divColorPalette.className = 'color';
    divColorPalette.style.backgroundColor = colorArray[index];
    colorPalette.appendChild(divColorPalette);
    if (divColorPalette.style.backgroundColor === 'black') {
      divColorPalette.classList.add('selected');
    }
  }
}

function fillPixelBoard(lineNumber, columnNumber) {
  for (let indexL = 0; indexL < lineNumber; indexL += 1) {
    const boardLine = document.createElement('div');
    pixelBoard.appendChild(boardLine);
    for (let indexC = 0; indexC < columnNumber; indexC += 1) {
      const boardColumn = document.createElement('div');
      boardColumn.className = 'pixel';
      pixelBoard.appendChild(boardColumn);
    }
  }
}

function applyColor() {
  document.addEventListener('click', (event) => {
    if (event.target.className === 'pixel') {
      const pixelTarget = event.target;
      pixelTarget.style.backgroundColor = selectedColor;
    }
  });
}

function copyColor() {
  document.addEventListener('click', (event) => {
    if (event.target.className === 'color') {
      const classSelected = document.querySelector('.selected');
      classSelected.classList.remove('selected');
      event.target.classList.add('selected');
      selectedColor = event.target.style.backgroundColor;
    }
  });
}

function clearPixelBoard() {
  clearButton.addEventListener('click', () => {
    const classPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < classPixel.length; index += 1) {
      classPixel[index].style.backgroundColor = 'white';
    }
  });
}

paletaDeCores(4, colorChoices);
fillPixelBoard(5, 5);
copyColor();
applyColor();
clearPixelBoard();
