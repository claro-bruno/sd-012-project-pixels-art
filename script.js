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

// Função que criar paleta de cores de forma dinâmica
// function createPalette(size) {
//   // 1. Capturar o elemento pai
//   const divPalette = document.getElementById('color-palette');
//   // 2. Cria um laço de repetição para adicionar 'size' divs dentro do Elemento pai
//   for (let index = 0; index < size; index += 1) {
//     const divColor = document.createElement('div');
//     divColor.className = 'color';
//     divPalette.appendChild(divColor);
//   }
// }
// createPalette(4);

// let divLine = document.createElement('div');
// divLine.className = 'divLine';

// let script = document.querySelector('script');

// let body = document.querySelector('body');
// body.insertBefore(divLine, script);

// divPalette.insertAdjacentElement('afterend', divLine)
