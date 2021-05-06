const shadows = '2px 2px 2px grey';
const board = document.getElementById('pixel-board');
const input = document.getElementById('board-size');
const pixCollection = document.getElementsByClassName('pixel');

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
const createPixels = (n) => {
  board.style.width = `${n * 42}px`;
  board.style.height = `${n * 42}px`;
  for (let i = 1; i <= n ** 2; i += 1) {
    const pixel = document.createElement('span');
    pixel.style.border = '1px solid black';
    pixel.classList.add('pixel');
    board.appendChild(pixel);
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
const paintPixels = () => {
  for (let i = 0; i < pixCollection.length; i += 1) {
    pixCollection[i].addEventListener('click', () => {
      const selected = document.querySelector('.selected');
      const selectedColor = selected.id;
      pixCollection[i].style.backgroundColor = selectedColor;
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

const boardGenerator = () => {
  const buttonGen = document.getElementById('generate-board');

  buttonGen.addEventListener('click', () => {
    const value = parseInt(input.value, 36);
    while (pixCollection.length > 0) {
      board.removeChild(board.lastChild);
    }
    createPixels(value);
    console.log(pixCollection);
    input.value = '';
  });
};
boardGenerator();

window.onload = () => {
  createPalette('black');
  createPalette('red');
  createPalette('green');
  createPalette('blue');
  selectColor();
  createPixels(5);
  paintPixels();
  clearBoard();
};
