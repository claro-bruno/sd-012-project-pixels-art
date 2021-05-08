for (let index = 0; index < 4; index += 1) {
  const divColor = document.createElement('div');
  divColor.className = 'color';
  const colorPalette = document.getElementById('color-palette');

  colorPalette.appendChild(divColor);
}
