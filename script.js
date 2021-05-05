console.log('Conectado');

const colorClass = document.getElementsByClassName('color');
for (let index = 0; index < colorClass.length; index += 1) {
  colorClass[index].addEventListener('click', function (event) {
    for (let index2 = 0; index2 < colorClass.length; index2 += 1) {
      if (colorClass[index2].classList.contains('selected')) {
        colorClass[index2].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  });
};

colorPixel();

function colorPixel() {
  let pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function (event) {
      let selected = document.querySelector('.selected');
      let selectedColor = window.getComputedStyle(selected).backgroundColor;
      event.target.style.backgroundColor = selectedColor;
    });
  };
};

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', function () {
  let pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  };
});

const board = document.querySelector('#pixel-board');
const input = document.querySelector('#board-size');
const generateBoardButton = document.querySelector('#generate-board');
generateBoardButton.addEventListener('click', function () {
  if (!input.value) {
    alert("Board inválido!");
  }
  if (input.value < 5) {
    input.value = 5;
  }
  if (input.value > 50) {
    input.value = 50;
  }
  removeOldBoard();
  for (let index = 0; index < input.value; index += 1) {
    let row = createLine(input.value);
    board.appendChild(row);
  };
  colorPixel();
});

let colors = [];
function generateColorsArray(numberOfColors) {
  for (let index = 0; index < numberOfColors; index += 1) {
    let color = generateRandomColor();
    colors.push(color);
  };
};

function generateRandomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  console.log(r, g, b);
  let color = `rgb(${r} ,${g} ,${b})`;
  return color;
};

generateColorsArray(3);

function createLine(numberOfPixels) {
  let row = document.createElement('tr');
  for (let index = 0; index < numberOfPixels; index += 1) {
    let col = document.createElement('td');
    col.className = 'pixel';
    row.appendChild(col);
  }
  return row;
}

function removeOldBoard() {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  };
};
