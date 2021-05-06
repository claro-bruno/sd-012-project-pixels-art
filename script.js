const shadows = '2px 2px 2px grey';
const board = document.getElementById('pixel-board');
const input = document.getElementById('board-size');
const buttonGen = document.getElementById('generate-board');

const createPalette = (color) => {
  const palette = document.getElementById('color-palette');
  const colorSquare = document.createElement('span');
  colorSquare.classList.add('color');
  colorSquare.id = color;
  colorSquare.style.backgroundColor = color;
  palette.appendChild(colorSquare);
  if (color === 'black') {
    colorSquare.classList.add('selected');
    colorSquare.style.boxShadow = shadows;
  }
};

// Solução encontrada no repositório de Matheus "Set" Inácio
// Source: https://github.com/tryber/sd-011-project-pixels-art/tree/heyset-pixel-art-project

const paintPixels = (evt) => {
  const selected = document.querySelector('.selected');
  const pixel = evt.target;
  pixel.style.backgroundColor = selected.id;
};

const createPixels = (n) => {
  board.style.width = `${n * 42}px`;
  board.style.height = `${n * 42}px`;
  for (let i = 1; i <= n ** 2; i += 1) {
    const pixel = document.createElement('span');
    pixel.style.border = '1px solid black';
    pixel.classList.add('pixel');
    board.appendChild(pixel);
    pixel.addEventListener('click', paintPixels);
  }
};

const selectColor = () => {
  const paletteItems = document.getElementsByClassName('color');
  for (let i = 0; i < paletteItems.length; i += 1) {
    paletteItems[i].addEventListener('click', () => {
      let selected = document.querySelector('.selected');
      selected.style.boxShadow = '';
      if (paletteItems[i].classList.contains('selected') === false) {
        paletteItems[i].classList.add('selected');
        selected.classList.remove('selected');
        selected = paletteItems[i];
        selected.style.boxShadow = shadows;
      }
    });
  }
};

const clearBoard = () => {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', () => {
    const pixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
};

const deleteBoard = () => {
  while (board.lastElementChild) {
    board.removeChild(board.lastElementChild);
  }
};

buttonGen.addEventListener('click', () => {
  let value = parseInt(input.value, 10);
  if (!value) {
    alert('Board inválido!');
  } else if (value < 5) {
    value = 5;
  } else if (value > 50) {
    value = 50;
  }
  deleteBoard();
  createPixels(value);
  input.value = '';
});

const getRandomColor = (array) => {
  const white = 'rgb(255, 255, 255)';
  const black = 'rgb(0, 0, 0)';
  for (let i = 0; i < 3; i += 1) {
    array.push(Math.floor(Math.random() * 256));
  }
  let mask = 'rgb(x, x, x)';
  array.forEach((num) => {
    mask = mask.replace('x', num);
  });
  if (mask !== black && mask !== white) {
    return mask;
  }
};

window.onload = () => {
  createPalette('black');
  createPalette(getRandomColor([]));
  createPalette(getRandomColor([]));
  createPalette(getRandomColor([]));
  createPixels(5);
  selectColor();
  clearBoard();
};
