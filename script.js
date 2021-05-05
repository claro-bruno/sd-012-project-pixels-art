const pixelBoard = document.querySelector('#pixel-board');

function creatingPixelDivsCollumns(row, colunas) {
  for (let column = 1; column <= colunas; column += 1) {
    const divColumn = document.createElement('div');
    divColumn.classList.add('pixel');
    divColumn.classList.add('td');
    row.appendChild(divColumn);
  }
}

function creatingPixelDivs(linhas) {
  for (let row = 1; row <= linhas; row += 1) {
    const divRow = document.createElement('div');
    divRow.classList.add('tr');
    pixelBoard.appendChild(divRow);
    creatingPixelDivsCollumns(divRow, linhas);
  }
}

creatingPixelDivs(5);

const paletteColors = document.querySelectorAll('.color');

function addingEventListenersToPalette(elements) {
  for (let index = 0; index < elements.length; index += 1) {
    elements[index].addEventListener('click', (event) => {
      for (index = 0; index < elements.length; index += 1) {
        elements[index].classList.remove('selected');
      }
      event.target.classList.toggle('selected');
    });
  }
}

addingEventListenersToPalette(paletteColors);

const pixels = document.querySelectorAll('.pixel');

function addingEventListenersToPixels(elements) {
  for (let index = 0; index < elements.length; index += 1) {
    elements[index].addEventListener('click', (event) => {
      const selColor = document.querySelector('.selected');
      const BackCol = window.getComputedStyle(selColor, null).getPropertyValue('background-color');
      event.target.style.backgroundColor = BackCol;
    });
  }
}

addingEventListenersToPixels(pixels);

function clearingTheBoard(elements) {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', () => {
    for (let index = 0; index < elements.length; index += 1) {
      elements[index].style.backgroundColor = 'white';
    }
  });
}

clearingTheBoard(pixels);

const inputButton = document.querySelector('#generate-board');
const input = document.querySelector('#board-size');

function boardSize() {
  inputButton.addEventListener('click', () => {
    if (input.value === '')  return alert("Board inválido!");
    const divsRowsPixels = pixelBoard.querySelectorAll('.tr');
    for (let index = 0; index < divsRowsPixels.length; index += 1) {  
      pixelBoard.removeChild(divsRowsPixels[index]);
    }
    
    creatingPixelDivs(input.value);
  });
}

boardSize();



window.onload = () => {
  const blackColor = document.querySelector('#first-color');
  blackColor.classList.add('selected');
};
