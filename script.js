const arrayColor = ['black', 'yellow', 'red', 'green'];

function createPalette(arrColor) {
  for (let index = 0; index < arrColor.length; index += 1) {
    const divColor = document.createElement('div');
    divColor.className = 'color';
    divColor.style.backgroundColor = arrColor[index];
    const colorPalette = document.getElementById('color-palette');

    colorPalette.appendChild(divColor);
  }
}
createPalette(arrayColor);

function createBoard(size) {
  for (let index = 0; index < size; index += 1) {
    const divLine = document.createElement('div');
    for (let index2 = 0; index2 < size; index2 += 1) {
      const divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      divLine.className = 'line';
      divLine.appendChild(divPixel);
    }
    const divBoard = document.querySelector('#pixel-board');
    divBoard.appendChild(divLine);
  }
}
createBoard(5);

const firstColor = document.getElementById('color-palette').firstElementChild;

firstColor.classList.add('selected');

console.log(firstColor);

/* 

1 - Capturar o Elemento da Cor Preta.
1.1 - Capturar o primeiro filho elemento que tem classe color palette.
2 - Criar uma classe.
3 - Apenas que tem classe color que pode receber a classe select.

*/