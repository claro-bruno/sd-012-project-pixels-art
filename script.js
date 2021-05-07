const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');

// gera cor aleatoria

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

gerarBlack()
gerarPaleta()

document.getElementsByClassName('color')[0].style.backgroundColor = 'black'
document.getElementsByClassName('color')[1].style.backgroundColor = one
document.getElementsByClassName('color')[2].style.backgroundColor = two
document.getElementsByClassName('color')[3].style.backgroundColor = three



//seleciona cor da paleta
const selectedElement = document.querySelector('.selected');

function select(event) {
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}

document.getElementsByClassName('color')[0].addEventListener('click', select);
document.getElementsByClassName('color')[1].addEventListener('click', select);
document.getElementsByClassName('color')[2].addEventListener('click', select);
document.getElementsByClassName('color')[3].addEventListener('click', select);

// cria a board
function board() {
  for (let i = 0; i < 25; i += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    pixelBoard.appendChild(div);
  }
}

board();
/* daqui pra cima tá de boa */

/*function paint(event) {
  const color = selectedElement.style.backgroundColor
  event.target.style.backgroundColor = color
  console.log(color)
}

const pixel = document.getElementsByClassName('pixel')

pixel.addEventListener('click', paint)

const botao = document.getElementById('clear-board')

function apaga(event){
  event.target.style.backgroundColor = 'white'
}
botao.addEventListener('click', apaga)*/
