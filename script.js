const colors = ['black', 'red', 'blue', 'green'];

function makePalette(arrayColor) {
  for (let index = 0; index < arrayColor.length; index += 1) {
    const divPalette = document.getElementById('color-palette');
    const divColor = document.createElement('div');
    divColor.className = 'color';
    divColor.style.backgroundColor = arrayColor[index];
    divPalette.appendChild(divColor);
  }
}
makePalette(colors);

function makerBoardPixel(size) {
  for (let index = 0; index < size; index += 1) {
    const divLine = document.createElement('div');
    divLine.className = 'pixel-line';
    for (let index2 = 0; index2 < size; index2 += 1) {
      const divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      divLine.appendChild(divPixel);
    }
    const divBoard = document.querySelector('#pixel-board');
    divBoard.appendChild(divLine);
  }
}
makerBoardPixel(5);

function selectFirstColor() {
  const firstColor = document.querySelector('#color-palette').firstChild;
  firstColor.classList.add('selected');
}
selectFirstColor();

function selectColor() {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', (event) => {
    if (event.target.className === 'color') {
      const colorSelected = document.querySelector('.selected');
      colorSelected.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
selectColor();

function colorBoard() {
  const board = document.querySelector('#pixel-board');
  board.addEventListener('click', (event) => {
    const colorSelected = document.querySelector('.selected').style.backgroundColor;
    const eventListen = event.target;
    eventListen.style.backgroundColor = colorSelected;
  });
}
colorBoard();

function clearBoard() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', () => {
    const pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}
clearBoard();

function boardSize(min, max) {
  const imputBoard = document.querySelector('#board-size');
  if (imputBoard.value < min) {
    alert('O tamanho mínimo é 5');
    return min;
  } if ((imputBoard.value > max)) {
    alert('O tamanho máximo é 50');
    return max;
  }
  return imputBoard.value;
}

function generateBoard() {
  const buttonBoard = document.querySelector('#generate-board');
  buttonBoard.addEventListener('click', () => {
    const imputBoard = document.querySelector('#board-size');
    if (imputBoard.value === '') {
      alert('Board inválido!');
    } else {
      const divLine = document.querySelectorAll('.pixel-line');
      for (let index = 0; index < divLine.length; index += 1) {
        const pixelBoard = divLine[index].parentElement;
        pixelBoard.removeChild(divLine[index]);
      }
      makerBoardPixel(boardSize(5, 50));
      imputBoard.value = '';
    }
  });
}
generateBoard();
