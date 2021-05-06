const quadroPixel = document.querySelector('#pixel-board');

for (let indexUl = 1; indexUl <= 5; indexUl += 1) {
  const divQuadro = document.createElement('div');
  divQuadro.className = 'ulDivPixel';
  quadroPixel.appendChild(divQuadro);
  for (let index = 1; index <= 5; index += 1) {
    const liPixelQuadro = document.createElement('li');
    liPixelQuadro.className = 'pixel';
    divQuadro.appendChild(liPixelQuadro);
  }
}

const corBlack = document.querySelector('#black');
const corRed = document.querySelector('#red');
const corBlue = document.querySelector('#blue');
const corGreen = document.querySelector('#green');

document.createElement.className = 'selected';
corBlack.classList.add('selected');

function alteraCor(event) {
  const corElement = document.querySelector('.selected');
  corElement.classList.remove('selected');
  event.target.classList.add('selected');
}

corBlack.addEventListener('click', alteraCor);
corRed.addEventListener('click', alteraCor);
corBlue.addEventListener('click', alteraCor);
corGreen.addEventListener('click', alteraCor);

const arrayColor = document.querySelectorAll('.color');
let cor = 'black';
for (let index = 0; index < arrayColor.length; index += 1) {
  arrayColor[index].addEventListener('click', () => {
    cor = arrayColor[index].innerText;
  });
}

const quadroPintura = document.getElementsByClassName('pixel');
for (let index = 0; index < quadroPintura.length; index += 1) {
  quadroPintura[index].addEventListener('click', () => {
    quadroPintura[index].style.backgroundColor = cor;
  });
}

const botaoLimpar = document.querySelector('#clear-board');
const pixels = document.querySelectorAll('.pixel');

botaoLimpar.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});
