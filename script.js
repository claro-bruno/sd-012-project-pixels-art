const colors = ['black', 'red', 'blue', 'green'];

function makePalette(arrayColor) {
  for (let index = 0; index < arrayColor.length; index += 1) {
    const divPalette = document.getElementById('color-palette');
    const divColor = document.createElement('div');
    divColor.className = 'color';
    divColor.style.backgroundColor = arrayColor[index];
    divPalette.appendChild(divColor);
  }
}
makePalette(colors);

function makerBoardPixel(size) {
  for (let index = 0; index < size; index += 1) {
    const divLine = document.createElement('div');
    divLine.className = 'pixel-line';
    for (let index2 = 0; index2 < size; index2 += 1) {
      const divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      divLine.appendChild(divPixel);
    }
    const divBoard = document.querySelector('section');
    divBoard.appendChild(divLine);
  }
}
makerBoardPixel(5);

function selectFirstColor() {
  const firstColor = document.querySelector('#color-palette').firstChild;
  firstColor.classList.add('selected');
}
selectFirstColor();

function selectColor() {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', (event) => {
    if (event.target.className === 'color') {
      const colorSelected = document.querySelector('.selected');
      colorSelected.classList.remove('selected');
      event.target.classList.add('selected');
    }
  })
}
selectColor();

// Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
// colocar uma escuta na board completa (section)
const board = document.querySelector('section')
board.addEventListener('click', (event) => {
  // capturar o elemento com a classe select
  const colorSelected = document.querySelector('.selected')
  // salvar o background colo do elemento em uma variável
  colorSelected.style.backgroundColor
  // Capturar o elemento via target
  event.target.style.backgroundColor = colorSelected.style.backgroundColor;
  // aplicar o background color capturado ao elemento clicado
})

