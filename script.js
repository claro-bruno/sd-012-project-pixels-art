const pixel = document.getElementById('pixel-board');
const preto = document.getElementById('preta')
const azulClaro = document.getElementById('azul-claro')
const azulEscuro = document.getElementById('azul-escuro')
const claro = document.getElementById('clara')

function board() {
  for (let i = 0; i < 25; i += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    pixel.appendChild(div);
  }
}

board();

function select(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}

preto.addEventListener('click', select);
azulClaro.addEventListener('click', select);
azulEscuro.addEventListener('click', select);
claro.addEventListener('click', select);
