const pixelBoard = document.getElementById('pixel-board');
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

function gerarBlack() {
  const div = document.createElement('div');
  div.className = 'color selected';
  colorPalette.appendChild(div);
  
}

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


function select(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}

document.getElementsByClassName('color')[0].addEventListener('click', select);
document.getElementsByClassName('color')[1].addEventListener('click', select);
document.getElementsByClassName('color')[2].addEventListener('click', select);
document.getElementsByClassName('color')[3].addEventListener('click', select);

/*cores da paleta fim */

function board() {
  for (let i = 0; i < 25; i += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    pixelBoard.appendChild(div);
  }
}

board();

/*function paint(event) {
  event.target.style.backgroundColor = 'color'
}

const pixel = document.querySelector('.pixel')

pixel.addEventListener('click', paint)*/