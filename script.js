// Cria paleta de cores dinamicamente:
const numberOfColors = 4;
function createPaletteColors(number) {
  for (let index = 0; index < number; index += 1) {
    const palette = document.getElementById('color-palette');
    const elementPalette = document.createElement('div');
    elementPalette.className = 'color';
    palette.appendChild(elementPalette);
  }
}
createPaletteColors(numberOfColors);
// Adiciona Cores dinamicamente a paleta de cores:
const colorsForPalette = ['black', 'lime', 'aqua', 'deeppink']; // Array com cores para serem adicionadas.
function addColors(arrColors) {
  const colorPalette = document.getElementsByClassName('color');
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].style.backgroundColor = arrColors[index];
  }
}
addColors(colorsForPalette);
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
window.onload = function selectFirstColor() {
  const firstColor = document.querySelector('.color');
  firstColor.classList.add('selected');
};
// Seleciona cor ao clicar e desmarca cor anterior
const paletteColor = document.getElementsByClassName('color');
for (let index = 0; index < paletteColor.length; index += 1) {
  const selectedColor = paletteColor[index];
  selectedColor.addEventListener('click', () => {
    const lstSelected = document.querySelector('.selected');
    lstSelected.classList.remove('selected');
    selectedColor.classList.add('selected');
  });
}
// Pinta pixel com cor selecionada
const boardPixels = document.getElementsByClassName('pixel');
for (let index = 0; index < boardPixels.length; index += 1) {
  boardPixels[index].addEventListener('click', () => {
    const colorSelected = document.querySelector('.selected');
    if (boardPixels[index].style.backgroundColor !== colorSelected.style.backgroundColor) {
      boardPixels[index].style.backgroundColor = colorSelected.style.backgroundColor;
    }
  });
}
