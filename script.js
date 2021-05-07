function changeSelected(event) {
  const getSelected = document.querySelector('.selected');
  getSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function addColoPalette() {
  for (let index = 0; index < 4; index += 1) {
    const colorPalette = document.createElement('div');
    colorPalette.classList.add('color');
    if (index === 0) {
      colorPalette.style.background = 'black';
    } else {
      colorPalette.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 200)}, ${Math.ceil(Math.random() * 200)}, ${Math.ceil(Math.random() * 200)})`;
    }
    colorPalette.addEventListener('click', changeSelected);
    document.querySelector('#color-palette').appendChild(colorPalette);
  }
  document.querySelector('.color').classList.add('selected');
}

addColoPalette();

function setPixelColor(event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

function addPixel(element) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.addEventListener('click', setPixelColor);
  element.appendChild(pixel);
}

function createPixelBoard(line, column) {
  for (let lineIndex = 0; lineIndex < line; lineIndex += 1) {
    const linePixel = document.createElement('div');
    linePixel.classList.add('line');
    document.querySelector('#pixel-board').appendChild(linePixel);
    for (let columnPixel = 0; columnPixel < column; columnPixel += 1) {
      const element = document.querySelectorAll('.line');
      addPixel(element[lineIndex]);
    }
  }
}

createPixelBoard(5, 5);

function clearBoad() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', clearBoad);

function generateBoard() {
  const input = document.querySelector('#board-size');
  const board = document.querySelector('#pixel-board');
  if (input.value === '') {
    alert('Board inválido!');
  } else {
    while (board.hasChildNodes()) {
      board.removeChild(board.firstChild)
    }
    if (input.value < 5) {
      createPixelBoard(5, 5);
    } else if (input.value > 50) {
      createPixelBoard(50, 50);
    } else {
      createPixelBoard(input.value, input.value);
    }
  }
}

const generetionBoard = document.querySelector('#generate-board');
generetionBoard.addEventListener('click', generateBoard);
