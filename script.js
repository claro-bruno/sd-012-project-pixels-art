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
    createBlock(paletteColors[index], 'color', 'color-palette');
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

createPaletteBlocks(['black', 'blue', 'green', 'yellow']);
createBoardBlocks(5);
