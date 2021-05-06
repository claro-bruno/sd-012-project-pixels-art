const colorPalette = document.getElementById('color-palette');
const color = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
const pixels = document.getElementsByClassName('pixel');
const clearBtn = document.getElementById('clear-board');
const vqvBtn = document.getElementById('generate-board');
const inputBoardSize = document.getElementById('board-size');
const numberOfColors = 4;
// Gera cores aleatórias - baseado no exemplo do site https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript#:~:text=Gerando%20cores%20hexadecimais%20com%20Javascript&text=Multiplicamos%20Math.,o%20valor%20n%C3%BAmerico%20para%20hexadecimal.
function colorGenerator(number) {
  const arrayColors = ['black'];
  for (let index = 1; index < number; index += 1) {
    const colorR = Math.random() * 255;
    const colorG = Math.random() * 255;
    const colorB = Math.random() * 255;
    const opacidade = 1;
    arrayColors.push(`rgba(${colorR}, ${colorG}, ${colorB}, ${opacidade})`);
  }
  return arrayColors;
}
const colorsForPalette = colorGenerator(numberOfColors); // Array com cores para serem adicionadas.
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
  elementBoard.style.backgroundColor = 'white';
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
const newColor = document.getElementsByClassName('color');
newColor[0].classList.add('selected');
// Seleciona cor ao clicar e desmarca cor anterior
for (let index = 0; index < newColor.length; index += 1) {
  const selectedColor = newColor[index];
  selectedColor.addEventListener('click', () => {
    const lstSelected = document.querySelector('.selected');
    lstSelected.classList.remove('selected');
    selectedColor.classList.add('selected');
  });
}
// Pinta pixel com cor selecionada
function paintPixel() {
  const newPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < newPixel.length; index += 1) {
    newPixel[index].addEventListener('click', () => {
      const colorSelected = document.querySelector('.selected');
      if (newPixel[index].style.backgroundColor !== colorSelected.style.backgroundColor) {
        newPixel[index].style.backgroundColor = colorSelected.style.backgroundColor;
      }
    });
  }
}
paintPixel();
// Configura botão Limpar
clearBtn.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});
// Configura interação do usuário com relação ao tamanho do quadro de pixels
// Configura função se input (< 5 = 5) ou (> 50 = 50)
function fiveOrFifty() {
  if (inputBoardSize.value < 5) {
    pixelBoard.innerText = '';
    createBoard(5);
  } else if (inputBoardSize.value > 50) {
    pixelBoard.innerText = '';
    createBoard(50);
  }
}
vqvBtn.addEventListener('click', () => {
  if (inputBoardSize.value >= 5 && inputBoardSize.value <= 50) {
    pixelBoard.innerText = '';
    createBoard(inputBoardSize.value);
  } else if (inputBoardSize.value === '') {
    alert('Board inválido!');
  } else {
    fiveOrFifty();
  }
  paintPixel();
});
