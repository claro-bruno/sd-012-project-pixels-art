function selectedColorPrimary() {
  const onloadBlackColor = document.querySelector('div', '.color');
  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    onloadBlackColor.classList.add('selected');
    pixels[index].addEventListener('click', () => {
      pixels[index].style.backgroundColor = 'black';
    });
  }
}

// Trecho de código retirado de: https://jsfiddle.net/ntxuc69a/9/
function selectColor() {
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', () => {
      const selectedColor = document.querySelector('.selected');
      if (selectedColor) {
        selectedColor.classList.remove('selected');
      }
      colors[index].classList.add('selected');
    }, false);
  }
}

function paintPixels() {
  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => {
      const selectedColor = document.querySelector('.selected');
      const cssObj = window.getComputedStyle(selectedColor);
      pixels[index].style.backgroundColor = cssObj.getPropertyValue('background-color');
    });
  }
}

function clearPixels() {
  const pixels = document.querySelectorAll('.pixel');
  const button = document.getElementById('clear-board');

  for (let index = 0; index < pixels.length; index += 1) {
    button.addEventListener('click', () => {
      pixels[index].style.backgroundColor = 'white';
    });
  }
}

function clearBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  while (pixelBoard.lastElementChild) {
    pixelBoard.removeChild(pixelBoard.lastElementChild);
  }
}

// Trecho retirado do repositório de Rorigo Merlone
// https://github.com/tryber/sd-012-project-pixels-art/pull/3
function createPixels(n) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 1; index <= n ** 2; index += 1) {
    const pixel = document.createElement('span');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
  }
}

function createBoard() {
  const button = document.getElementById('generate-board');
  const input = document.getElementById('board-size');

  button.addEventListener('click', () => {
    let value = parseInt(input.value, 10);
    if (!value) {
      alert('Board inválido!');
    } else {
      if (value < 5) {
        value = 5;
      } else if (value > 50) {
        value = 50;
      }
      clearBoard();
      createPixels(value);
    }
    input.value = '';
  });
}

window.onload = () => {
  selectedColorPrimary();
  selectColor();
  paintPixels();
  clearPixels();
  createBoard();
};
