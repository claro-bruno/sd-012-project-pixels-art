const arrayColor = ['black', 'yellow', 'red', 'green'];

function createPalette(arrColor) {
  for (let index = 0; index < arrColor.length; index += 1) {
    const divColor = document.createElement('div');
    divColor.className = 'color';
    divColor.style.backgroundColor = arrColor[index];
    const colorPalette = document.getElementById('color-palette');

    colorPalette.appendChild(divColor);
  }
}
createPalette(arrayColor);

function createBoard(size) {
  for (let index = 0; index < size; index += 1) {
    const divLine = document.createElement('div');
    for (let index2 = 0; index2 < size; index2 += 1) {
      const divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      divLine.className = 'line';
      divLine.appendChild(divPixel);
    }
    const divBoard = document.querySelector('#pixel-board');
    divBoard.appendChild(divLine);
  }
}
createBoard(5);

function selectBlack() {
  const firstColor = document.getElementById('color-palette').firstElementChild;
  firstColor.classList.add('selected');
}
selectBlack();

const colorPalette = document.getElementById('color-palette');

colorPalette.addEventListener('click', (event) => {
  if (event.target.className === 'color') {
    const classSelected = document.querySelector('.selected');
    classSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }
});


/*
- Criar um evento de click na paleta de cores.
- Captura o elemento que tem a classe select.
- Remover da classe seleciona.
- Colocar na classe que foi clicada.
- Colocar a class select em quem tem a classe color.
- se tiver a classe color adiciona a class select se não tiver não faça nada.
*/