window.onload = function pixelsArt() {
  createPaletteElement('color1', 'black');
  createPaletteElement('color2', generateRandomColor());
  createPaletteElement('color3', generateRandomColor());
  createPaletteElement('color4', generateRandomColor());
  createPixelBaordElement();
  initialColor('color1');
  changeSelectedClick();
  changeColorClick();
  clearBoardClick();
};
// Gera um número hexadecimal e adiciona à uma string.
function generateRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}

// Cria elementos da paletta.
function createPaletteElement(ID, color) {
  const colorPalette = document.getElementById('color-palette');
  const createDiv = document.createElement('div');
  createDiv.className = 'color';
  createDiv.id = ID;
  createDiv.style.backgroundColor = color;
  colorPalette.appendChild(createDiv);
}

// Cria elemento da pixel board.
function createPixelBaordElement() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < 25; index += 1) {
    const createPixel = document.createElement('span');
    createPixel.className = 'pixel';
    pixelBoard.appendChild(createPixel);
  }
}

// A classe selected é atribuida para um elemento.
function initialColor(ID) {
  const corInicial = document.getElementById(ID);
  corInicial.className += ' selected';
}

// Muda o elemento que recebe a classe selected
function changeSelected(element) {
  const selected = document.querySelector('.selected');
  selected.className = 'color';
  element.target.className += ' selected';
}

// Adiciona a funcao 'changeSelected' ao evento click de Id's específicos
function changeSelectedClick() {
  const color1 = document.getElementById('color1');
  const color2 = document.getElementById('color2');
  const color3 = document.getElementById('color3');
  const color4 = document.getElementById('color4');

  color1.addEventListener('click', changeSelected);
  color2.addEventListener('click', changeSelected);
  color3.addEventListener('click', changeSelected);
  color4.addEventListener('click', changeSelected);
}

// Muda a cor de um elemento específico.
function changeColor(event) {
  const selectedColor = document.querySelector('.selected');
  const compStyle = window.getComputedStyle(selectedColor);
  event.target.style.backgroundColor = compStyle.getPropertyValue('background-color');
}

// Muda a cor de um dos pixels da board.
function changeColorClick() {
  const pixels = document.querySelectorAll('.pixel');
  for (let pixel of pixels) {
    pixel.addEventListener('click', changeColor);
  }
}

// Botão que deixa o background de todos os pixels da board como 'white'.
function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}

// Adiciona a funcao 'clearBoard' ao clique do botão 'Limpar'
function clearBoardClick() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clearBoard)
}
