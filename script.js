function createColorPaletteDiv(bgColor) {
  const colorPaletteSection = document.getElementById('color-palette');
  const colorPaletteDiv = document.createElement('div');

  colorPaletteDiv.className = 'color';
  colorPaletteDiv.style.backgroundColor = bgColor;

  colorPaletteSection.appendChild(colorPaletteDiv);
}

const paletteColors = ['black', 'blue', 'green', 'yellow'];
for (let index = 0; index < paletteColors.length; index += 1) {
  createColorPaletteDiv(paletteColors[index]);
}
