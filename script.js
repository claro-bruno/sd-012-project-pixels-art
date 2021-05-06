const quadroPai = document.getElementById('pixel-board');

const board = 5;

for (let index = 0; index < board; index += 1) {
  const newLine = document.createElement('tr');
  newLine.classList.add('line');
  quadroPai.appendChild(newLine);

  for (let columns = 0; columns < board; columns += 1) {
    const newColumn = document.createElement('td');
    newColumn.classList.add('pixel');
    newLine.appendChild(newColumn);
  }
}
// Exercício feito com auxílio do colega Rodrigo Facury.

const colors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');

function selectedColor(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let indexcolor = 0; indexcolor < colors.length; indexcolor += 1) {
  colors[indexcolor].addEventListener('click', selectedColor);
}

const cor1 = document.getElementById('color1').style.backgroundColor = 'black';
const cor2 = document.getElementById('color2').style.backgroundColor = 'rgb(255, 205, 31)';
const cor3 = document.getElementById('color3').style.backgroundColor = 'rgb(56, 255, 224)';
const cor4 = document.getElementById('color4').style.backgroundColor = 'rgb(254, 5, 255)';

function colorPixel (event) {
  const pixelBackground = document.querySelector('.selected');
  event.target.style.backgroundColor = pixelBackground.style.backgroundColor;
}

for (indexPixels = 0; indexPixels < pixels.length; indexPixels += 1) {
  pixels[indexPixels].addEventListener('click', colorPixel);
}
