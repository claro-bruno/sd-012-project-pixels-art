// Requisito 04 e 05
function criaQuadradosDiv() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  return pixel;
}
function criaLinhasDiv() {
  const pixelLine = document.createElement('div');
  pixelLine.classList.add('pixel-line');
  return pixelLine;
}
function criaLinhas(size) {
  const pixelLineParent = document.getElementById('pixel-board');
  for (let index = 0; index < size; index += 1) {
    pixelLineParent.appendChild(criaLinhasDiv());
  }
}
function repetidor(pixelLine) {
  for (let index2 = 0; index2 < pixelLine.length; index2 += 1) {
    pixelLine[index2].appendChild(criaQuadradosDiv());
  }
}
function criaQuadrados(size) {
  const pixelLine = document.getElementsByClassName('pixel-line');
  for (let index = 0; index < pixelLine.length; index += 1) {
    if (index < size) {
      repetidor(pixelLine);
    }
  }
}
function createSquare(tamanho) {
  const pixelLineParent = document.getElementById('pixel-board');
  pixelLineParent.innerHTML = ''; // zera todos os valores de dentro
  criaLinhas(tamanho);
  criaQuadrados(tamanho);
}
createSquare();

function randomColorGenerator() {
  const cores = ['black'];
  for (let index = 0; index < 4; index += 1) {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    cores.push(randomColor);
  }
  return cores;
}
randomColorGenerator();
// Requisito 03
const cores = randomColorGenerator(); // black obrigatoriamente tenque ser a primeira cor do array
function alteraCor() {
  const paletaCores = document.getElementsByClassName('color');
  for (let index = 0; index < paletaCores.length; index += 1) {
    paletaCores[index].style.backgroundColor = cores[index];
  }
}
alteraCor();

// Requisito 06
function corPadrao() {
  const paletaCorPadrao = document.getElementsByClassName('color');
  for (let index = 0; index < paletaCorPadrao.length; index += 1) {
    paletaCorPadrao[index].classList.remove('selected');
  }
  paletaCorPadrao[0].classList.add('selected');
}
corPadrao();

// Requisito 08
function getColor(event) {
  const alvo = event.target;
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  alvo.style.backgroundColor = selectedColor;
}
function getColorEvent() {
  const square = document.getElementsByClassName('pixel');
  for (let index = 0; index < square.length; index += 1) {
    square[index].addEventListener('click', getColor);
  }
}
getColorEvent();

// Requisito 07
function selected(event) {
  const removeSelection = document.querySelector('.selected');
  removeSelection.classList.remove('selected');
  event.target.classList.add('selected');
}
function selectedEvent() {
  const paleta = document.getElementsByClassName('color');
  for (let index = 0; index < paleta.length; index += 1) {
    paleta[index].addEventListener('click', selected);
  }
}
selectedEvent();

// Requisito 09
function clearButton() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
function clearButtonEvent() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', clearButton);
}
clearButtonEvent();

// Requisito 10
function customSizeCond(inputValue) {
  if (inputValue < 5) {
    createSquare(5);
  }
}
function customSize() {
  const inputValue = parseInt(document.getElementById('board-size').value, 10); // value, 10) radix 10 para numeros decimal
  if (inputValue > 50) {
    createSquare(50);
  }
  if (inputValue < 51 && inputValue > 0) {
    createSquare(inputValue);
    customSizeCond(inputValue);
  } else {
    alert('Board inválido!');
  }
  getColorEvent();
}
function customSizeEvent() {
  const button = document.querySelector('.button>button');
  button.addEventListener('click', customSize);
}
customSizeEvent();

window.onload = function inicializa() {
  function boardSizeDefault() {
    createSquare(5);
  }
  boardSizeDefault();
  getColorEvent();
};
// window.onload braket;
