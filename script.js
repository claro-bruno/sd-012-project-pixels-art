const pixelBoard = document.getElementById('pixel-board');
const preto = document.getElementById('preta');
const azulClaro = document.getElementById('azul-claro');
const azulEscuro = document.getElementById('azul-escuro');
const claro = document.getElementById('clara');
const selectedElement = document.querySelector('.selected');
const colorPalette = document.getElementById('color-palette');

/* cores da paleta inicio */

function gerarCor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r},${g},${b})`
}

const zero = gerarCor();
const one = gerarCor();
const two = gerarCor();
const three = gerarCor();

function colors() {
  for (let i = 0; i < 4; i += 1) {
    const div = document.createElement('div');
    div.className = 'color';
    colorPalette.appendChild(div);
  }
}

colors()

document.getElementsByClassName('color')[0].style.backgroundColor = zero
document.getElementsByClassName('color')[1].style.backgroundColor = one
document.getElementsByClassName('color')[2].style.backgroundColor = two
document.getElementsByClassName('color')[3].style.backgroundColor = three

/*cores da paleta fim */

function board() {
  for (let i = 0; i < 25; i += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    pixelBoard.appendChild(div);
  }
}

board();

function select(event) {
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}

preto.addEventListener('click', select);
azulClaro.addEventListener('click', select);
azulEscuro.addEventListener('click', select);
claro.addEventListener('click', select);

const color = document.getElementsByClassName('selected')[0].style.backgroundColor
  
function paint(event) {
  event.target.style.backgroundColor = 'color'
}

const pixel = document.querySelector('.pixel')

pixel.addEventListener('click', paint)