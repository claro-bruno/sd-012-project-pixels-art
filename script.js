window.onload = function () {

  gerarBoard(5);
}

function gerarBoard(numero) {
  let pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < numero; index += 1){
    console.log(index);
    let primeiraDiv = document.createElement('div');
    primeiraDiv.className = 'linha';
    pixelBoard.appendChild(primeiraDiv);
    for (let index2 = 0; index2 < numero; index2 += 1){
      let divInterna = document.createElement('div');
      divInterna.className = 'pixel';
      primeiraDiv.appendChild(divInterna);
    }
  } 
}

let cor1 = document.getElementById('color1');
let cor2 = document.getElementById('color2');
let cor3 = document.getElementById('color3');
let cor4 = document.getElementById('color4');

function selecionar(event) {
  const element = document.querySelector('.selected');
  element.classList.remove('selected');
  event.target.classList.add('selected');
}

cor1.addEventListener('click', selecionar);
cor2.addEventListener('click', selecionar);
cor3.addEventListener('click', selecionar);
cor4.addEventListener('click', selecionar);

