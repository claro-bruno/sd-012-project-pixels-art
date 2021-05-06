const coresPaleta = document.querySelectorAll('.color');
coresPaleta[0].style.backgroundColor = 'black';
coresPaleta[1].style.backgroundColor = 'red';
coresPaleta[2].style.backgroundColor = 'blue';
coresPaleta[3].style.backgroundColor = 'green';

// criar dinamicamente divs com classe pixel
const pixelBoard = document.querySelector('#pixel-board');
function criaPixels(valor) {
  for (let index = 0; index < valor; index += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
    for (let index2 = 1; index2 < valor; index2 += 1) {
      pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoard.appendChild(pixel);
    }
  }
}
criaPixels(5);

// função colocar cor nos pixels
function corPixel(cor) {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', function(event) {
      event.target.style.backgroundColor = cor;
    });
  }
}
// função ativar paleta cores e alternar classe "color selected"
for (let index = 0; index < coresPaleta.length; index += 1) {
  coresPaleta[index].addEventListener('click', function(event) {
    const colorSelected = document.querySelector('.selected');
    if (event.target.className !== 'color selected') {
      event.target.classList.add('selected');
      colorSelected.classList.remove('selected');
      corPixel(event.target.style.backgroundColor);
    }
  });
}

// para iniciar com a cor preta
localStorage.setItem('corInicial', coresPaleta[0].style.backgroundColor);
const corInicial = localStorage.getItem('corInicial');
if (corInicial) corPixel(corInicial);

const btnClearBoard = document.querySelector('#clear-board');
btnClearBoard.innerHTML = 'Limpar';

// para tornar todos os pixels na cor branca
function clearBoard() {
  btnClearBoard.addEventListener('click', function(limpar) {
    const pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}
clearBoard();
