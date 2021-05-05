// const palette = document.querySelector('#color-palette');
// const black = document.getElementsByClassName('color')[0];
// const cyan = document.getElementsByClassName('color')[1];
// const blueviolet = document.getElementsByClassName('color')[2];
// const deeppink = document.getElementsByClassName('color')[3];
// const pixelBoard = document.querySelector('#pixel-board');
// const pixelRowConst = document.querySelector('.firstRow');

// function createPixelRow(row, sizeChoice) {
//   for (let index = 0; index < sizeChoice; index += 1) {
//     const generatePixelRow = document.createElement('div');
//     generatePixelRow.className = ('pixelRow');
//     pixelBoard.appendChild(generatePixelRow);
//   }
// }

// function createPixels(sizeChoice) {
//   for (let index = 0; index < sizeChoice; index += 1) {
//     const generatesPixelsConst = document.createElement('div');
//     generatesPixelsConst.className = ('pixel');
//     pixelBoard.appendChild(generatesPixelsConst);
//     createPixelRow(createPixels, sizeChoice);
//   }
// }
// createPixels(5);

const palette = document.querySelectorAll('.color');
const black = document.getElementsByClassName('color')[0];
const blue = document.getElementsByClassName('color')[1];
const red = document.getElementsByClassName('color')[2];
const green = document.getElementsByClassName('color')[3];
const selected = 'color selected';
const pixelBoard = document.querySelector('#pixel-board');
const boardSize = document.querySelector('#board-size');
const buttomGenerate = document.querySelector('#generate-board');


function generateLinePixel(line, userSize) {
  for (let index2 = 0; index2 < userSize; index2 += 1) {
    const createPixelLine = document.createElement('div');
    createPixelLine.classList.add('pixel');
    line.appendChild(createPixelLine);
  }
}

function generatePixels(userSize) {
  for (let index = 0; index < userSize; index += 1) {
    const createPixel = document.createElement('div');
    createPixel.classList.add('pixelLine');
    pixelBoard.appendChild(createPixel);
    generateLinePixel(createPixel, userSize);
  }
}

generatePixels(5);