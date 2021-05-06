let line = 5;
let column = 5;
let pixelBoard = document.getElementById('pixel-board')

function addLine(line) {
  for (let index = 0; index < line; index += 1) {
    let divLine = document.createElement('div');
    divLine.className = 'table-Row';
    pixelBoard.appendChild(divLine);
  };
};

addLine(line);

function addColumn (column) {
  let columnsOfRow = document.getElementsByClassName('table-Row');
  for (let columns of columnsOfRow) {
    for ( let index = 0; index < column; index += 1) {
      let divColumn = document.createElement('div');
      divColumn.className = 'pixel';
      columns.appendChild(divColumn);
    };
  };
};

addColumn(column);

const colors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');

function selectedColor (event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let indexcolor = 0; indexcolor < colors.length; indexcolor += 1) {
  colors[indexcolor].addEventListener('click', selectedColor);
}

// Após uma sucessão de erros com as funçoes, verifiquei o repositório da colega Adriana Biberg (https://github.com/tryber/sd-012-project-pixels-art/pull/122), cujo a função para acrescentar e remover a classe selected ao mesmo tempo que seleciona a cor de acordo com o click, foi de fácil compreensão.

let pixel = document.getElementsByClassName('pixel');

function paintCanvas (event) {
  let brushColor = document.querySelector('.selected');
  let paintColor = brushColor.id;
  event.target.style.backgroundColor = paintColor;
};

for (let element of pixel) {
  element.addEventListener('click', paintCanvas);
};

// O requisito 8 foi gracas ao colega Ryan Laiber, compreendi a alteracao do background do elemento selecionado apenas apos verificar seu repositorio, porem a linha 47, estou deduzindo que puxe a cor pelo id do elemento com a class selected, nao localizei outra explicacao mas faz sentido para mim. (https://github.com/tryber/sd-012-project-pixels-art/pull/99/files#)

const button = document.getElementById('clear-board');

function clearButton() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
button.addEventListener('click', clearButton);