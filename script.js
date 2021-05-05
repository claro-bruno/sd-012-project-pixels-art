window.onload = function () {
  function generatePixelsLine() {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    divPixel.style.backgroundColor = 'white';
    return divPixel;
  }

  function fillLine(boardSize) {
    let pixelLine = document.createElement('div');
    for (let index = 1; index <= boardSize; index += 1) {
      pixelLine.appendChild(generatePixelsLine());
      pixelLine.className = 'pixel-line';
    }
    return pixelLine;
  }
  function fillBoard () {
    let boardSize = 5;
    let pixelBoard = document.getElementById('pixel-board');
    for (let index = 1; index <= boardSize; index += 1) {
        pixelBoard.appendChild(fillLine(boardSize));
      }
  }
  fillBoard();

  function selectedColors() {
    let colorsArray = document.querySelectorAll('.color');
    let colorPalette = document.querySelector('#color-palette');
    colorsArray[0].className = 'color selected';
    for (let index = 0; index < colorsArray.length; index += 1) {
        colorsArray[index].addEventListener('click', function(event) {
            let selectedColor = document.querySelector('.selected');
            selectedColor.className = 'color';
            event.target.className = 'color selected';
        })
    }
  }
  selectedColors();

};
