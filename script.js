// Definição de constantes verificadas para a atividade
const palColor = document.getElementById('color-palette');
const palleteColor = document.querySelectorAll('.color');
const matrixPlace = document.getElementById('section4');
const clearBoardBtn = document.getElementById('clear-board');
const inputNBtn = document.querySelector('#generate-board');
const palletsize = 4;
const pixelB = 'pixel-board';

// Gera um random de 0 - 255 para o RGB (cor) da paleta.
function randomRgb() {
  return (Math.floor(Math.random() * 256));
}

// Coloca as cores para dentro dos elementos da paleta de cor.
function fillPalletColors(arrayColor) {
  palleteColor[0].classList.add('selected');
  for (let index = 0; index < palleteColor.length; index += 1) {
    palleteColor[index].style.backgroundColor = arrayColor[index];
  }
}

// "Inicio" da construção da página.
function pageStart() {
  const arrayColor = ['rgb(0,0,0'];
  for (let index = 1; index < palletsize; index += 1) {
    const randomColor = `rgb(${randomRgb()},${randomRgb()},${randomRgb()})`;
    console.log(randomColor);
    arrayColor.push(randomColor);
  }
  fillPalletColors(arrayColor);
}
window.onload = pageStart;

// Código para seleção de cor de preenchimento para o quadro de "pixels".
function selectColor(event) {
  const selection = event.target;
  for (let index = 0; index < palleteColor.length; index += 1) {
    if (palleteColor[index] === selection) { palleteColor[index].classList.add('selected'); }
    if (palleteColor[index] !== selection) { palleteColor[index].classList.remove('selected'); }
  }
}
palColor.addEventListener('click', selectColor);

// Criar quadro de "pixels" 5x5 - pode ser implementado no windows.onload
function createMatrix(N) {
  const pixelsMatrix = document.createElement('table');
  pixelsMatrix.id = pixelB;
  for (let indexL = 0; indexL < N; indexL += 1) {
    pixelsMatrix.insertRow(indexL);
    for (let indexW = 0; indexW < N; indexW += 1) {
      pixelsMatrix.firstChild.children[indexL].insertCell(indexW).className = 'pixel';
    }
  }
  matrixPlace.appendChild(pixelsMatrix);
}
createMatrix(5);

// Mudar cor do "pixel" conforme cor do pallet selecionada.
function changeColor(event) {
  const selection = event.target;
  selection.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}
const pixMatrixChg = document.getElementById(pixelB);
pixMatrixChg.addEventListener('click', changeColor);

// Limpar (colocar branco) no quadro de "pixels".
function clearBoard() {
  for (let index = 0; index < document.querySelectorAll('.pixel').length; index += 1) {
    document.querySelectorAll('.pixel')[index].style.backgroundColor = 'rgb(255,255,255)';
    console.log(document.querySelectorAll('.pixel')[index]);
  }
}
clearBoardBtn.addEventListener('click', clearBoard);

// Alterar tamanho do quadro de "pixels".
function newMatrixN() {
  let inputN = document.querySelector('#board-size').value;
  if (inputN === '') { alert('Board inválido!'); return; }
  if (inputN < 5) { inputN = 5; }
  if (inputN > 50) { inputN = 50; }
  document.getElementById(pixelB).remove();
  createMatrix(inputN);
}
inputNBtn.addEventListener('click', newMatrixN);
