function paletteGenerator() {
  const colors = ['green', 'blue', 'orange', 'purple', 'teal', 'navy', 'yellow', 'lime', 'maroon', 'red', 'gray', 'silver', 'chocolate', 'pink'];
  const paletteSection = document.getElementById('color-palette');

  function randomPalette() {
    function generateArray() {
      let array = [];
      for (let index = 0; index < 14; index += 1) {
        array.push(Math.ceil((Math.random() * 14)));
      }
      return array;
    }
    let numbersArray = generateArray();
    let count = 0;
    while (count !== numbersArray.length) {
      numbersArray = generateArray();
      count = 0;
      for (let index = 0; index < numbersArray.length; index += 1) {
        for (let indexNum = 0; indexNum < numbersArray.length; indexNum += 1) {
          if (numbersArray[index] === numbersArray[indexNum]) {
            count += 1;
          }
        }
      }
    }
    return numbersArray;
  }
  const numbersArray = randomPalette();

  for (let index = 0; index < 4; index += 1) {
    if (index === 0) {
      const createDiv = document.createElement('div');
      paletteSection.appendChild(createDiv);
      createDiv.className = 'color selected';
      createDiv.style.backgroundColor = 'black';
    } else {
      const createDiv = document.createElement('div');
      paletteSection.appendChild(createDiv);
      createDiv.className = 'color';
      createDiv.style.backgroundColor = colors[numbersArray[index] - 1];
    }
  }
}
paletteGenerator();

function tableGenerator(canvasSize) {
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
