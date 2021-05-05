window.onload = function () {
  function generatePixelsLine() {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    divPixel.style.backgroundColor = 'white';
    return divPixel;
  }

  function fillLine(boardSize) {
    let pixelsLine = document.createElement('div');
    for (let index = 1; index <= boardSize; index += 1) {
      pixelsLine.appendChild(generatePixelsLine());
      pixelsLine.className = 'pixel-line';
    }
    return pixelsLine;
  }
  function fillBoard () {
    let boardSize = 5;
    let pixelsBoard = document.getElementById('pixel-board');
    for (let index = 1; index <= boardSize; index += 1) {
        pixelsBoard.appendChild(fillLine(boardSize));
      }
  }
  fillBoard();

  function selectedColors() {
    let colorsArray = document.querySelectorAll('.color');
    colorsArray[0].className = 'color selected';
  }
};
