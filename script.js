function randomRGB() {
  return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

function criarPalheta(numeroDeCores) {
  const pegarPaleta = document.getElementById('color-palette');
  for (let i = 0; i < numeroDeCores; i += 1) {
    const div = document.createElement('div');
    if (i === 0) {
      div.className = 'color selected';
      div.style.backgroundColor = 'black';
    } else {
      div.className = 'color';
      const colorRandom = randomRGB();
      div.style.backgroundColor = colorRandom;
    }
    pegarPaleta.appendChild(div);
  }
}

function criarPixelBoard(base) {
  const pegarPixelBoard = document.getElementById('pixel-board');
  pegarPixelBoard.innerHTML = '';
  pegarPixelBoard.style.width = `${base * 79}px`;
  for (let index = 0; index < base * base; index += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    pegarPixelBoard.appendChild(div);
  }
}

function resetSelect() {
  const cores = document.querySelectorAll('.color');
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].className = 'color';
  }
}

function pintalPixel(color) {
  const pixel = document.getElementById('pixel-board');
  pixel.addEventListener('click', function (event) {
    if (event.target.className === 'pixel') event.target.style.backgroundColor = color;
  })
}

function selecionarCores() {
  const getPalette = document.getElementById('color-palette');
  getPalette.addEventListener('click', function (event) {
    if (event.target.className === 'color') {
      resetSelect();
      pintalPixel(event.target.style.backgroundColor);
      event.target.className = 'color selected';
    }
  })
}

function botaoLimpar() {
  const botao = document.getElementById('clear-board');
  botao.addEventListener('click', function () {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  })
}

function VQV() {
  const vqvButton = document.getElementById('generate-board');
  vqvButton.addEventListener('click', function () {
    const input = document.getElementById('board-size');

    if (!input.value.length) {
      window.alert('Board inválido!');
      input.value = 5;
    }
    if (input.value < 5) {
      input.value = 5;
    }
    if (input.value > 50) {
      input.value = 50;
    }
    criarPixelBoard(input.value);
  });
}

window.onload = function () {

  criarPalheta(4);

  criarPixelBoard(5);

  selecionarCores();

  pintalPixel('black');

  botaoLimpar();

  VQV();
};
