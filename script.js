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
linhas = createBoardRows(5);

// Gera as Colunas
function createCollumns(row, colunas) {
  for (let column = 1; column <= colunas; column += 1) {
    const divColumn = document.createElement('div');
    divColumn.classList.add('pixel');
    row.appendChild(divColumn);
  }
}


let colorsOne = document.querySelector('#palette-one');
colorsOne.style.backgroundColor = 'black'

let colorsTwo = document.querySelector('#palette-two');
colorsTwo.style.backgroundColor = 'green'

let colorsThree = document.querySelector('#palette-three');
colorsThree.style.backgroundColor = 'orange'

let colorsFour = document.querySelector('#palette-four');
colorsFour.style.backgroundColor = 'purple'



const palette = document.querySelectorAll('.color');
const black = palette[0];
const palette2 = palette[1];
const palette3 = palette[2];
const palette4 = palette[3];
black.classList.add('selected');
