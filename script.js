window.onload = function () {
  let colorsList = [
    'black',
    'blue',
    'yellow',
    'pink'
  ];
  let pixelsColor = document.querySelectorAll('.color');
  let boardSize = 0;
  let listOfPixels = document.querySelectorAll('.pixel');;
  clickInputButton();
  setInitialColors();
  changeSelectedColor();
  changePixelsColor();
  clearBoard();


  function setInitialColors() {
    for (index = 0; index < pixelsColor.length; index += 1) {
      pixelsColor[index].style.backgroundColor = colorsList[index];
      if (colorsList[index] === 'black') {
        pixelsColor[index].className += ' selected';
      };
    };
  };

  function changeSelectedColor() {
    for (index = 0; index < pixelsColor.length; index += 1) {
      let currentDiv = pixelsColor[index];
      currentDiv.addEventListener('click', nowSelected);
    };
  };

  function nowSelected(e) {
    for (index = 0; index < pixelsColor.length; index += 1) {
      let currentDiv = pixelsColor[index];
      currentDiv.className = 'color';
    };

    e.target.className = 'color selected';
  };

  function changePixelsColor() {

    for (let index = 0; index < listOfPixels.length; index += 1) {
      let currentPixel = listOfPixels[index];

      currentPixel.addEventListener('click', function (e) {
        e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
      });
    };
  };

  function clearBoard() {

    let btn = document.querySelector('#clear-board');

    btn.addEventListener('click', function () {
      for (let index = 0; index < listOfPixels.length; index += 1) {
        let currentPixel = listOfPixels[index];
        currentPixel.style.backgroundColor = 'white';
      };
    });
  };

  function clickInputButton() {
    let btn = document.querySelector('#generate-board');
    btn.addEventListener('click', function () {
      let input = document.querySelector('#board-size');
      input.type = 'number';
      input.min = '1';
      if (input.value === '') {
        alert('Board inválido!');
      } else if (input.value > 50) {
        boardSize = 50;
      } else if (input.value < 5) {
        boardSize = 5;
      } else {
        boardSize = parseInt(input.value);
      };

      input.value = '';
      killBoard();
      generateBoard(boardSize);
      listOfPixels = document.querySelectorAll('.pixel');
      changePixelsColor();
      clearBoard();
    });
  };

  function generateBoard(boardSize) {
    let table = document.createElement('table');

    for (let index = 0; index < boardSize; index += 1) {
      let tr = document.createElement('tr');

      for (let index = 0; index < boardSize; index += 1) {
        let td = document.createElement('td');
        td.className = 'pixel';
        tr.appendChild(td);
      }
      table.appendChild(tr);
    };
    document.querySelector('#pixel-board').appendChild(table);
  };
};

function killBoard() {
  let pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.removeChild(pixelBoard.firstElementChild);
};
