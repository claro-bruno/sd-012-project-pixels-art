const colorPalette = document.getElementById('color-palette');
const color = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
const pixels = document.getElementsByClassName('pixel');
const clearBtn = document.getElementById('clear-board');
const vqvBtn = document.getElementById('generate-board');
const inputBoardSize = document.getElementById('board-size');
const numberOfColors = 4;
const colorsForPalette = ['black', 'lime', 'aqua', 'deeppink']; // Array com cores para serem adicionadas.
// Cria paleta de cores dinamicamente:
function createPaletteColors(number) {
  for (let index = 0; index < number; index += 1) {
    const elementPalette = document.createElement('div');
    elementPalette.className = 'color';
    colorPalette.appendChild(elementPalette);
  }
}
createPaletteColors(numberOfColors);
// Adiciona Cores dinamicamente a paleta de cores
function addColors(arrColors) {
  for (let index = 0; index < color.length; index += 1) {
    color[index].style.backgroundColor = arrColors[index];
  }
}
addColors(colorsForPalette);
// Cria função que adiciona pixel
function createPixelFrame() {
  const elementBoard = document.createElement('div');
  elementBoard.className = 'pixel';
  pixelBoard.appendChild(elementBoard);
}
// Cria Quadro de pixels
const boardSize = 5;
function createBoard(frameSize) {
  for (let lineIndex = 0; lineIndex < frameSize; lineIndex += 1) {
    for (let index = 0; index < frameSize; index += 1) {
      createPixelFrame();// adiciona linha de pixels
    }
    const lineBreak = document.createElement('br');
    document.getElementById('pixel-board').appendChild(lineBreak);// adiciona quebra de linha
  }
}
createBoard(boardSize);
// Seleciona primeira cor ao carregar pagina
color[0].classList.add('selected');
// Seleciona cor ao clicar e desmarca cor anterior
for (let index = 0; index < color.length; index += 1) {
  const selectedColor = color[index];
  selectedColor.addEventListener('click', () => {
    const lstSelected = document.querySelector('.selected');
    lstSelected.classList.remove('selected');
    selectedColor.classList.add('selected');
  });
}
// Pinta pixel com cor selecionada
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', () => {
    const colorSelected = document.querySelector('.selected');
    if (pixels[index].style.backgroundColor !== colorSelected.style.backgroundColor) {
      pixels[index].style.backgroundColor = colorSelected.style.backgroundColor;
    }
  });
}
// Configura botão Limpar
clearBtn.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});
// Configura interação do usuário com relação ao tamanho do quadro de pixels
vqvBtn.addEventListener('click', () => {
  if (inputBoardSize.value > 4 && inputBoardSize.value < 51) {
    pixelBoard.innerText = '';
    createBoard(inputBoardSize.value);
  } else if (inputBoardSize.value === '') {
    alert('Board inválido!');
  }
});
