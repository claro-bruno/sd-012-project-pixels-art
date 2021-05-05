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
}