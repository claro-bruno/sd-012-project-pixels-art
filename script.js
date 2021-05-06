const colorClass = document.getElementsByClassName('color');
const clearButton = document.getElementById('clear-board');
const board = document.querySelector('#pixel-board');
const input = document.querySelector('#board-size');
const generateBoardButton = document.querySelector('#generate-board');

function colorPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      const selectedColor = window.getComputedStyle(selected).backgroundColor;
      const targ = event.target;
      targ.style.backgroundColor = selectedColor;
    });
  }
}

function generateRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const color = `rgb(${r} ,${g} ,${b})`;
  return color;
}

function createLine(numberOfPixels) {
  const row = document.createElement('tr');
  for (let index = 0; index < numberOfPixels; index += 1) {
    const col = document.createElement('td');
    col.className = 'pixel';
    row.appendChild(col);
  }
  return row;
}

function removeOldBoard() {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

colorPixel();

for (let index = 1; index < colorClass.length; index += 1) {
  colorClass[index].style.backgroundColor = generateRandomColor();
}

for (let index = 0; index < colorClass.length; index += 1) {
  colorClass[index].addEventListener('click', (event) => {
    for (let index2 = 0; index2 < colorClass.length; index2 += 1) {
      if (colorClass[index2].classList.contains('selected')) {
        colorClass[index2].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  });
}

clearButton.addEventListener('click', () => {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

generateBoardButton.addEventListener('click', () => {
  if (!input.value) {
    alert('Board inválido!');
  }
  if (input.value < 5) {
    input.value = 5;
  }
  if (input.value > 50) {
    input.value = 50;
  }
  removeOldBoard();
  for (let index = 0; index < input.value; index += 1) {
    const row = createLine(input.value);
    board.appendChild(row);
  }
  colorPixel();
});
