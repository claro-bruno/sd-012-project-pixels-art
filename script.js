const coresPaleta = document.querySelectorAll('.color');
coresPaleta[0].style.backgroundColor = 'black';
coresPaleta[1].style.backgroundColor = 'red';
coresPaleta[2].style.backgroundColor = 'blue';
coresPaleta[3].style.backgroundColor = 'green';
let inputValor = document.getElementById('board-size');
const btnValor = document.querySelector('#generate-board');
btnValor.innerHTML = 'VQV';
let pixelBoard = document.querySelector('#pixel-board');

function createPixelFrame() {
  const elementBoard = document.createElement('div');
  elementBoard.className = 'pixel';
  elementBoard.style.backgroundColor = 'white';
  pixelBoard.appendChild(elementBoard);
}

// define a largura e altura do quadrado de pixels
function createPixels(number) {
  for (let linha = 0; linha < number; linha += 1) {
    let linhaPixel = document.createElement('div');
    for (let col = 0; col < number; col += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linhaPixel.appendChild(pixel);
      pixelBoard.appendChild(linhaPixel);
      if (btnValor.addEventListener('click', boardSize)) {
        // linhaPixel.innerHTML = '';
      }
    }
  }
}
createPixels(5);

// função para aumentar tamanho dos quadros de pixels
function boardSize() {
  if (inputValor.value >= 5 && inputValor.value <= 50) {
    pixelBoard.innerHTML = '';
    createPixels(inputValor.value);
    inputValor.value = '';
  }
  else if (inputValor.value === '') {
    alert('Board inválido!');
    inputValor.value = '';
  }else {
    limitMaxMin();
  }
}

function limitMaxMin() {
  if(inputValor.value < 5) {
    pixelBoard.innerHTML = '';
    createPixels(5)
    inputValor.value = '';
  }else if (inputValor.value > 50) {
    pixelBoard.innerHTML = '';
    inputValor.value = '';
    createPixels(50);
  }
}

// função colocar cor nos pixels
function corPixel(cor) {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', function (event) {
      event.target.style.backgroundColor = cor;
    });
  }
}
// função ativar paleta cores e alternar classe "color selected"
for (let index = 0; index < coresPaleta.length; index += 1) {
  coresPaleta[index].addEventListener('click', function (event) {
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
  btnClearBoard.addEventListener('click', function () {
    const pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}
clearBoard();

// gerar cores aleatórias
function randomColors () {
  let r = Math.ceil(Math.random() * 255);
  let g = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

const cor1 = document.getElementsByClassName('color')[0];
cor1.style.backgroundColor = 'black';
const cor2 = document.getElementsByClassName('color')[1];
cor2.style.backgroundColor = randomColors();
const cor3 = document.getElementsByClassName('color')[2];
cor3.style.backgroundColor = randomColors();
const cor4 = document.getElementsByClassName('color')[3];
cor4.style.backgroundColor = randomColors();


// // define a largura e altura do quadrado de pixels
// function createPixels(number) {
//   for (let linha = 0; linha < number; linha += 1) {
//     let pixelBoard = document.querySelector('#pixel-board');
//     let linhaPixel = document.createElement('div');
//     for (let col = 0; col < number; col += 1) {
//       const pixel = document.createElement('div');
//       pixel.className = 'pixel';
//       linhaPixel.appendChild(pixel);
//       pixelBoard.appendChild(linhaPixel);
//     }     
//   }
// }
// createPixels(5);

// const btnValor = document.querySelector('#generate-board');
// btnValor.innerHTML = 'VQV';
// // função para aumentar tamanho dos quadros de pixels
// btnValor.addEventListener('click', () => {  
//   if (inputValor.value >= 5 && inputValor.value <= 50) {
//       createPixels(inputValor.value);
//       inputValor.value = '';
//   }
//   else if (inputValor.value === '') {
//     alert('Board inválido!');
//     inputValor.value = '';
//   }else {
//     limitMaxMin();
//   }
// });