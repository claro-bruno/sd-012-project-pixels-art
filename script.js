// Criando Box Pixels

const pixelBox = document.querySelector('#pixel-board');


// Gerando cores do Palette
const colorsOne = document.querySelector('#palette-one');
colorsOne.style.backgroundColor = 'black';
const colorsTwo = document.querySelector('#palette-two');
colorsTwo.style.backgroundColor = 'green';
const colorsThree = document.querySelector('#palette-three');
colorsThree.style.backgroundColor = 'orange';
const colorsFour = document.querySelector('#palette-four');
colorsFour.style.backgroundColor = 'purple';
// <==
// Gera as Colunas
function createCollumns(row, colunas) {
  for (let column = 1; column <= colunas; column += 1) {
    const divColumn = document.createElement('div');
    divColumn.classList.add('pixel');
    row.appendChild(divColumn);
  }
}
// Gera as linhas
function createBoardRows(lines) {
  for (let row = 1; row <= lines; row += 1) {
    const divRow = document.createElement('div');
    divRow.classList.add('tr');
    pixelBox.appendChild(divRow);
    createCollumns(divRow, lines);
  }
}

createBoardRows(5);

const paletteColor = document.querySelectorAll('.color');
const paletteBlack = paletteColor[0];
const paletteTwo = paletteColor[1];
const paletteThree = paletteColor[2];
const paletteFour = paletteColor[3];
paletteBlack.classList.add('selected');

function pinColor(event) {
  const currentSelectedColor = document.querySelector('.color.selected');
  currentSelectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}


paletteBlack.addEventListener('click', pinColor);
paletteTwo.addEventListener('click', pinColor);
paletteThree.addEventListener('click', pinColor);
paletteFour.addEventListener('click', pinColor);

// Seleciona e adiciona cor
function coloring(event) {
  const selectedColor = document.querySelector('.selected');
  const colorOf = window.getComputedStyle(selectedColor);
  event.target.style.backgroundColor = colorOf.getPropertyValue('background-color');
}
const clickedPixel = document.querySelectorAll('.pixel');
for (let index = 0; index < clickedPixel.length; index += 1) {
  clickedPixel[index].addEventListener('click', coloring);
}
// <==
const clear = document.querySelector('#clear-board');
clear.addEventListener('click', function () {
  const colorPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < colorPixel.length; index += 1) {
    colorPixel[index].style.backgroundColor = 'white';
  }
});
