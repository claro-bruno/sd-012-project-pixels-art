// add classe 'selected' ao bloco1
const selectedClass = document.querySelector('#bloco1');
selectedClass.className = 'color selected';
// chamando os blocos HTML para um variavel
const bloco1 = document.querySelector('#bloco1');
const bloco2 = document.querySelector('#bloco2');
const bloco3 = document.querySelector('#bloco3');
const bloco4 = document.querySelector('#bloco4');

// funcao para remover e adicionar o nome selected na classe
function removeEAdd(mouseClick1) {
  let changeClass = document.querySelector('.selected');
  changeClass.classList.remove('selected');
  mouseClick1.target.classList.add('selected');
}
// envento para executar acao click do mouse
bloco1.addEventListener('click', removeEAdd);
bloco2.addEventListener('click', removeEAdd);
bloco3.addEventListener('click', removeEAdd);
bloco4.addEventListener('click', removeEAdd);

let selectedColor = 'black';
const bloco1Color = document.querySelector('#bloco1');
const bloco2Color = document.querySelector('#bloco2');
const bloco3Color = document.querySelector('#bloco3');
const bloco4Color = document.querySelector('#bloco4');
const pixelBoard = document.querySelector('#pixel-board');

function colorPaletteSelected1(color1) {
  let colorOne = color1.target;
  selectedColor = 'black';
}
bloco1Color.addEventListener('click', colorPaletteSelected1);

function colorPaletteSelected2(color2) {
  let colorTwo = color2.target;
  selectedColor = '#04C696';
}
bloco2Color.addEventListener('click', colorPaletteSelected2);

function colorPaletteSelected3(color3) {
  let colorThree = color3.target;
  selectedColor = '#089DBE';
}
bloco3Color.addEventListener('click', colorPaletteSelected3);

function colorPaletteSelected4(color4) {
  let colorFour = color4.target;
  selectedColor = '#0C75E6';
}
bloco4Color.addEventListener('click', colorPaletteSelected4);

function colorAll(painting) {
  let paint = painting.target;
  paint.style.backgroundColor = selectedColor;
}
pixelBoard.addEventListener('click', colorAll);
