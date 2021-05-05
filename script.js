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

function selectedColor (event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let indexcolor = 0; indexcolor < colors.length; indexcolor += 1) {
  colors[indexcolor].addEventListener('click', selectedColor);
}
