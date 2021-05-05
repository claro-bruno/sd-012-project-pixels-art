window.onload = function () {
  function generatePixelsLine() {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    return divPixel;
  }

  function fillLine(boardSize) {
    let pixelsLine = document.createElement('div');
    for (let index = 1; index <= boardSize; index += 1) {
      pixelsLine.appendChild(generatePixelsLine());
      pixelsLine.className = 'pixels-line';
    }
    return pixelsLine;
  }
  function fillBoard () {
    let boardSize = 5;
    let pixelsBoard = document.getElementById('pixels-board');
    for (let index = 1; index <= boardSize; index += 1) {
        pixelsBoard.appendChild(fillLine(boardSize));
      }
  }
  fillBoard();
};
