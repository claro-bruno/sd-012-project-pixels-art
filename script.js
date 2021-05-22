const pixelBoard = document.querySelector('#pixel-board');
let element = 5;

function creatingPixelDivs(linhas) {
  for (let row = 1; row <= linhas; row += 1) {
    const divRow = document.createElement('div');
    pixelBoard.appendChild(divRow);
    creatingPixelDivsCollumns(divRow, linhas);
  }
}

function creatingPixelDivsCollumns(row, colunas) {
  for (let column = 1; column <= colunas; column += 1) {
    const divColumn = document.createElement('div');
    divColumn.className = 'pixel';
    row.appendChild(divColumn);
  }
}
creatingPixelDivs(element);


let allColors = document.querySelector('#pixel-board');
allColors.addEventListener("click", function (event) {
  if (event.target.className === 'pixel') {
    let selectedColor = document.querySelector('.selected');
    let cor = window.getComputedStyle(selectedColor).backgroundColor;
    event.target.style.backgroundColor = cor;
  }
});

let paletas = document.querySelectorAll('.color');
for (let index = 0; index < paletas.length; index += 1) {
  paletas[index].addEventListener('click', function (event) {
    let selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  });
};

const quadrado = document.getElementsByClassName('pixel');
for (let index = 0; index < quadrado.length; index += 1) {
  quadrado[index].addEventListener('click', function () {
    let novaCor = document.getElementsByClassName('selected')[0].style.backgroundColor;
    quadrado[index].style.backgroundColor = novaCor;
  });
};

const button = document.getElementById('clear-board');
button.addEventListener('click', clear);

function clear() {
  for (let index = 0; index < quadrado.length; index += 1) {
    document.getElementsByClassName('pixel')[index].style.backgroundColor = 'white';
  };
};

let recuperaNum = document.querySelector('#board-size').value
let inputNumber = document.querySelector('#board-size')
inputNumber.addEventListener('keyup', function(){
  recuperaNum = document.querySelector('#board-size').value
});

function creatingPixelBoard(size) {
  for (let row = 0; row < size; row += 1) {
    const tableRow = document.createElement('tr');
    pixelBoard.appendChild(tableRow);
   for (let column = 0; column < size; column += 1) {
      const tableColumn = document.createElement('td');
      tableRow.appendChild(tableColumn);
      tableColumn.classList.add('pixel');
    };
  };
};

const botao = document.getElementById('generate-board')
botao.addEventListener('click', function(){

const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.innerHTML = '';
const boardSize = document.getElementById('board-size');
let size = boardSize.value;
  if (size === '') {
    alert("Board inválido!");
    return;
  }
  if (size < 5) {
    size = 5;
  } 
  if (size > 50) {
    size = 50;
  }

creatingPixelBoard(size);
});
