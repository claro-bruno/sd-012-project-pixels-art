// Criando Box Pixels
const pixelBox = document.querySelector('#pixel-board');



// Gera as linhas
function createBoardRows(linhas) {
  for (let row = 1; row <= linhas; row += 1) {
    const divRow = document.createElement('div');
    divRow.classList.add('tr');
    pixelBox.appendChild(divRow);
    createCollumns(divRow, linhas);
  }
}
// Gera as Colunas
function createCollumns(row, colunas) {
  for (let column = 1; column <= colunas; column += 1) {
    const divColumn = document.createElement('div');
    divColumn.classList.add('pixel');
    row.appendChild(divColumn);
  }
}
let = createBoardRows(5);

let colorsOne = document.querySelector('#palette-one');
colorsOne.style.backgroundColor = 'black'

let colorsTwo = document.querySelector('#palette-two');
colorsTwo.style.backgroundColor = 'green'

let colorsThree = document.querySelector('#palette-three');
colorsThree.style.backgroundColor = 'orange'

let colorsFour = document.querySelector('#palette-four');
colorsFour.style.backgroundColor = 'purple'
