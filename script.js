function createBlock(bgColor, className, parentClassName) {
  const colorPaletteSection = document.getElementById(parentClassName);
  const colorPaletteDiv = document.createElement('div');

  colorPaletteDiv.className = className;
  colorPaletteDiv.style.backgroundColor = bgColor;

  colorPaletteSection.appendChild(colorPaletteDiv);
}

function checkUsedColor(color, usedColors) {
  for (let index = 0; index < usedColors.length; index += 1) {
    if (color === usedColors[index]) return 'used';
  }
}

function createPaletteBlocks(colors) {
  const usedColors = [];

  for (let index = 0; index < 4; index += 1) {
    const randomIndex = Math.floor(Math.random() * (colors.length - 1));
    const color = colors[randomIndex];

    if (index === 0) {
      createBlock('black', 'color selected', 'color-palette');
    } else if (checkUsedColor(color, usedColors) === 'used') {
      index -= 1;
    } else {
      createBlock(color, 'color', 'color-palette');
      usedColors.push(color);
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

function addEventPalette() {
  const paletteDivs = document.querySelectorAll('.color');

  for (let index = 0; index < paletteDivs.length; index += 1) {
    paletteDivs[index].addEventListener('click', (event) => {
      const paletteColorSelected = document.querySelector('.selected');
      paletteColorSelected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('pixel')) {
    const paletteColorSelected = document.querySelector('.selected');
    const pixelClicked = event.target;

    pixelClicked.style.backgroundColor = paletteColorSelected.style.backgroundColor;
  }
});

function addEventButton() {
  const clearButton = document.querySelector('#clear-board');

  clearButton.addEventListener('click', () => {
    const pixelDivs = document.querySelectorAll('.pixel');

    for (let index = 0; index < pixelDivs.length; index += 1) {
      pixelDivs[index].style.backgroundColor = 'white';
    }
  });
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
  } else if (changeInput.value > 50) {
    removeBoard();
    createBoardBlocks(50);
  } else {
    removeBoard();
    createBoardBlocks(changeInput.value);
  }
}

function addEventChangeBoard() {
  const changeButton = document.querySelector('#generate-board');

  changeButton.addEventListener('click', changeBoard);
}

createPaletteBlocks(['blue', 'green', 'red', 'orange', 'yellow', 'purple']);
createBoardBlocks(5);
addEventPalette();
addEventButton();
addEventChangeBoard();
