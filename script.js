let PALETTE_COLOR = ['black', 'green', 'blue', 'orange'];

function addColoPalette() {
  for (let index = 0; index < PALETTE_COLOR.length; index += 1) {
    let colorPalette = document.createElement('div');
    colorPalette.classList.add('color');
    colorPalette.style.backgroundColor = PALETTE_COLOR[index];
    document.querySelector('#color-palette').appendChild(colorPalette);
  }
}

addColoPalette();