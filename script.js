function createBlock(bgColor, className, parentClassName) {
  const colorPaletteSection = document.getElementById(parentClassName);
  const colorPaletteDiv = document.createElement('div');

  colorPaletteDiv.className = className;
  colorPaletteDiv.style.backgroundColor = bgColor;

  colorPaletteSection.appendChild(colorPaletteDiv);
}

function createPaletteBlocks() {
  for (let index = 0; index < 4; index += 1) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); // Source: https://css-tricks.com/snippets/javascript/random-hex-color/
    console.log(randomColor);
    if (index === 0) {
      createBlock('black', 'color selected', 'color-palette');
    } else {
      createBlock(`#${randomColor}`, 'color', 'color-palette');
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

function changeBoard() {
  const changeInput = document.querySelector('#board-size');
  if (changeInput.value === '') {
    alert('Board inválido!');
  } else if (changeInput.value < 5) {
    removeBoard();
    createBoardBlocks(5);
    addEventPixels();
  } else if (changeInput.value > 50) {
    removeBoard();
    createBoardBlocks(50);
    addEventPixels();
  } else {
    removeBoard();
    createBoardBlocks(changeInput.value);
    addEventPixels();
  }
}

function addEventChangeBoard() {
  const changeButton = document.querySelector('#generate-board');

  changeButton.addEventListener('click', changeBoard);
}

createPaletteBlocks();
createBoardBlocks(5);
addEventPalette();
addEventPixels();
addEventButton();
addEventChangeBoard();
