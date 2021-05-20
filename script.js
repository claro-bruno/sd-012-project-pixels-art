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
}
























// window.onload = function () {
//     let button = document.getElementById('clear-board');

//     button.addEventListener('click', evento);

// }

// function evento() {

// }
