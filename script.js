const pixelBoard = document.querySelector('#pixel-board');
const colorsToPick = ['black', 'blueviolet', 'aqua', 'red', 'blue', 'orange', 'green',
  'yellow', 'purple', 'pink',
];
const palette = document.querySelector('#color-palette');
pixelBoard.style.lineHeight = 0;

// Escolhendo uma diferente palheta de cor por f5 sem repetir a cor
function choosingPaletteColor() {
  const colorsToUse = [0];
  do {
    const random = Math.floor(Math.random() * colorsToPick.length);
    if (!colorsToUse.includes(random)) {
      colorsToUse.push(random);
    }
    if (colorsToUse.length === 4) {
      break;
    }
  } while (colorsToUse.length < 4);
  return colorsToUse;
}

// Criando a paleta de cores
function createPalette() {
  const colorsToUse = choosingPaletteColor();
  for (let i = 0; i < 4; i += 1) {
    const paletteDiv = document.createElement('div');
    paletteDiv.classList.add('color');
    if (i === 0) {
      paletteDiv.classList.add('selected');
    }
    paletteDiv.style.backgroundColor = colorsToPick[colorsToUse[i]];
    palette.appendChild(paletteDiv);
  }
}

createPalette();

// Colocar um botão de resetar
const reset = document.createElement('button');
reset.id = 'clear-board';
reset.innerHTML = 'Limpar';
document.body.insertBefore(reset, document.body.children[2]);

function resetBoard(boardPaint) {
  const resetVar = boardPaint;
  for (let i = 0; i < boardPaint.length; i += 1) {
    reset.addEventListener('click', () => {
      resetVar[i].style.backgroundColor = 'white';
    });
  }
}

// Faz a pintura do quadro com a cor selecionada
function startPainting() {
  const boardPaint = document.querySelectorAll('.pixel');
  for (let i = 0; i < boardPaint.length; i += 1) {
    boardPaint[i].addEventListener('click', () => {
      const selected = document.querySelector('.selected');
      boardPaint[i].style.backgroundColor = selected.style.backgroundColor;
    });
  }
  resetBoard(boardPaint);
}

// Adiciona quebra de linha para createBoard
function addNewLine() {
  const br = document.createElement('br');
  pixelBoard.appendChild(br);
}

// Deletar o board antigo caso ja criado para criar um novo.
function alreadyCreated() {
  const sizePixelDelete = document.querySelectorAll('.pixel');
  for (let i = 0; i < sizePixelDelete.length; i += 1) {
    const pixel = document.querySelector('.pixel');
    pixelBoard.removeChild(pixel);
  }
}

// Funcao auxiliar para evitar o lint
function auxiliarCreateBoard(squares) {
  for (let j = 0; j < squares; j += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.backgroundColor = 'white';
    pixelBoard.appendChild(pixel);
  }
  addNewLine();
}

// Cria o Board
function createBoard(squares) {
  const isCreated = document.querySelector('.pixel');
  if (isCreated === null) {
    for (let i = 0; i < squares; i += 1) {
      auxiliarCreateBoard(squares);
    }
  } else {
    alreadyCreated();
    createBoard(squares);
  }
  startPainting();
}

// Criar o board inicial
createBoard(5);

// Adicionar e remover a classe selected da paleta de cores.
const color = document.querySelectorAll('.color');
for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    color[i].classList.add('selected');
  });
}

// Cria e atribui valores ao input
function createInput() {
  const input = document.createElement('input');
  input.type = 'number';
  input.style.width = '40px';
  input.value = 5;
  input.min = 1;
  input.max = 50;
  input.id = 'board-size';
  document.body.insertBefore(input, document.body.children[3]);
}

createInput();

// Cria o botão VQV
function createButtonConfirm() {
  const confirm = document.createElement('button');
  confirm.innerHTML = 'VQV';
  confirm.id = 'generate-board';
  document.body.insertBefore(confirm, document.body.children[4]);
}

createButtonConfirm();

// O que fazer quando o botão for clicado.
const inputValue = document.querySelector('#board-size');
const buttonConfirm = document.querySelector('#generate-board');

buttonConfirm.addEventListener('click', () => {
  if (inputValue.value.length > 0) {
    let linhas = parseInt(inputValue.value, 10);
    if (linhas < 5) {
      linhas = 5;
      inputValue.value = '5';
    } else if (linhas > 50) {
      linhas = 50;
      inputValue.value = '50';
    }
    createBoard(linhas);
  } else {
    alert('Board inválido!');
  }
});
