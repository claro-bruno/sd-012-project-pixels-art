// Cria paleta de cores dinamicamente:
const numberOfColors = 4;
function createPalleteColors(number) {
  for (let index = 0; index < number; index += 1) {
    const pallete = document.getElementById('color-palette');
    const elementPallete = document.createElement('div');
    elementPallete.className = 'color';
    pallete.appendChild(elementPallete);
  }
}
createPalleteColors(numberOfColors);
// Adiciona Cores dinamicamente a paleta de cores:
const paletteColors = ['black', 'lime', 'aqua', 'deeppink']; // Array com cores para serem adicionadas.
function addColors(arrColors) {
  const colorPallete = document.getElementsByClassName('color');
  for (let index = 0; index < colorPallete.length; index += 1) {
    colorPallete[index].style.backgroundColor = arrColors[index];
  }
}
addColors(paletteColors);
// Cria função que adiciona pixel
function createPixelFrame() {
  const board = document.getElementById('pixel-board');
  const elementBoard = document.createElement('div');
  elementBoard.className = 'pixel';
  board.appendChild(elementBoard);
}
// Cria Quadro de pixels
const pixelBoardBase = 5;
for (let lineIndex = 0; lineIndex < pixelBoardBase; lineIndex += 1) {
  for (let index = 0; index < pixelBoardBase; index += 1) {
    createPixelFrame();
  }
  const lineBreak = document.createElement('br');
  document.getElementById('pixel-board').appendChild(lineBreak);
}
