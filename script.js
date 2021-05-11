const arrayColor = ['black', 'yellow', 'red', 'green'];

function createPalette(arrColor) {
  for (let index = 0; index < arrColor.length; index += 1) {
    const divColor = document.createElement('div');
    divColor.className = 'color';
    divColor.style.backgroundColor = arrColor[index];
    const colorPalette = document.getElementById('color-palette');

    colorPalette.appendChild(divColor);
  }
}
createPalette(arrayColor);

function createBoard(size) {
  for (let index = 0; index < size; index += 1) {
    const divLine = document.createElement('div');
    for (let index2 = 0; index2 < size; index2 += 1) {
      const divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      divLine.className = 'line';
      divLine.appendChild(divPixel);
    }
    const divBoard = document.querySelector('#pixel-board');
    divBoard.appendChild(divLine);
  }
}
createBoard(5);

function selectBlack() {
  const firstColor = document.getElementById('color-palette').firstElementChild;
  firstColor.classList.add('selected');
}
selectBlack();

const colorPalette = document.getElementById('color-palette');

function selectColor() {
  colorPalette.addEventListener('click', (event) => {
    if (event.target.className === 'color') {
      const classSelected = document.querySelector('.selected');
      classSelected.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
selectColor();

function coloringPixel() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', (event) => {
    const colorSelected = document.querySelector('.selected');
    const bgColor = event.target.style;
    bgColor.backgroundColor = colorSelected.style.backgroundColor;
  });
}
coloringPixel();

function deletePixel() {
  const buttonClean = document.querySelector('#clear-board');
  buttonClean.addEventListener('click', () => {
    const btnClean = document.querySelectorAll('.pixel');
    for (let index = 0; index < btnClean.length; index += 1) {
      btnClean[index].style.backgroundColor = 'white';
    }
  });
}
deletePixel();
