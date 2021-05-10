function grid(pixelLine) {
  const pixels = document.getElementById('pixel-board');
  for (let index = 0; index < pixelLine; index += 1) {
    const createDivLine = document.createElement('tr');
    createDivLine.classList.add('line');
    pixels.appendChild(createDivLine);

    for (let indexcolumn = 0; indexcolumn < pixelLine; indexcolumn += 1) {
      const createDivColumn = document.createElement('td');
      createDivColumn.classList.add('pixel');
      createDivLine.appendChild(createDivColumn);
    }
  }
}
let pixelLine = 5;
grid(pixelLine);

function gridNew() {
  const newGrid = document.getElementById('board-size').value;
  parseInt(newGrid);
  if (newGrid >= 5 && newGrid <= 50) {
    pixelLine = newGrid;
    const tabela = document.getElementById('pixel-board');
    while (tabela.lastElementChild) {
      tabela.removeChild(tabela.lastElementChild);
    }
    grid(pixelLine);
    paintPixel(eventPaint);
  } if(newGrid < 5 && newGrid !== '') {
    alert('Somente número maior que 5 e menor que 50');
    document.getElementById('board-size').value = 5;
  } if (newGrid > 50 && newGrid !== '') {
    alert('Somente número maior que 5 e menor que 50');
    document.getElementById('board-size').value = 50;
  } if (newGrid === ''){
    alert('Board inválido!');
  }
}
let button = document.getElementById('generate-board');
button.addEventListener('click', gridNew);

function colorSelect(event) {
  const select = document.querySelector('.selected');
  select.classList.remove('selected');
  event.target.classList.add('selected');
}

// Achei incrivel o que o Bruno Augusto Claro fez com essa função!
function newColors() {
  const rgb1 = Math.random() * 255;
  const rgb2 = Math.random() * 255;
  const rgb3 = Math.random() * 255;
  return `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
}

const elementColor = document.getElementsByClassName('color');
const colors = ['black', newColors(), newColors(), newColors()];
for (let index = 0; index < elementColor.length; index += 1) {
  elementColor[index].style.backgroundColor = colors[index];
}

for (let index = 0; index < elementColor.length; index += 1) {
  elementColor[index].addEventListener('click', colorSelect);
}

const pixed = document.querySelectorAll('.pixel');
function paintPixel(eventPaint) {
  const paint = document.querySelector('.selected');
  eventPaint.target.style.backgroundColor = paint.style.backgroundColor;
}
for (let indexPixels = 0; indexPixels < pixed.length; indexPixels += 1) {
  pixed[indexPixels].addEventListener('click', paintPixel);
}

function clear() {
  for (let pix = 0; pix < pixed.length; pix += 1) {
    pixed[pix].style.backgroundColor = 'white';
  }
}
const buttonClick = document.getElementById('clear-board');
buttonClick.addEventListener('click', clear);
