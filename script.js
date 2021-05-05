const shadows = '2px 2px 2px grey';

const generateButton = document.getElementById('generate-board')

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
  const board = document.getElementById('pixel-board');
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
  const pixelCollection = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelCollection.length; i += 1) {
    pixelCollection[i].addEventListener('click', () => {
      const selected = document.querySelector('.selected');
      const selectedColor = selected.id;
      pixelCollection[i].style.backgroundColor = selectedColor;
    });
  }
};

const createButton = () => {
  const buttonSpace = document.querySelector('#button-space');
  const button = document.createElement('button');
  button.innerHTML = 'Limpar';
  button.id = 'clear-board';
  buttonSpace.appendChild(button);
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
createButton();

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
