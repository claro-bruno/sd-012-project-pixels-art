window.onload = () => {
  const createPalette = (color) => {
    const palette = document.getElementById('color-palette');
    const colorSquare = document.createElement('span');
    colorSquare.style.backgroundColor = color;
    colorSquare.classList.add('color');
    colorSquare.id = color;
    palette.appendChild(colorSquare);

    if (color === 'black') {
      colorSquare.classList.add('selected');
      colorSquare.style.boxShadow = '2px 2px 2px grey';
    }
  };
  createPalette('black');
  createPalette('red');
  createPalette('green');
  createPalette('blue');
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
createPixels(25);
