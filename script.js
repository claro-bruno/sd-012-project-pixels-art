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

//Desafio 10
function novaTabelaDinamica(number) {
  let tabela = document.getElementById('pixel-board');
  tabela.innerHTML = '';
  for (let linha = 0; linha < number; linha += 1) {
    let tr = document.createElement('tr');
    for (let col = 0; col < number; col += 1) {
      let th = document.createElement('th');
      th.className = 'pixel';
      tr.appendChild(th);
    }
    tabela.appendChild(tr);
  }

  let selecionaPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < selecionaPixel.length ; index +=1){
    selecionaPixel[index].addEventListener('click', pintar);
  }
  function pintar(event) {
    let corSelecionado = document.querySelector('.selected');
    let pintarPixel = window.getComputedStyle(corSelecionado).getPropertyValue("background-color");
    event.target.style.backgroundColor = pintarPixel;
  }
}
novaTabelaDinamica(5)

function tabelaValida() {
  let number = document.getElementById('board-size').value;

  if (number === '') {
    alert('Board inválido!');
  } else {
    novaTabelaDinamica(number);
  }
}

let botaoVQV = document.getElementById('generate-board');
botaoVQV.addEventListener('click', tabelaValida);

//Desafio 8

// let selecionaPixel = document.getElementsByClassName('pixel');
// for (let index = 0; index < selecionaPixel.length ; index +=1){
//   selecionaPixel[index].addEventListener('click', pintar);
// }
// function pintar(event) {
//   let corSelecionado = document.querySelector('.selected');
//   let pintarPixel = window.getComputedStyle(corSelecionado).getPropertyValue("background-color");
//   event.target.style.backgroundColor = pintarPixel;
// }
