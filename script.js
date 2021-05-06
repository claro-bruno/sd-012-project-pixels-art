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
  });
}
selectColor();

function colorBoard() {
  const board = document.querySelector('section');
  board.addEventListener('click', (event) => {
    const colorSelected = document.querySelector('.selected').style.backgroundColor;
    const eventListen = event.target;
    eventListen.style.backgroundColor = colorSelected;
  });
}
colorBoard();

// Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
// capturar o click do botão
const button = document.querySelector('button');
button.addEventListener('click', (event) => {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
});
// capturar os elementos com a classe pixel
// atribuir um bg white
