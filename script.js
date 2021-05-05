// Cria paleta de cores
const captureColorPalette = document.querySelector('#color-palette');

const generateRandomColor = () => {
  let randomR = Math.floor(Math.random()*255);
  let randomG = Math.floor(Math.random()*255);
  let randomB = Math.floor(Math.random()*255);
  let randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  while (randomColor === 'rgb(255, 255, 255)' || randomColor === 'rgb(0, 0, 0)') {
    randomR = Math.floor(Math.random()*255);
    randomG = Math.floor(Math.random()*255);
    randomB = Math.floor(Math.random()*255);
  };
  randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  return randomColor;
};

for (let index = 0; index < 4; index += 1) {
  const newColor = document.createElement('div');
  newColor.className = 'color';
  if (index === 0) {
    newColor.style.backgroundColor = 'black';
  } else {
    newColor.style.backgroundColor = generateRandomColor();
  }
  captureColorPalette.appendChild(newColor);
}

// Cria quadro de pixels
const captureBoardSize = document.querySelector('#board-size');
const captureBoard = document.querySelector('#pixel-board');
captureBoardSize.value = 5;

for (let line = 0; line < captureBoardSize.value; line += 1) {
  const newLine = document.createElement('tr');
  for (let cell = 0; cell < captureBoardSize.value; cell += 1) {
    const newCell = document.createElement('td');
    newCell.className = 'pixel'
    newLine.appendChild(newCell);
  }
  captureBoard.appendChild(newLine);
}

// Seleciona a cor preta como cor inicial
let captureInitialColor = document.querySelector('.color');
captureInitialColor.classList.add('selected');




