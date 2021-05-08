function makePallete(colors) {
  for (let index = 0; index < colors; index += 1) {
    const pallete = document.getElementById('color-palette');
    const palletSlot = document.createElement('div');
    palletSlot.className = 'color';
    pallete.appendChild(palletSlot);
  }
}
makePallete(4);

const colors = ['black', 'red', 'silver', 'gold'];
function paintPallete(painting) {
  const fillPallet = document.getElementsByClassName('color');
  for (let index = 0; index < fillPallet.length; index += 1) {
    fillPallet[index].style.backgroundColor = painting[index];
  }
}
paintPallete(colors);

function makeColumn() {
  const board = document.querySelector('#pixel-board');
  const pixel = document.createElement('div');
  pixel.className = ('pixel');
  pixel.style.display = 'table-column';
  board.appendChild(pixel);
}
function makeLine() {
  const board = document.querySelector('#pixel-board');
  const pixel = document.createElement('div');
  pixel.className = ('pixel');
  pixel.style.display = 'table-cell';
  board.appendChild(pixel);
}
const boardColumn = 5;
const lineBoard = 5;

for (let index = 0; index < boardColumn; index += 1) {
  makeColumn();
  for (let index = 0; index < lineBoard; index += 1) {
    makeLine();
  }
}
