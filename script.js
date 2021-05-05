function createBlock(bgColor, className, parentClassName) {
  const colorPaletteSection = document.getElementById(parentClassName);
  const colorPaletteDiv = document.createElement('div');

  colorPaletteDiv.className = className;
  colorPaletteDiv.style.backgroundColor = bgColor;

  colorPaletteSection.appendChild(colorPaletteDiv);
}

function createPaletteBlocks(colors) {
  const paletteColors = colors;
  for (let index = 0; index < paletteColors.length; index += 1) {
    if (index === 0) {
      createBlock(paletteColors[index], 'color selected', 'color-palette');
    } else {
      createBlock(paletteColors[index], 'color', 'color-palette');
    }
  }
}

function createBoardBlocks(size) {
  const boardSize = size;
  const pixelBoard = document.querySelector('#pixel-board');
  const boardWidth = size * 40 + size * 2 + 1;
  pixelBoard.style.width = `${boardWidth}px`;

  for (let indexLine = 0; indexLine < boardSize; indexLine += 1) {
    for (let indexCollumn = 0; indexCollumn < boardSize; indexCollumn += 1) {
      createBlock('white', 'pixel', 'pixel-board');
    }
  }
}

function alternateSelection(event) {
  const paletteColorSelected = document.querySelector('.selected');
  paletteColorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function addEventPalette() {
  const paletteDivs = document.querySelectorAll('.color');

  for (let index = 0; index < paletteDivs.length; index += 1) {
    paletteDivs[index].addEventListener('click', alternateSelection);
  }
}

function changePixelColor(event) {
  const paletteColorSelected = document.querySelector('.selected');
  const pixelClicked = event.target;

  pixelClicked.style.backgroundColor = paletteColorSelected.style.backgroundColor;
}

function addEventPixels() {
  const pixelDivs = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixelDivs.length; index += 1) {
    pixelDivs[index].addEventListener('click', changePixelColor);
  }
}

function clearBoard() {
  const pixelDivs = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixelDivs.length; index += 1) {
    pixelDivs[index].style.backgroundColor = 'white';
  }
}

function addEventButton() {
  const clearButton = document.querySelector('#clear-board');

  clearButton.addEventListener('click', clearBoard);
}

function removeBoard() {
  const board = document.querySelector('#pixel-board');
  const pixelDivs = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixelDivs.length; index += 1) {
    board.removeChild(pixelDivs[index]);
  }
}

function addEventChangeBoard() {
  const changeButton = document.querySelector('#generate-board');
  const changeInput = document.querySelector('#board-size');

  changeButton.addEventListener('click', () => {
    if (changeInput.value === '' || changeInput.value < 5 || changeInput.value > 50) {
      alert('Board Inválido');
    } else {
      removeBoard();
      createBoardBlocks(changeInput.value);
      addEventPixels();
    }
  });
}

createPaletteBlocks(['black', 'blue', 'green', 'yellow']);
createBoardBlocks(5);
addEventPalette();
addEventPixels();
addEventButton();
addEventChangeBoard();
