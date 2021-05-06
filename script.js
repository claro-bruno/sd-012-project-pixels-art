function paletteGenerator() {
  const colors = ['black', 'green', 'blue', 'orange'];
  const paletteSection = document.getElementById('color-palette');

  for (let index = 0; index < colors.length; index += 1) {
    const createDiv = document.createElement('div');
    paletteSection.appendChild(createDiv);
    createDiv.className = 'color';
    createDiv.style.backgroundColor = colors[index];
    if (index === 0) {
      createDiv.classList.add('selected');
    }
  }
}
paletteGenerator();

function tableGenerator(size) {
  const canvasSize = size;
  const tableTag = document.querySelector('table');
  tableTag.innerHTML = '';  // essa forma de limpar todos os filhos da table foi lida no: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  for (let index = 0; index < canvasSize; index += 1) {
    const tableRow = document.createElement('tr');
    tableTag.appendChild(tableRow);
    tableRow.style.backgroundColor = 'white';
  }
  const tableRows = tableTag.children;
  for (let indexLine = 0; indexLine < tableRows.length; indexLine += 1) {
    for (let index = 0; index < canvasSize; index += 1) {
      const tableData = document.createElement('td');
      tableRows[indexLine].appendChild(tableData);
      tableData.className = 'pixel';
      tableData.style.backgroundColor = 'white';
    }
  }
}
tableGenerator(5);

function colorSelected() {
  const selectedColor = document.getElementsByClassName('color selected');
  const colorPalette = document.getElementById('color-palette');

  colorPalette.addEventListener('click', function (event) {
    selectedColor[0].classList.remove('selected');
    event.target.classList.add('selected');
  });
}

colorSelected();

function paintPixel() {
  const canvas = document.getElementById('pixel-board');

  canvas.addEventListener('click', function (event) {
    const selectedColor = document.getElementsByClassName('color selected')[0].style.backgroundColor;
    event.target.style.backgroundColor = selectedColor;
  });
}
paintPixel();

function clearCanvas() {
  const clearButton = document.getElementById('clear-board');
  const canvas = document.getElementsByClassName('pixel');
  clearButton.addEventListener('click', function () {
    for (let index = 0; index < canvas.length; index += 1) {
      canvas[index].style.backgroundColor = 'white';
    }
  });
}
clearCanvas();

function canvasSize() {
  const generateButton = document.getElementById('generate-board');
  const inputBox = document.getElementById('board-size');

  generateButton.addEventListener('click', function () {
    const inputBoxValue = inputBox.value;
    if (inputBoxValue === '') {
      alert('Board inválido!');
    } else if (inputBoxValue < 5) {
      tableGenerator(5);
    } else if (inputBoxValue > 50) {
      tableGenerator(50);
    } else {
      tableGenerator(inputBoxValue);
    }
  });
}
canvasSize();
