const shadows = '2px 2px 2px grey';

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

  for (let i = 1; i <= n; i += 1) {
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

window.onload = () => {
  createPalette('black');
  createPalette('red');
  createPalette('green');
  createPalette('blue');
  selectColor();
  createPixels(25);
  paintPixels();
};
