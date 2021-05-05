function paletteGenerator() {
  let colors = ['black', 'green', 'blue', 'orange'];
  let paletteSection = document.getElementById('color-palette');

  for (let index = 0; index < colors.length; index += 1) {
    let createDiv = document.createElement('div');
    paletteSection.appendChild(createDiv);
    createDiv.className = 'color';
    createDiv.style.backgroundColor = colors[index];
    if (index === 0) {
      createDiv.classList.add('selected');
    }
  }
}
paletteGenerator();

function tableGenerator() {
  let canvasSize = 5;
  let tableTag = document.querySelector('table');

  for (let index = 0; index < canvasSize; index += 1) {
    let tableRow = document.createElement('tr')
    tableTag.appendChild(tableRow);
    tableRow.style.backgroundColor = 'white';

  }

  let tableRows = tableTag.children;
  for (let indexLine = 0; indexLine < tableRows.length; indexLine += 1) {
    for (let index = 0; index < canvasSize; index += 1) {
      let tableData = document.createElement('td');
      tableRows[indexLine].appendChild(tableData);
      tableData.className = 'pixel';
      tableData.style.backgroundColor = 'white';
    }
  }
}
tableGenerator();

function colorSelected() {
  let selectedColor = document.getElementsByClassName('color selected');
  let colorPalette = document.getElementById('color-palette');

  colorPalette.addEventListener('click', function (event) {
    selectedColor[0].classList.remove('selected');
    event.target.classList.add('selected');
  })

}
colorSelected();

function paintPixel() {
  let canvas = document.getElementById('pixel-board');

  canvas.addEventListener('click', function (event) {
    let selectedColor = document.getElementsByClassName('color selected')[0].style.backgroundColor;
    event.target.style.backgroundColor = selectedColor;
  })
}
paintPixel();

function clearCanvas() {
  let clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', function () {
    let canvas = document.getElementsByClassName('pixel');
    for (let index = 0; index < canvas.length; index) {
      canvas[index].style.backgroundColor = 'white';
    }
  })
}
// clearCanvas();