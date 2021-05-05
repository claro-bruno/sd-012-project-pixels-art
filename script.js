// array com os elementos das cores da paleta
const colors = document.getElementsByClassName('color');

// insere as cores passadas como parametros como background no elementos passados como parametro
function inputColorsPalett(arrayColors) {
  for (let index = 0; index < arrayColors.length; index += 1) {
    colors[index].style.backgroundColor = arrayColors[index];
    if (arrayColors[index] === '#000000') {
      colors[index].classList.add('selected');
    }
  }
}

// array com as cores iniciais do padrão RGB
const RGBColors = ['#000000', '#800000', '#008000', '#000080'];

inputColorsPalett(RGBColors);

// elemetos pai do quadro de pixels
const pixelBoard = document.getElementById('pixel-board');

// cria a quantidade de linha com a quantidade de elementos passados por paramentros e insere no
// elemento pai também passado por parametro
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

// remove a selected e adiciona no item selecionado
function switchClass(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

// adiciona evento para elementos do array de elementos passado por parametro
function addEvent(array, callBack, typeEvent) {
  for (let index = 0; index < array.length; index += 1) {
    array[index].addEventListener(typeEvent, callBack);
  }
}

addEvent(colors, switchClass, 'click');

// array com todos os elementos com a classe pixels
const pixels = document.getElementsByClassName('pixel');

// troca cor do elemento pixel pela cor selecionada
function switchColor(e) {
  const selected = document.querySelector('.selected');
  const color = selected.style.backgroundColor;
  e.target.style.backgroundColor = color;
}

addEvent(pixels, switchColor, 'click');

function cleanPixels() {
  for (let index = 0; index < pixels.length; index += 1)
    [(pixels[index].style.backgroundColor = '#ffffff')];
}

const cleanBtn = document.createElement('button');
cleanBtn.id = 'clear-board';
cleanBtn.innerHTML = 'Limpar';

cleanBtn.addEventListener('click', cleanPixels);

const colorPallet = document.getElementById('color-palette');
colorPallet.insertAdjacentElement('afterend', cleanBtn);
