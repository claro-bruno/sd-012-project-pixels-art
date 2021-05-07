const PALETTE_COLOR = ['black', 'green', 'blue', 'orange'];

function changeSelected(event) {
  let getSelected = document.querySelector('.selected');
  getSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function addColoPalette() {
  for (let index = 0; index < PALETTE_COLOR.length; index += 1) {
    const colorPalette = document.createElement('div');
    colorPalette.classList.add('color');
    colorPalette.style.backgroundColor = PALETTE_COLOR[index];
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
  let pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.addEventListener('click', setPixelColor)
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

createPixelBoard(5,5);

function clearBoad() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', clearBoad);