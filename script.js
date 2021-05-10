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

const divLine = document.createElement('div');
for (let index = 0; index < 5; index += 1) {
  const divPixel = document.createElement('div');
  divPixel.className = 'pixel';
  
  divLine.className = 'line';
  divLine.appendChild(divPixel);

}


const divBoard = document.querySelector('#pixel-board');

divBoard.appendChild(divLine);

console.log(divBoard);

/*
1 - Criar cinco div.
2 - Criar uma classe para nossa cinco div.
3 - Fazer a nossa as nossas divs serem filhas do nosso pixel board.
4 - Criar for para repetir isso cinco vezes.
*/