window.onload = function () {
  function generateRandomColor () {
    const randomColor =  Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
  }

  function createPalette(ID, color) {
    const colorPalette = document.getElementById('color-palette');
    const createDiv = document.createElement('div');
    createDiv.className = 'color';
    createDiv.id = ID;
    createDiv.style.backgroundColor = color;
    colorPalette.appendChild(createDiv);
  }

  createPalette('color1', 'black');
  createPalette('color2', generateRandomColor());
  createPalette('color3', generateRandomColor());
  createPalette('color4', generateRandomColor());
}