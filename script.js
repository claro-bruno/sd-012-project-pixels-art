const pixelBoard = document.querySelector('#pixel-board');
const blackColor = document.getElementById('#color1');
// const colorsPalette = document.querySelectorAll('.color-palette');
const color2 = document.querySelectorAll('#color2');
const color3 = document.querySelectorAll('#color3');
const color4 = document.querySelectorAll('#color4');
const colorSelected = 'color selected';
// const random = (Math.ceil(Math.random() * 255)

function initialColorSelected() {
  const paletteColor = document.getElementsByClassName('color');
  paletteColor[0].style.backgroundColor = 'black';
  paletteColor[1].style.backgroundColor = 'cyan';
  paletteColor[2].style.backgroundColor = 'aquamarine';
  paletteColor[3].style.backgroundColor = 'deeppink';
  paletteColor[0].classList.add('selected');
}
initialColorSelected();

function generateLinePixel(pam1, userSize) {
  for (let index2 = 0; index2 < userSize; index2 += 1) {
    const CreatePixelRow = document.createElement('div');
    CreatePixelRow.classList.add('pixel');
    pam1.appendChild(CreatePixelRow);
  }
}

function generatePixel(userSize) {
  for (let index = 0; index < userSize; index += 1) {
    const createPixel = document.createElement('div');
    createPixel.classList.add('pixelLine');
    pixelBoard.appendChild(createPixel);
    generateLinePixel(createPixel, userSize);
  }
}
generatePixel(5);
