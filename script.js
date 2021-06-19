const botaoLimpar = document.getElementById('clear-board');
const generateBoardButton = document.querySelector('#generate-board');
const board = document.querySelector('#pixel-board');
const input = document.querySelector('#board-size');
const colors = document.getElementsByClassName('color');

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', (event) => {
    for (let index2 = 0; index2 < colors.length; index2 += 1) {
      if (colors[index2].classList.contains('selected')) {
        colors[index2].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  });
}

const colorPixel = () => {
  const pixelcolor = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelcolor.length; index += 1) {
    pixelcolor[index].addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      const selectedColor = window.getComputedStyle(selected).backgroundColor;
      event.target.style.backgroundColor = selectedColor;
    });
  }
};
colorPixel();

botaoLimpar.addEventListener('click', () => {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

const removeOldBoard = () => {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
};

const criandoLinhas = (numberOfPixels) => {
  const row = document.createElement('tr');
  numberOfPixels.forEach(() => {
    const col = document.createElement('td');
    col.className = 'pixel';
    row.appendChild(col);
  });
  return row;
};

generateBoardButton.addEventListener('click', () => {
  if (!input.value) {
    window.alert('Board inválido!');
  }
  if (input.value < 5) {
    input.value = 5;
  }
  if (input.value > 50) {
    input.value = 50;
  }
  removeOldBoard();
  input.forEach(() => {
    const row = criandoLinhas(input.value);
    board.appendChild(row);
  });
  colorPixel();
});

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const color = `rgb(${r} ,${g} ,${b})`;
  return color;
};

for (let index = 1; index < colors.length; index += 1) {
  colors[index].style.backgroundColor = generateRandomColor();
}
