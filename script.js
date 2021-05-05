window.onload = function () {
  const getColors = document.getElementsByClassName('color');
  const getPixelBoard = document.getElementById('pixel-board');
  const getClearButton = document.querySelector('#clear-board');
  const getBoardSize = document.querySelector('#board-size');
  const getGenerateButton = document.querySelector('#generate-board');

  function colorPaletteGeneration() {
    getColors[0].style.backgroundColor = 'rgb(0,0,0)';
    for (let index = 1; index < getColors.length; index += 1) {
      getColors[index].style.backgroundColor =
        'rgb(' + randomRgb() + ', ' + randomRgb() + ', ' + randomRgb() + ')';
    }
  }
  function randomRgb() {
    return Math.random() * 255;
  }

  colorPaletteGeneration();

  function changeColorSelected(event) {
    const colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }
  for (let color of getColors) {
    color.addEventListener('click', changeColorSelected);
  }

  function fillPixel(event) {
    const refreshColorSelected = document.querySelector('.selected');
    const style = getComputedStyle(refreshColorSelected);
    event.target.style.backgroundColor = style.backgroundColor;
  }
  getPixelBoard.addEventListener('click', fillPixel);

  getClearButton.addEventListener('click', function () {
    const getPixels = document.querySelectorAll('.pixel');
    for (let pixel of getPixels) {
      pixel.style.backgroundColor = 'white';
    }
  });

  function removeTable() {
    const getTablelines = document.querySelectorAll('tr');
    const getTableColumns = document.querySelectorAll('td');
    for (let linIndex = 0; linIndex < getTablelines.length; linIndex += 1) {
      getTablelines[linIndex].remove();
      for (let colIndex = 0; colIndex < getTableColumns.length; colIndex += 1) {
        getTableColumns[colIndex].remove();
      }
    }
  }

  getGenerateButton.addEventListener('click', function () {
    if (getBoardSize.value !== '') {
      removeTable();
      let boardSize;
      if (getBoardSize.value < 5) {
        boardSize = 5;
      } else if (getBoardSize.value > 50) {
        boardSize = 50;
      } else {
        boardSize = getBoardSize.value;
      }
      for (let linIndex = 0; linIndex < boardSize; linIndex += 1) {
        let line = document.createElement('tr');
        getPixelBoard.appendChild(line);
        for (let colIndex = 0; colIndex < boardSize; colIndex += 1) {
          let column = document.createElement('td');
          column.className = 'pixel';
          line.appendChild(column);
        }
      }
    } else {
      alert('Board inválido!');
    }
  });
};
