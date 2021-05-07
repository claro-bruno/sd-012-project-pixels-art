
// Variaveis importantes ou recorrentes
const pixelBoard = document.getElementById('pixel-board');
const buttonVqv = document.getElementById('generate-board');
const input = document.getElementById('board-size');
let boarderSize = 25;
// Gerar cores aleatorias
function randomColors () {
  let r = Math.ceil(Math.random() * 255);
  let g = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
// Seta as cores iniciais da paleta de cores
const color1 = document.getElementsByClassName('color')[0];
color1.style.backgroundColor = 'black';
const color2 = document.getElementsByClassName('color')[1];
color2.style.backgroundColor = randomColors();
const color3 = document.getElementsByClassName('color')[2];
color3.style.backgroundColor = randomColors();
const color4 = document.getElementsByClassName('color')[3];
color4.style.backgroundColor = randomColors();
// Cria dinamicamente os pixels do pixel-board
function createPixels() {
  pixelBoard.style.maxWidth = (Math.sqrt(boarderSize) * 42) + 'px';
  for (let index = 0; index < boarderSize; index += 1) {
    const pixelCreate = document.createElement('div');
    pixelCreate.className = 'pixel';
    pixelBoard.appendChild(pixelCreate);
  }
}
createPixels();
// Apaga os quadro do boarder
function deletePixels () {
  const pixels = document.querySelectorAll('.pixel');
  if (pixelBoard.innerHTML.length !== 0) {
    for (const pixel of pixels) {
      pixelBoard.removeChild(pixel);
    }
  }
}
// Defina a cor preta como inicial.
function setBlackAsDefault () {
  color1.className = 'color selected';
  }
setBlackAsDefault();
// Adiciona a classe selected ao clicar em uma cor da paleta
function selectColor (color) {
  color.addEventListener('click', event => {
  if (event.target.className !== 'color selected') {
      event.target.className = 'color selected';
      resetClass(color);
    }
  })
}
selectColor(color1);
selectColor(color2);
selectColor(color3);
selectColor(color4);
// Reseta a classe para color(esta função será invocada dentro da função selectcolor)
function resetClass (color) {
  let colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].className !== 'color' && colors[index] !== color) {
      colors[index].className = 'color';
    }
  }
}
// Pinta os pixels com a cor selecionada
function pixelPainter () {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', event => {
    const selectedColor = document.querySelector('.selected');
    let pixel = event.target;
    pixel.style.backgroundColor = selectedColor.style.backgroundColor;
    })
  }
}
pixelPainter();
// Reseta as cores do quadro
function resetColors () {
  let button = document.querySelector('#clear-board');
  button.addEventListener('click', () => {
    let pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}
resetColors();

// Define o tamanho do quadro
function boarderGenerate() {
  buttonVqv.addEventListener('click', () => {
    if (input.value === '') {
      alert('Board inválido!');
    }
    if (input.value < 5) {
      input.value = 5;
    }
    if (input.value > 50) {
      input.value = 50;
    }
    boarderSize = parseInt(input.value) ** 2;
    deletePixels();
    createPixels();
    pixelPainter();
  });
}
boarderGenerate();
