const shadows = '2px 2px 2px grey';
const board = document.getElementById('pixel-board');
const input = document.getElementById('board-size');
const buttonGen = document.getElementById('generate-board');

const createPalette = (color) => {
  const palette = document.getElementById('color-palette');
  const colorSquare = document.createElement('span');
  colorSquare.classList.add('color');
  colorSquare.id = color;
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
      } else {
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
  const value = parseInt(input.value, 36);
  deleteBoard();
  createPixels(value);
  input.value = '';
});

window.onload = () => {
  createPalette('black');
  createPalette('red');
  createPalette('green');
  createPalette('blue');
  createPixels(5);
  selectColor();
  clearBoard();
};
