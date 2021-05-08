const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
const input = document.getElementById('board-size');
let n = 5;

// gera cor aleatoria

function gerarCor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r},${g},${b})`;
}

const one = gerarCor();
const two = gerarCor();
const three = gerarCor();

// inicializa a primeira cor com preto
function gerarBlack() {
  const div = document.createElement('div');
  div.className = 'color selected';
  colorPalette.appendChild(div);
}

// gera paleta
function gerarPaleta() {
  for (let i = 0; i < 3; i += 1) {
    const div = document.createElement('div');
    div.className = 'color';
    colorPalette.appendChild(div);
  }
}

gerarBlack();
gerarPaleta();

document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = one;
document.getElementsByClassName('color')[2].style.backgroundColor = two;
document.getElementsByClassName('color')[3].style.backgroundColor = three;

// seleciona cor da paleta

function select(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}

document.getElementsByClassName('color')[0].addEventListener('click', select);
document.getElementsByClassName('color')[1].addEventListener('click', select);
document.getElementsByClassName('color')[2].addEventListener('click', select);
document.getElementsByClassName('color')[3].addEventListener('click', select);

// cria a board

function board() {

  pixelBoard.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  for (let i = 0; i < n ** 2; i += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    pixelBoard.appendChild(div);
  }

  function paint(event) {
    const color = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = color;
  }
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', paint);
  }
}

function changeBoard() {
  const elements = document.getElementsByClassName('pixel');
  while (elements.length > 0) elements[0].remove();
  n = input.value;

  if (!parseInt(n, 10)) {
    alert('Board inválido!');
    n = 5;
  }
  else if (n < 5) {
    n = 5;
  } else if (n > 50) {
    n = 50;
  }
  pixelBoard.style.gridTemplateColumns = `repeat(${n}, 1fr)`;

  for (let i = 0; i < n ** 2; i += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    pixelBoard.appendChild(div);
  }

  function paint(event) {
    const color = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = color;
  }
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', paint);
  }
}
board();
document.getElementById('generate-board').addEventListener('click', changeBoard);

function apaga() {
  const pixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

const botao = document.getElementById('clear-board');
botao.addEventListener('click', apaga);
