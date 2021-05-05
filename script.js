const quadro = document.querySelector('#pixel-board');
const pixel = '<div class="pixel" onclick="paint(this)"> <div>';
const colors = document.querySelectorAll('.color');
const selectedColor = 'selected';
let corSelecionada = 'black';
function coresAleatoias() {
  for (let index = 1; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}

coresAleatoias();
function criaQuadro() {
  for (let i = 0; i < 25; i += 1) {
    quadro.innerHTML += pixel;
  }
}

function quadroPersonalizado() {
  let tamanho = document.getElementById('board-size').value;
  if (tamanho > 0 && tamanho >= 5 && tamanho <= 50) {
    tamanho *= tamanho;
    quadro.innerHTML = '';
    for (let i = 0; i < tamanho; i += 1) {
      quadro.innerHTML += pixel;
    }
  } else if (tamanho > 0 && tamanho < 5) {
    tamanho = 5 * 5;
    quadro.innerHTML = '';
    for (let i = 0; i < tamanho; i += 1) {
      quadro.innerHTML += pixel;
    }
    } else if (tamanho > 50) {
    tamanho = 50 * 50;
    quadro.innerHTML = '';
    for (let i = 0; i < tamanho; i += 1) {
      quadro.innerHTML += pixel;
    }
    } else {
    window.alert('Board inválido!');
    }
}

function selectColor(color) {
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].classList.contains('selected')) {
      colors[index].classList.remove('selected');
    }
  }
  color.classList.add(selectedColor);
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].classList.contains('selected')) corSelecionada = colors[index].style.backgroundColor;
  }
}

function paint(pixelSquare) {
  const pix = pixelSquare;
  pix.style.backgroundColor = corSelecionada;
}

function resetColors() {
  const quadros = quadro.children;
  for (let index = 0; index < quadros.length; index += 1) {
    quadros[index].style.backgroundColor = 'white';
  }
}

criaQuadro();
