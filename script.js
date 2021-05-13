window.onload = function () {
  makeColorsSelector();
  selectColorInitial();
  createPixelBoard();
  clearBoard();
  addEventChangeBoard();

  function makeColorsSelector() {
    let colorPalette = document.querySelector('#color-palette');
    for (let index = 0; index < 4; index += 1) {
      let pixel = document.createElement('td');
      pixel.className = 'color';
      if (index === 0) {
        pixel.style.backgroundColor = '#000000';
        pixel.className += ' selected';
      } else {
        pixel.style.backgroundColor = getRandomColor();
      }
      colorPalette.appendChild(pixel);
    }
  }

  function selectColorInitial() {
    let selectedFirstColor = document.querySelectorAll('.color')[0];
    let selectedSecondColor = document.querySelectorAll('.color')[1];
    let selectedThirdColor = document.querySelectorAll('.color')[2];
    let selectedFourthColor = document.querySelectorAll('.color')[3];

    selectedFirstColor.addEventListener('click', function () {
      selectedFirstColor.className += ' selected';
      selectedSecondColor.classList.remove('selected');
      selectedThirdColor.classList.remove('selected');
      selectedFourthColor.classList.remove('selected');
    });

    selectedSecondColor.addEventListener('click', function () {
      selectedSecondColor.className += ' selected';
      selectedFirstColor.classList.remove('selected');
      selectedThirdColor.classList.remove('selected');
      selectedFourthColor.classList.remove('selected');
    });

    selectedThirdColor.addEventListener('click', function () {
      selectedThirdColor.className += ' selected';
      selectedFirstColor.classList.remove('selected');
      selectedSecondColor.classList.remove('selected');
      selectedFourthColor.classList.remove('selected');
    });

    selectedFourthColor.addEventListener('click', function () {
      selectedFourthColor.className += ' selected';
      selectedFirstColor.classList.remove('selected');
      selectedSecondColor.classList.remove('selected');
      selectedThirdColor.classList.remove('selected');
    });
  }

  function createPixelBoard(size = 5) {
    let board = document.querySelector('#pixel-board');
    for (let line = 1; line <= size; line += 1) {
      let pixelLine = document.createElement('tr');
      for (let column = 1; column <= size; column += 1) {
        let pixelColumn = document.createElement('td');
        pixelColumn.className = 'pixel';
        pixelLine.appendChild(pixelColumn);
      }
      board.appendChild(pixelLine);
    }
    setPixel();
  }

  function setPixel() {
    let selectedPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < selectedPixel.length; index += 1) {
      selectedPixel[index].addEventListener('click', function () {
        let selectedElement = document.querySelector('.selected');
        selectedPixel[index].style.backgroundColor = selectedElement.style.backgroundColor;
      });
    }
  }

  function clearBoard() {
    let buttonClear = document.querySelector('#clear-board');
    buttonClear.addEventListener('click', function () {
      let allPixels = document.querySelectorAll('.pixel');
      for (let index = 0; index < allPixels.length; index += 1) {
        console.log('woooooo');
        allPixels[index].style.backgroundColor = 'white';
      }
    });
  }

  function removeBoard() {
    let board = document.querySelector('#pixel-board');
    board.innerHTML = '';
  }

  function changeBoard() {
    let input = document.querySelector('#board-size').value;
    if (input === '') {
      alert('Board inválido!');
    } else if (input < 5) {
      removeBoard();
      createPixelBoard(5);
    } else if (input > 50) {
      removeBoard();
      createPixelBoard(50);
    } else {
      removeBoard();
      createPixelBoard(input);
    }
  }

  function addEventChangeBoard() {
    let changeButton = document.querySelector('#generate-board');
    changeButton.addEventListener('click', changeBoard);
  }

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
};
