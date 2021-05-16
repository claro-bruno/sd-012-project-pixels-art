// cria paleta
const pixel = document.querySelectorAll('.pixel');
function makePallete(colors) {
  for (let index = 0; index < colors; index += 1) {
    const pallete = document.getElementById('color-palette');
    const palletSlot = document.createElement('div');
    palletSlot.className = 'color';
    pallete.appendChild(palletSlot);
  }
}
makePallete(4);
// colore paleta aleatoriamente
function paintPallete() {
  const fillPallet = document.getElementsByClassName('color');
  fillPallet[0].style.backgroundColor = 'black';
  for (let index = 1; index < fillPallet.length; index += 1) {
    const Red = Math.floor(Math.random() * 256);
    const Green = Math.floor(Math.random() * 256);
    const Blue = Math.floor(Math.random() * 256);
    const RGB = `rgb(${Red}, ${Green}, ${Blue})`;
    fillPallet[index].style.backgroundColor = RGB;
  }
}
paintPallete();
// cria planilha de pixels dinamica
const board = document.querySelector('#pixel-board');
function makeBoard(tamanho = 5) {
  for (let index = 0; index < tamanho; index += 1) {
    for (let index1 = 0; index1 < tamanho; index1 += 1) {
      const square = document.createElement('div');
      square.className = ('pixel');
      board.appendChild(square);
    }
    const br = document.createElement('br');
    board.appendChild(br);
  }
}
makeBoard();

function makeBoardAux() {
  const input = document.querySelector('input');
  if (input.value > 18) {
    board.style.margin = 0;
  } else {
    board.style.marginLeft = '40%';
  }
  if (input.value < 5) {
    input.value = 5;
  } else if (input.value > 50) {
    input.value = 50;
  }
  makeBoard(input.value);
}
// adiciona classe selected
window.onload = function () {
  const selectedColor = document.querySelector('.color');
  selectedColor.classList.add('selected');
};
// Adiciona troca de cor selecionada por clique
const replaceSelected = document.querySelector('#color-palette');
function addSelected(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}
replaceSelected.addEventListener('click', addSelected);

// Seleciona cor para pintar pixels
function paintPixel(event) {
  const painter = document.querySelector('.selected');
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = painter.style.backgroundColor;
  }
}
board.addEventListener('click', paintPixel);

// Cria botão que limpa a pagina
const button = document.querySelector('#clear-board');
function clearBoard() {
  const newPixel = document.querySelectorAll('.pixel');
  for (let cleaner = 0; cleaner < newPixel.length; cleaner += 1) {
    newPixel[cleaner].style.backgroundColor = 'white';
  }
}
button.addEventListener('click', clearBoard);

// Define o que o input pode receber
const buttonRange = document.querySelector('#generate-board');

function boardConfer() {
  const input = document.querySelector('#board-size');
  if (input.value === '') {
    alert('Board inválido!');
  }
}

buttonRange.addEventListener('click', boardConfer);

function removeBoard() {
  const input = document.querySelector('#board-size');
  const sizePixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < sizePixel.length; index += 1) {
    const opa = document.querySelector('.pixel');
    board.removeChild(opa);
  }
  makeBoardAux();
}

buttonRange.addEventListener('click', removeBoard);
