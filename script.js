const pixelBoard = document.querySelector('#pixel-board');

function creatingPixelBoardCollumns(row, colunas) {
    for (let column = 1; column <= colunas; column += 1) {
      const divColumn = document.createElement('div');
      divColumn.classList.add('pixel');
      divColumn.classList.add('td');
      row.appendChild(divColumn);
    }
  }

  function creatingPixelBoardRows(linhas) {
    for (let row = 1; row <= linhas; row += 1) {
      const divRow = document.createElement('div');
      divRow.classList.add('tr');
      pixelBoard.appendChild(divRow);
      creatingPixelBoardCollumns(divRow, linhas);
    }
  }

  creatingPixelBoardRows(5);

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

let pixels = document.querySelectorAll('.pixel');

function addingEventListenersToPixels(elements) {
  for (let index = 0; index < elements.length; index += 1) {
    elements[index].addEventListener('click', (event) => {
      const selColor = document.querySelector('.selected');
      const bgColor = window.getComputedStyle(selColor, null).getPropertyValue('background-color');
      const pixelClicked = event.target;
      pixelClicked.style.backgroundColor = bgColor;
    });
  }
}