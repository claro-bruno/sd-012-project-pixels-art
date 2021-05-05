function paletteGenerator() {
  let colors = ['black', 'green', 'blue', 'orange'];
  let paletteSection = document.getElementById('color-palette');


  for (let index = 0; index < colors.length; index += 1) {
    let createDiv = document.createElement('div');
    paletteSection.appendChild(createDiv);
    createDiv.className = 'color';
    createDiv.style.backgroundColor = colors[index];
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
    for (let index = 0; index < canvasSize; index += 1){
      let tableData = document.createElement('td');
      tableRows[indexLine].appendChild(tableData);
      tableData.className = 'pixel';
      tableData.style.backgroundColor = 'white';
    }
  }



}
tableGenerator();