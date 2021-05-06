const colors = document.getElementsByClassName('color');

function inputColorsPalett(arrayColors) {
  for (let index = 0; index < arrayColors.length; index += 1) {
    colors[index].style.backgroundColor = arrayColors[index];
    if (arrayColors[index] === '#000000') {
      colors[index].classList.add('selected');
    }
  }
}

const RGBColors = ['#000000', '#800000', '#008000', '#000080'];

inputColorsPalett(RGBColors);

const pixelBoard = document.getElementById('pixel-board');

function createPixelGrind(size, fatherElement, lineSize) {
  for (let index = 0; index < size; index += 1) {
    const divLine = document.createElement('div');
    divLine.style.width = lineSize;
    divLine.className = 'pixel-line';
    for (let indexCol = 0; indexCol < size; indexCol += 1) {
      const divColum = document.createElement('div');
      divColum.className = 'pixel';
      divColum.style.backgroundColor = '#ffffff';
      divLine.appendChild(divColum);
    }
    fatherElement.appendChild(divLine);
  }
}

createPixelGrind(5, pixelBoard, '210px');

function switchClass(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

function addEvent(array, callBack, typeEvent) {
  for (let index = 0; index < array.length; index += 1) {
    array[index].addEventListener(typeEvent, callBack);
  }
}

addEvent(colors, switchClass, 'click');

const pixels = document.getElementsByClassName('pixel');

function switchColor(e) {
  const selected = document.querySelector('.selected');
  const color = selected.style.backgroundColor;
  e.target.style.backgroundColor = color;
}

addEvent(pixels, switchColor, 'click');

function cleanPixels() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = '#ffffff';
  }
}

function createBtn(id, text) {
  const btn = document.createElement('button');
  btn.id = id;
  btn.innerHTML = text;
  return btn;
}

const controls = document.getElementById('controls');

const cleanBtn = createBtn('clear-board', 'Limpar');
cleanBtn.addEventListener('click', cleanPixels);
controls.appendChild(cleanBtn);

const inputPixel = document.createElement('input');
inputPixel.type = 'number';
inputPixel.id = 'board-size';
inputPixel.min = 1;
inputPixel.max = 50;
cleanBtn.insertAdjacentElement('afterend', inputPixel);

function generatePixels(event) {
  const size = inputPixel.value;
  if (size < 5 || size > 50 || !size) return alert('Board inválido!');

  const boardSize = 40 * size;
  pixelBoard.style.width = boardSize + 'px';
  pixelBoard.style.height = boardSize + 'px';
  pixelBoard.innerHTML = '';

  const lineSize = boardSize + 50 + 'px';

  createPixelGrind(size, pixelBoard, lineSize);
}

const pixelBtn = createBtn('generate-board', 'VQV');
pixelBtn.addEventListener('click', generatePixels);
inputPixel.insertAdjacentElement('afterend', pixelBtn);
