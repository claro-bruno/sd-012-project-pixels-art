// Função que criar paleta de cores de forma dinâmica
function createPalette(size) {
  // 1. Capturar o elemento pai
  const divPalette = document.getElementById('color-palette');
  // 2. Cria um laço de repetição para adicionar 'size' divs dentro do Elemento pai
  for (let index = 0; index < size; index += 1) {
    const divColor = document.createElement('div');
    divColor.className = 'color';
    divPalette.appendChild(divColor);
  }
}
createPalette(4);

// Função que pinta a paleta de cores a partir de um array de cores
let arrayColor = ['black', 'red', 'blue', 'green'];
// capturar o elemento pai em forma de array
const divPalette = document.querySelectorAll('#color-palette')[0].children;
console.log(divPalette);
// pegar o primeiro filho do elemento pai
// atribuir uma id a esse elemento
// atribuir a primeira cor do array como id

function setColorPalette(arrayColor) {

}





let divLine = document.createElement('div');
divLine.className = 'divLine';


let script = document.querySelector('script');

let body = document.querySelector('body');
body.insertBefore(divLine, script);

// divPalette.insertAdjacentElement('afterend', divLine)

