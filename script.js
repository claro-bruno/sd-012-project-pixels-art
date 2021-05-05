const palColor = document.getElementById('color-palette');
const palleteColor = document.querySelectorAll('.color');
const arrayColor = ['rgb(0,0,0','rgb(255,0,0','rgb(0,255,0','rgb(0,0,255'];
const matrixPlace = document.getElementById('section3');
const clearBoardBtn = document.getElementById('clear-board');
const inputNBtn = document.querySelector('#generate-board');

function fillPalletColors() {
  palleteColor[0].classList.add('selected')
  for (index = 0; index < palleteColor.length; index +=1) {
      palleteColor[index].style.backgroundColor = arrayColor[index];
  }
}
fillPalletColors();

palColor.addEventListener('click',selectColor);

function selectColor (event) {
  let selection = event.target;
  console.log(event.target.style.backgroundColor);
  for (index = 0; index < palleteColor.length; index +=1) {
    if (palleteColor[index]===selection) { palleteColor[index].classList.add('selected'); }
    if (palleteColor[index]!==selection) { palleteColor[index].classList.remove('selected'); }
  }
}

function createMatrix (N) {
  let pixelsMatrix = document.createElement('table');
  pixelsMatrix.id='pixel-board'
  for (indexL = 0; indexL < N ; indexL += 1) {
    pixelsMatrix.insertRow(indexL);
    for (indexW = 0; indexW < N ; indexW += 1) {
      pixelsMatrix.firstChild.children[indexL].insertCell(indexW).className='pixel';
    }
  }
  matrixPlace.appendChild(pixelsMatrix);
}
createMatrix(5);

let pixMatrixChg = document.getElementById('pixel-board');
pixMatrixChg.addEventListener('click',changeColor);

function changeColor (event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

clearBoardBtn.addEventListener('click',clearBoard);

function clearBoard () {
  for ( index = 0; index < document.querySelectorAll('.pixel').length ; index += 1) {
    document.querySelectorAll('.pixel')[index].style.backgroundColor = 'rgb(255,255,255)';
    console.log(document.querySelectorAll('.pixel')[index]);
  }
}


//

inputNBtn.addEventListener('click',newMatrixN);

function newMatrixN () {
  let inputN = document.querySelector('#board-size').value;
  if (inputN == '') { alert('Board inválido!'); return; }
  if (inputN < 5) { inputN = 5; }
  if (inputN > 50) { inputN = 50; }
  document.getElementById('pixel-board').remove();
  createMatrix(inputN);
}