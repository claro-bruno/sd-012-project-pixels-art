// array com as cores da paleta
const colors = document.getElementsByClassName('color');

// insere as cores passadas como parametros como background no elementos passados como parametro
function inputColorsPalett(arrayElements, arrayColors) {
  for (let index = 0; index < arrayElements.length; index += 1) {
    console.log(arrayColors[index]);
    arrayElements[index].style.backgroundColor = arrayColors[index];
  }
}

// array com as cores iniciais do padrão RGB
const RGBColors = ['#000000', '#800000', '#008000', '#000080'];

inputColorsPalett(colors, RGBColors);

const pixelBoard = document.getElementById('pixel-board');

function createPixelGrind(lines, colums, fatherElement) {
  for (let index = 0; index < lines; index += 1) {
    const divLine = document.createElement('div');
    divLine.className = 'pixel-line';
    for (let indexCol = 0; indexCol < colums; indexCol += 1) {
      const divColum = document.createElement('div');
      divColum.className = 'pixel';
      divColum.style.backgroundColor = '#ffffff';
      divLine.appendChild(divColum);
    }
    fatherElement.appendChild(divLine);
  }
}

createPixelGrind(5, 5, pixelBoard);
