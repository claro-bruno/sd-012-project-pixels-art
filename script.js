window.onload = function() {
  // gera um número hexadecimal e adiciona à uma string.
  function generateRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  }

  // cria elementos da paletta.
  function createPaletteElement(ID, color) {
    const colorPalette = document.getElementById('color-palette');
    const createDiv = document.createElement('div');
    createDiv.className = 'color';
    createDiv.id = ID;
    createDiv.style.backgroundColor = color;
    colorPalette.appendChild(createDiv);
  }

  createPaletteElement('color1', 'black');
  createPaletteElement('color2', generateRandomColor());
  createPaletteElement('color3', generateRandomColor());
  createPaletteElement('color4', generateRandomColor());

  // cria elemento da pixel board.
  function createPixelBaordElement() {
    const pixelBoard = document.getElementById('pixel-board');
    for (let index = 0; index < 25; index += 1) {
      const createPixel = document.createElement('div');
      createPixel.className = 'pixel';
      pixelBoard.appendChild(createPixel);
    }
  }

  createPixelBaordElement();

};