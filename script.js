const colorPalette = document.querySelector('#color-palette');
const colorArray = ['black', 'red', 'blue', 'pink', 'purple', 'green', 'orange', 'yellow'];

function paletaDeCores(colorNumber, colorArray) {
  
  for (let index = 0; index < colorNumber; index ++) {
    const divColorPalette = document.createElement('div');
    divColorPalette.className = 'color';
    divColorPalette.style.backgroundColor = colorArray[index];
    colorPalette.appendChild(divColorPalette);
  }
};

paletaDeCores(4, colorArray);