const quadro = document.getElementById('pixel-board');

function board(num) {
  for (let i = 0; i < num; i += 1) {
    const linha = document.createElement('div');
    quadro.appendChild(linha);
    for (let index = 0; index < num; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linha.appendChild(pixel);
    }
  }
}
board(5);

const trocaCorPaleta = document.querySelector('#pixel-board')
trocaCorPaleta.addEventListener('click', function (event) {
  if (event.target.className === 'pixel') {
    const selectedColor = document.querySelector('.selected');
    const cor = window.getComputedStyle(selectedColor).backgroundColor;
    event.target.style.backgroundColor = cor;
  }
});

const paleta = document.querySelectorAll('.color');
for (let index = 0; index < paleta.length; index += 1) {
  paleta[index].addEventListener('click', function (event) {
    const selectedColor = document.querySelector('.selected')
    selectedColor.classList.remove('selected')
    event.target.classList.add('selected')
  });
}

const pixels = document.getElementsByClassName('pixel');
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener("click", function () {
    let corNova = document.getElementsByClassName("selected")[0].style.backgroundColor;
    pixels[i].style.backgroundColor = corNova;
  })
}

const button = document.getElementById("clear-board");
button.addEventListener('click', clear);

function clear() {
  for (let i = 0; i < pixels.length; i += 1) {
    document.getElementsByClassName("pixel")[i].style.backgroundColor = "white"
  }
}

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