let matriz = 5;
const cor1 = document.getElementById('color1');
const cor2 = document.getElementById('color2');
const cor3 = document.getElementById('color3');
const cor4 = document.getElementById('color4');
const botaoGerar = document.getElementById('generate-board');

gerarBoard(matriz);
buttonGerar();
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

function buttonClick() { 
  let button = document.getElementById('clear-board');
  button.addEventListener('click', handleButton);   
}

function handleButton() {
  let listaDePixels = document.querySelectorAll('.pixel');
  for (let n = 0; n < (matriz**2); n += 1) {
  listaDePixels[n].style.backgroundColor = 'white';
  }
}

function buttonGerar() {
  botaoGerar.addEventListener('click', () => {
    let valor = document.getElementById('board-size').value;
    apagarBoard();
    if (valor >= 5 && valor <= 50){
      matriz = valor;  
    } else if (valor < 5) {
      matriz = 5;
    } else if (valor > 50) {
      matriz = 50;
    } else {
      alert('Board inválido!');
    }
    gerarBoard(matriz);
    handleBoard(); 
  });
}

function apagarBoard() {
  const div = document.getElementById("pixel-board");
  while (div.firstChild) {
    div.removeChild(div.lastChild);
  }
}
