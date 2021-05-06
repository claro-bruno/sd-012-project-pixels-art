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
  function fillBoard(boardSize) {
    let pixelBoard = document.getElementById('pixel-board');
    pixelBoard.innerHTML = '';
    for (let index = 1; index <= boardSize; index += 1) {
      pixelBoard.appendChild(fillLine(boardSize));
    }
  }
  fillBoard(5);

  function selectedColors() {
    let colorsArray = document.querySelectorAll('.color');
    colorsArray[0].className = 'color selected';
    for (let index = 0; index < colorsArray.length; index += 1) {
      colorsArray[index].addEventListener('click', function (event) {
        let selectedColor = document.querySelector('.selected');
        selectedColor.className = 'color';
        event.target.className = 'color selected';
      });
    }
  }
  selectedColors();

  function paintPixels() {
    let pixelsArray = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelsArray.length; index += 1) {
      pixelsArray[index].addEventListener('click', function (event) {
        let colorSelected = document.querySelector('.selected');
        let color = getComputedStyle(colorSelected).backgroundColor;
        event.target.style.backgroundColor = color;
      });
    }
  }
  paintPixels();

  function buttonClear() {
    let buttonClear = document.getElementById('clear-board');
    let pixelsArray = document.querySelectorAll('.pixel');
    buttonClear.addEventListener('click', function () {
      for (let index = 0; index < pixelsArray.length; index += 1) {
        pixelsArray[index].style.backgroundColor = 'white';
      }
    });
  }
  buttonClear();

  function generateNewBoard() {
    let input = document.getElementById('board-size');
    let buttonGenerate = document.getElementById('generate-board');
    buttonGenerate.addEventListener('click', function () {
      let boardSize = input.value;
      console.log(boardSize);
      if (boardSize.length !== 0) {
        if (boardSize < 5) {
          boardSize = 5;
        } else if (boardSize > 50) {
          boardSize = 50;
        }
        fillBoard(boardSize);
      } else {
        alert('Board inválido!');
      }
    });
  }
  generateNewBoard();
};
