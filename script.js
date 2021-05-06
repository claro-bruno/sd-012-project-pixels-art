window.onload = function () {
  function generateRandomColors() {
    const colorsArray = document.getElementsByClassName('color');
    for (let index = 1; index < colorsArray.length; index += 1) {
      const color = `#${parseInt(Math.random() * 0xfff, 16)
        .toString(16)
        .padStart(3, '0')}`;
      colorsArray[index].style.backgroundColor = color;
    }
  }

  function generatePixelsLine() {
    const divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    divPixel.style.backgroundColor = 'white';
    return divPixel;
  }

  function fillLine(boardSize) {
    const pixelLine = document.createElement('div');
    for (let index = 1; index <= boardSize; index += 1) {
      pixelLine.appendChild(generatePixelsLine());
      pixelLine.className = 'pixel-line';
    }
    return pixelLine;
  }
  function fillBoard(boardSize) {
    const pixelBoard = document.getElementById('pixel-board');
    pixelBoard.innerHTML = '';
    for (let index = 1; index <= boardSize; index += 1) {
      pixelBoard.appendChild(fillLine(boardSize));
    }
  }
  fillBoard(5);

  function selectedColors() {
    const colorsArray = document.querySelectorAll('.color');
    colorsArray[0].className = 'color selected';
    for (let index = 0; index < colorsArray.length; index += 1) {
      colorsArray[index].addEventListener('click', function (event) {
        const selectedColor = document.querySelector('.selected');
        selectedColor.className = 'color';
        event.target.className = 'color selected';
      });
    }
  }

  function paintPixels() {
    const pixelsArray = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelsArray.length; index += 1) {
      pixelsArray[index].addEventListener('click', function (event) {
        const colorSelected = document.querySelector('.selected');
        const color = getComputedStyle(colorSelected).backgroundColor;
        console.log(color);
        event.target.style.backgroundColor = color;
      });
    }
  }

  function buttonClear() {
    const buttonClear = document.getElementById('clear-board');
    const pixelsArray = document.querySelectorAll('.pixel');
    buttonClear.addEventListener('click', function () {
      for (let index = 0; index < pixelsArray.length; index += 1) {
        pixelsArray[index].style.backgroundColor = 'white';
      }
    });
  }

  function boardSizeRange(size) {
    let boardSize = size;
    if (boardSize < 5) {
      boardSize = 5;
    } else if (boardSize > 50) {
      boardSize = 50;
    }
    return boardSize;
  }

  function initialize() {
    generateRandomColors();
    selectedColors();
    paintPixels();
    buttonClear();
  }
  initialize();

  function generateNewBoard() {
    const input = document.getElementById('board-size');
    const buttonGenerate = document.getElementById('generate-board');
    buttonGenerate.addEventListener('click', function () {
      const boardSize = input.value;
      if (boardSize.length !== 0) {
        boardSizeRange(boardSize);
        fillBoard(boardSize);
      } else {
        alert('Board inválido!');
      }
      initialize();
    });
  }
  generateNewBoard();
};
