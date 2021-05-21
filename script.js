//Desafio 7
let selecionaCor = document.getElementsByClassName('color');

function seleciona(event) {
  let selecionado = document.querySelector('.selected');
  selecionado.classList.remove('selected');
  event.target.classList.add('selected');
}
function capturaClasseColor() {
    for (let indice = 0; indice < selecionaCor.length ; indice += 1) {
      selecionaCor[indice].addEventListener('click', seleciona);
    }
}
capturaClasseColor();

//Desafio 8

let selecionaPixel = document.getElementsByClassName('pixel');
for (let index = 0; index < selecionaPixel.length ; index +=1){
  selecionaPixel[index].addEventListener('click', pintar);
}
function pintar(event) {
  let corSelecionado = document.querySelector('.selected');
  let pintarPixel = window.getComputedStyle(corSelecionado).getPropertyValue("background-color");
  event.target.style.backgroundColor = pintarPixel;
}

//Desafio 9

function clearBoard() {
  let botaoLimpar = document.querySelector('#clear-board');
  botaoLimpar.addEventListener('click', limpar );
}
function limpar() {
  let limparBoard = document.querySelectorAll('.pixel');
  for (let index = 0 ; index < limparBoard.length ; index += 1){
    limparBoard[index].style.backgroundColor = '#fff';
  }
}
clearBoard();