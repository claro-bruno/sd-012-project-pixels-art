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

function createPixelBoard(line, column) {
  for (let lineIndex = 0; lineIndex < line; lineIndex += 1) {
    let linePixel = document.createElement('div');
    linePixel.classList.add('line');
    document.querySelector('#pixel-board').appendChild(linePixel);
    for (let columnPixel = 0; columnPixel < column; columnPixel += 1){
      let element = document.querySelectorAll('.line');
      addPixel(element[lineIndex]);
    }
  }
}

function addPixel(element) {
  let pixel = document.createElement('div');
  pixel.classList.add('pixel');
  element.appendChild(pixel);
}

createPixelBoard(5,5);