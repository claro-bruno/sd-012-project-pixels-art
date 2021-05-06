let matriz = 5;
let cor1 = document.getElementById('color1');
let cor2 = document.getElementById('color2');
let cor3 = document.getElementById('color3');
let cor4 = document.getElementById('color4');

gerarBoard(matriz);
selecionarCor();
handleBoard();
buttonClick();

function gerarBoard(numero) {
  let pixelBoard = document.getElementById('pixel-board');
  let primeiraDiv;
  let divInterna;
  for (let index = 0; index < numero; index += 1){
    primeiraDiv = document.createElement('div');
    primeiraDiv.className = 'linha';
    pixelBoard.appendChild(primeiraDiv);
    for (let index2 = 0; index2 < numero; index2 += 1){
      divInterna = document.createElement('div');
      divInterna.className = 'pixel';
      primeiraDiv.appendChild(divInterna);
    }
  } 
}

function selecionarCor() {
  cor1.addEventListener('click', selecionar);
  cor2.addEventListener('click', selecionar);
  cor3.addEventListener('click', selecionar);
  cor4.addEventListener('click', selecionar);
}

function selecionar(event) {
  let element = document.querySelector('.selected');
  element.classList.remove('selected');
  event.target.classList.add('selected');
}

function handleBoard() {
  let listaDePixels = document.querySelectorAll('.pixel');
  for (let n = 0; n < (matriz**2); n += 1) {
    listaDePixels[n].addEventListener('click', pintarPixel);
  }
}

function pintarPixel(event) {
  let cor = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
  event.target.style.backgroundColor = cor;   
}

buttonClick() { 
}

handleButton() {
}
