// Criando Box Pixels

const pixelBox = document.querySelector('#pixel-board');

// Gerando cores do Palette
const colorsOne = document.querySelector('#palette-one');
colorsOne.style.backgroundColor = 'black';
const colorsTwo = document.querySelector('#palette-two');
colorsTwo.style.backgroundColor = 'green';
const colorsThree = document.querySelector('#palette-three');
colorsThree.style.backgroundColor = 'orange';
const colorsFour = document.querySelector('#palette-four');
colorsFour.style.backgroundColor = 'purple';
// <==
// Gera as Colunas
function createCollumns(row, colunas) {
  for (let column = 1; column <= colunas; column += 1) {
    const divColumn = document.createElement('div');
    divColumn.classList.add('pixel');
    row.appendChild(divColumn);
  }

}
// Gera as linhas
function createBoardRows(lines) {
  for (let row = 1; row <= lines; row += 1) {
    const divRow = document.createElement('div');
    divRow.classList.add('tr');
    pixelBox.appendChild(divRow);
    createCollumns(divRow, lines);
  }
}

createBoardRows(5);

const palette = document.querySelector('#color-palette');

function select() {
  palette.addEventListener('click', function (event) {
    let oldColor = document.querySelector('.selected')
    // if (event.target.id !== 'color-palette') {
    oldColor.classList.remove('selected')
    event.target.classList.add('selected');

  });
}
select();



pixelBox.addEventListener('click', function (event) {

  let fillPixel = document.querySelector('.selected').id;
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = fillPixel;
  }
});

const clear = document.getElementById('clear-board');

clear.addEventListener('click', function () {
  const colorPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index <= colorPixel.length; index += 1) {
    colorPixel[index].style.backgroundColor = 'white'
  }
});
