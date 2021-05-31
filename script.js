function getColorSelected() {
  const select = document.getElementsByClassName('selected')[0];
  const bgColor = select.style.backgroundColor;
  return bgColor;
}

function clear() {
  const board = document.getElementsByClassName('pixel');
  for (let boardClear = 0; boardClear < board.length; boardClear += 1) {
    board[boardClear].style.backgroundColor = 'white';
  }
}

function paint(event) {
  const cor = event;
  if (event.style.backgroundColor === getColorSelected()) {
    cor.style.backgroundColor = 'white';
  } else {
    cor.style.backgroundColor = getColorSelected();
  }
}

function mudaSelecter(bt) {
  const remov = document.querySelector('.selected');
  remov.classList.remove('selected');
  const button = bt;
  button.target.className = ('color selected');
}

function pixelzin(div) {
  if (div < 19) {
    return 200 / div;
  }
  return 11;
}

function colunas(pixelLine, colom) {
  for (let coluna = 0; coluna < colom; coluna += 1) {
    const pixelChild = document.createElement('div');
    pixelChild.className = 'pixel';
    pixelChild.style.backgroundColor = 'white';
    pixelChild.style.width = `${pixelzin(colom)}px`;
    pixelChild.style.height = `${pixelzin(colom)}px`;
    pixelLine.appendChild(pixelChild);
  }
}

function lines(line, pixelFather) {
  for (let linha = 0; linha < line; linha += 1) {
    const pixelChild = document.createElement('div');
    pixelFather.appendChild(pixelChild);
    pixelChild.className = 'line';
    pixelChild.style.height = `${pixelzin(line)}px`;
    colunas(pixelChild, line);
  }
}

function createColor(square) {
  const algo = square;
  const array = [0];
  for (let index = 0; index < 9; index += 1) {
    array.push(Math.round(Math.random() * 255));
  }
  const cor = {
    0: 'black',
    1: `rgb(${array[1]},${array[2]},${array[3]})`,
    2: `rgb(${array[4]},${array[5]},${array[6]})`,
    3: `rgb(${array[7]},${array[8]},${array[9]})`,
  };
  for (let index = 0; index <= 3; index += 1) {
    algo[index].style.backgroundColor = cor[index];
  }
}

const boardChande = (test) => {
  const father = document.getElementById('pixel-board');
  while (father.firstChild) {
    father.removeChild(father.firstChild);
  }
  lines(test, father);
};

function changeSize(test) {
  if (test > 4 && test < 51) {
    boardChande(test);
  } else {
    if (test > 50) {
      changeSize(50);
      return null;
    }
    changeSize(5);
  }
}

function testIn(test) {
  if (test === '') {
    alert('Board inválido!');
  } else {
    changeSize(parseInt(test, 10));
  }
}

window.onload = function main() {
  const line = 5;
  const square = document.getElementsByClassName('color');
  const pixelFather = document.getElementById('pixel-board');
  const clean = document.getElementById('clear-board');
  const mudaTamanho = document.getElementById('generate-board');

  createColor(square);
  lines(line, pixelFather);

  clean.addEventListener('click', clear);

  for (let evento = 0; evento < square.length; evento += 1) {
    square[evento].addEventListener('click', mudaSelecter);
  }
  mudaTamanho.addEventListener('click', () => {
    const test = document.getElementById('board-size').value;
    testIn(test);
  });
};

document.addEventListener('click', (event) => {
  if (event.target.className === 'pixel') {
    const eventBgColor = event.target;
    paint(eventBgColor);
  }
});
