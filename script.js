const table = document.querySelector('#pixel-board');
const colors = document.querySelectorAll('.color');
const pixels = document.getElementsByClassName('pixel');
const button = document.querySelector('#clear-board');

for (let indexColor = 0; indexColor < colors.length; indexColor += 1) {
  const colorsArray = ['black', 'blue', 'darksalmon', 'darkseagreen'];
  colors[indexColor].style.backgroundColor = colorsArray[indexColor];
}

function createSquares(numberOfLines) {
  for (let index = 0; index < numberOfLines; index += 1) {
    const line = document.createElement('tr');
    line.id = `line ${index}`;
    line.classList.add('line');
    table.appendChild(line);
    for (let index2 = 0; index2 < numberOfLines; index2 += 1) {
      const column = document.createElement('td');
      column.id = `column ${index2}`;
      column.classList.add('pixel');
      line.appendChild(column);
    }
  }
}

createSquares(5);

function changeSelected(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let index3 = 0; index3 < colors.length; index3 += 1) {
  colors[index3].addEventListener('click', changeSelected);
}

function changeColor(event) {
  const selected = document.querySelector('.selected');
  event.target.style.backgroundColor = selected.style.backgroundColor;
}

for (let index4 = 0; index4 < pixels.length; index4 += 1) {
  pixels[index4].addEventListener('click', changeColor);
}

function clear() {
  for (let indexClear = 0; indexClear < pixels.length; indexClear += 1) {
    pixels[indexClear].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', clear);