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

// Função que criar linha de pixel de forma dinâmica
for (let index = 0; index < 5; index += 1) {
  // criar a divLinha
  const divLine = document.createElement('div');
  divLine.className = 'pixel-line';
  // criar os pixels e copular a divLinha
  for (let index2 = 0; index2 < 5; index2 += 1) {
    const divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    divLine.appendChild(divPixel);
  }
  // copular a section com a divLinha e seus pixels
  const divBoard = document.querySelector('section');
  divBoard.appendChild(divLine);
}
