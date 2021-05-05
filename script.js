window.onload = function () {
  const pixelsColor = document.querySelectorAll('.color');
  let listOfPixels = document.querySelectorAll('.pixel');
  let boardSize = 0;

  function setInitialColors() {
    const colorsList = [
      'yellow',
      'blue',
      'navy',
      'beige',
      'gray',
      'gold',
      'orange',
      'brown',
      'silver',
      'pink',
      'purple',
      'green',
      'red',
      'violet',
    ];

    for (let index = 0; index < pixelsColor.length; index += 1) {
      if (index === 0) {
        pixelsColor[index].style.backgroundColor = 'black';
        pixelsColor[index].className += ' selected';
      } else {
        const randomNum = Math.floor(Math.random() * 10);
        pixelsColor[index].style.backgroundColor = colorsList[randomNum];
        colorsList.splice(randomNum, 1);
        console.log(colorsList);
      }
    }
  }

  function nowSelected(e) {
    for (let index = 0; index < pixelsColor.length; index += 1) {
      const currentDiv = pixelsColor[index];
      currentDiv.className = 'color';
    }

    e.target.className = 'color selected';
  }

  function changeSelectedColor() {
    for (let index = 0; index < pixelsColor.length; index += 1) {
      const currentDiv = pixelsColor[index];
      currentDiv.addEventListener('click', nowSelected);
    }
  }

  function changePixelsColor() {
    for (let index = 0; index < listOfPixels.length; index += 1) {
      const currentPixel = listOfPixels[index];

      currentPixel.addEventListener('click', (e) => {
        e.target.style.backgroundColor = document.querySelector(
          '.selected'
        ).style.backgroundColor;
      });
    }
  }

  function clearBoard() {
    let btn = document.querySelector('#clear-board');

    btn.addEventListener('click', () => {
      for (let index = 0; index < listOfPixels.length; index += 1) {
        let currentPixel = listOfPixels[index];
        currentPixel.style.backgroundColor = 'white';
      }
    });
  }

  function killBoard() {
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.removeChild(pixelBoard.firstElementChild);
  }

  function generateBoard(boardSize) {
    const table = document.createElement('table');

    for (let index = 0; index < boardSize; index += 1) {
      const tr = document.createElement('tr');

      for (let index = 0; index < boardSize; index += 1) {
        const td = document.createElement('td');
        td.className = 'pixel';
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    document.querySelector('#pixel-board').appendChild(table);
  }

  function clickInputButton() {
    const btn = document.querySelector('#generate-board');
    btn.addEventListener('click', () => {
      const input = document.querySelector('#board-size');
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
      }

      input.value = '';
      killBoard();
      generateBoard(boardSize);
      listOfPixels = document.querySelectorAll('.pixel');
      changePixelsColor();
      clearBoard();
    });
  }


  clickInputButton();
  setInitialColors();
  changeSelectedColor();
  changePixelsColor();
  clearBoard();
};
