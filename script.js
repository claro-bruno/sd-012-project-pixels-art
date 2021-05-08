const colorPalette = document.querySelector('#color-palette');
const colorArray = ['black', 'red', 'blue', 'pink', 'purple', 'green', 'orange', 'yellow'];
const pixelBoard = document.querySelector('#pixel-board');

function paletaDeCores(colorNumber, colorArray) {  
  for (let index = 0; index < colorNumber; index ++) {
    const divColorPalette = document.createElement('div');
    divColorPalette.className = 'color';
    divColorPalette.style.backgroundColor = colorArray[index];
    colorPalette.appendChild(divColorPalette);
  }
};

function fillPixelBoard(lineNumber, columnNumber) {
  for (let indexL = 0; indexL < lineNumber; indexL ++) {
    const boardLine = document.createElement('div');
    pixelBoard.appendChild(boardLine);
    for (let indexC = 0; indexC < columnNumber; indexC ++) {
      const boardColumn = document.createElement('div');
      boardColumn.className = 'pixel';
      pixelBoard.appendChild(boardColumn);
    }
  }
};

paletaDeCores(4, colorArray);
fillPixelBoard(5, 5);