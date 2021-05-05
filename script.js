const pixelBoard = document.querySelector('#pixel-board');
const colorsToPick = ['black', 'blue', 'yellow', 'red'];
const palette = document.querySelector('#color-palette');

// Criando a paleta de cores
function createPalette() {
  for (let i = 0; i < 4; i += 1) {
    const paletteDiv = document.createElement('div');
    paletteDiv.classList.add('color');
    if (i === 0) {
      paletteDiv.classList.add('selected');
    }
    paletteDiv.style.backgroundColor = colorsToPick[i];
    palette.appendChild(paletteDiv);
  }
}

createPalette();

// Adiciona quebra de linha para createBoard
function addNewLine(j) {
  if (j === 4) {
    const br = document.createElement('br');
    pixelBoard.appendChild(br);
  }
}

// Cria o Board
function createBoard() {
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelBoard.appendChild(pixel);
      addNewLine(j);
    }
  }
}

createBoard();

// Adicionar e remover a classe selected da paleta de cores.
const color = document.querySelectorAll('.color');
for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    color[i].classList.add('selected');
  });
}

// Faz a pintura do quadro com a cor selecionada
const boardPaint = document.querySelectorAll('.pixel');
for (let i = 0; i < boardPaint.length; i += 1) {
  boardPaint[i].addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    boardPaint[i].style.backgroundColor = selected.style.backgroundColor;
  });
}
