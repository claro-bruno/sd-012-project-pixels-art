const quadro = document.querySelector('#pixel-board');
const pixel = '<div class="pixel"> <div>';
const colors = document.querySelectorAll('.color');
let corSelecionada = 'black';

function coresAleatoias() {
  for (let index = 1; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
coresAleatoias();

function criaQuadros(tamanho) {
  for (let i = 0; i < tamanho; i += 1) {
    quadro.innerHTML += pixel;
  }
}

document.getElementById('generate-board').addEventListener('click', () => {
  let tamanho = document.getElementById('board-size').value;
  if (tamanho > 50) {
    tamanho = 50 * 50;
    quadro.innerHTML = '';
    criaQuadros(tamanho);
  } else if (tamanho <= 50 && tamanho > 4) {
    tamanho *= tamanho;
    quadro.innerHTML = '';
    criaQuadros(tamanho);
  } else if (tamanho > 0) {
    tamanho = 5 * 5;
    quadro.innerHTML = '';
    criaQuadros(tamanho);
  } else {
    window.alert('Board inválido!');
  }
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('color')) {
    const selecionada = event.target;
    corSelecionada = selecionada.style.backgroundColor;
    const s = document.querySelector('.selected');
    s.classList.remove('selected');
    selecionada.classList.add('selected');
  }
}, false);

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('pixel')) {
    const selecionado = event.target;
    selecionado.style.backgroundColor = corSelecionada;
  }
}, false);

document.getElementById('clear-board').addEventListener('click', () => {
  const quadros = quadro.children;
  for (let index = 0; index < quadros.length; index += 1) {
    quadros[index].style.backgroundColor = 'white';
  }
});

criaQuadros(25);
