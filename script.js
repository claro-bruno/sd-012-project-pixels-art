// Criando Box Pixels

const pixelBox = document.querySelector('#pixel-board');


// Gerando cores do Palette
const colorsOne = document.querySelector('#palette-one');
colorsOne.style.backgroundColor = 'black'
const colorsTwo = document.querySelector('#palette-two');
colorsTwo.style.backgroundColor = 'green'
const colorsThree = document.querySelector('#palette-three');
colorsThree.style.backgroundColor = 'orange'
const colorsFour = document.querySelector('#palette-four');
colorsFour.style.backgroundColor = 'purple'
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
function createBoardRows(linhas) {

  for (let row = 1; row <= linhas; row += 1) {
    const divRow = document.createElement('div');
    divRow.classList.add('tr');
    pixelBox.appendChild(divRow);
    createCollumns(divRow, linhas);
  }

}
createBoardRows(5);




// Seleciona um pixel
const palette = document.querySelector('#color-palette')

function select() {
  palette.addEventListener('click', function (event) {
    let beforeColor = document.querySelector('.selected')
    if (event.target.id !== 'color-palette') {
      beforeColor.classList.remove('selected')
      event.target.classList.add('selected');
    }
  });
}
select();
// <==


pixelBox.addEventListener('click', function (event) {

  let toColor = document.querySelector('.selected').id;
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = toColor;
  }
});
