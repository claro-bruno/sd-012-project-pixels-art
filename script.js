const pixelBoard = document.getElementById('pixel-board');
const preto = document.getElementById('preta');
const azulClaro = document.getElementById('azul-claro');
const azulEscuro = document.getElementById('azul-escuro');
const claro = document.getElementById('clara');
const selectedElement = document.querySelector('.selected');
const colorPalette = document.getElementById('color-palette')

/* cores da paleta inicio */

function gerarCor() {
  let r = Math.random()*255;
  let g = Math.random()*255;
  let b = Math.random()*255;

  return `rgb(${r},${g},${b})`
}

let zero= gerarCor();
let one = gerarCor();
let two = gerarCor();
let three = gerarCor();

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

console.log(color)
  
function paint(event) {
  event.target.style.backgroundColor = 'color'
}

const pixel = document.querySelector('.pixel')

pixel.addEventListener('click', paint)
