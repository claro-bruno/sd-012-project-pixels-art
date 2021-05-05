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
const pixelBoardLine = 5;
const pixelBoardColum = pixelBoardLine;
for (let lineIndex = 0; lineIndex < pixelBoardLine; lineIndex += 1) {
  for (let index = 0; index < pixelBoardColum; index += 1) {
    createPixelFrame();// adiciona linha de pixels
  }
  const lineBreak = document.createElement('br');
  document.getElementById('pixel-board').appendChild(lineBreak);// adiciona quebra de linha
}
// Seleciona primeira cor ao carregar pagina
window.onload = function () {
  const firstColor = document.querySelector('.color');
  firstColor.classList.add('selected');
};
