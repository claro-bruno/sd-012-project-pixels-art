const table = document.querySelector('#pixel-board');
const colors = document.querySelectorAll('.color');
const pixels = document.getElementsByClassName('pixel');
const button = document.querySelector('#clear-board');
const input = document.querySelector('#board-size');
const generateBoard = document.querySelector('#generate-board');

for (let indexColor = 0; indexColor < colors.length; indexColor += 1) {
  const colorsArray = ['black', 'blue', 'darksalmon', 'darkseagreen'];
  colors[indexColor].style.backgroundColor = colorsArray[indexColor];
}

function changeColor(event) {
  const selected = document.querySelector('.selected');
  const target = event.target;
  target.style.backgroundColor = selected.style.backgroundColor;
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
      column.addEventListener('click', changeColor);
      line.appendChild(column);
    }
  }
}

createSquares(5);

function changeBoard() {
  const tr = document.getElementsByTagName('tr');
  for (let destroy = tr.length - 1; destroy >= 0; destroy -= 1) {
    table.removeChild(tr[destroy]);
  }

  let value = parseInt(input.value);

  if (value >= 5 && value <= 50) {
    createSquares(value);
  } else if (value < 1) {
    alert('Board inválido!');
  } else if (value < 5 && value >= 1) {
    value = 5;
    createSquares(value);
  } else if (value > 50) {
    value = 50;
    createSquares(value);
  } 
}

generateBoard.addEventListener('click', changeBoard);

function changeSelected(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let index3 = 0; index3 < colors.length; index3 += 1) {
  colors[index3].addEventListener('click', changeSelected);
}

function clear() {
  for (let indexClear = 0; indexClear < pixels.length; indexClear += 1) {
    pixels[indexClear].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', clear);
