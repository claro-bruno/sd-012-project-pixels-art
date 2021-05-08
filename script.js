// cria paleta
function makePallete(colors) {
  for (let index = 0; index < colors; index += 1) {
    const pallete = document.getElementById('color-palette');
    const palletSlot = document.createElement('div');
    palletSlot.className = 'color';
    pallete.appendChild(palletSlot);
  }
}
makePallete(4);
// colore paleta
const colors = ['black', 'red', 'silver', 'gold'];
function paintPallete(painting) {
  const fillPallet = document.getElementsByClassName('color');
  for (let index = 0; index < fillPallet.length; index += 1) {
    fillPallet[index].style.backgroundColor = painting[index];
  }
}
paintPallete(colors);

const board = document.querySelector('#pixel-board');
const boardControl = 5;
for (let index = 0; index < boardControl; index += 1) {
  const line = document.createElement('tr');
  for (let index1 = 0; index1 < boardControl; index1 += 1) {
    const cell = document.createElement('td');
    cell.className = 'pixel';
    line.appendChild(cell);
  }
  board.appendChild(line);
}
// adiciona classe selected
window.onload = function () {
  const selectedColor = document.querySelector('.color');
  selectedColor.classList.add('selected');
};
// Adiciona troca de cor selecionada por clique
const replaceSelected = document.querySelector('#color-palette');
function addSelected(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}
replaceSelected.addEventListener('click', addSelected);
