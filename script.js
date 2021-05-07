// Criando Box Pixels


const pixelBox = document.querySelector('#pixel-board');

const colorPalette = document.querySelector('#color-palette');

const colorsOne = document.querySelector('#palette-one');
colorsOne.style.backgroundColor = 'black'

const colorsTwo = document.querySelector('#palette-two');
colorsTwo.style.backgroundColor = 'green'

const colorsThree = document.querySelector('#palette-three');
colorsThree.style.backgroundColor = 'orange'

const colorsFour = document.querySelector('#palette-four');
colorsFour.style.backgroundColor = 'purple'



colorPalette.addEventListener('click', (event) => {
  for (let index = 0; index < colorPalette.children.length; index += 1) {
    colorPalette.children[index].classList.remove('selected');
  }
  return event.target.classList.toggle('selected');
});



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
