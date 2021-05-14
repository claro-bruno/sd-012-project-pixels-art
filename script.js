// Desafio 1, 2 e 3
const containerPixelBoard = document.getElementById('pixel-board');
const getInputBoardSize = document.querySelector('#board-size');

function paletteColor() {
  const divPai = document.getElementById('color-palette');
  const colorPalette = ['black', 'red', 'blue', 'yellow'];
  for (let index = 0; index < colorPalette.length; index += 1) {
    const div2 = document.createElement('div');
    div2.className = 'color';
    div2.style.backgroundColor = colorPalette[index];
    divPai.appendChild(div2);
  }
}
paletteColor();
// Desafio 4 e 5
function pixelFunction() {
  const pixel = document.createElement('div'); // cria 01 (um) quadrado (pixel) usando createElement.
  pixel.className = 'pixel'; // adiciona a classe 'pixel'.
  return pixel; // retorna 01 pixel que é uma div.
}
function containerLineDivFunction() {
  const containerLineDiv = document.createElement('div'); // cria uma div que será uma (01) linha.
  containerLineDiv.className = 'linha-do-pixel'; // cria classe para para containerLineDiv.
  return containerLineDiv; // retorna 01 linha que é uma div
}
function pixelBoardParent(base) {
  for (let index = 0; index < base; index += 1) {
    containerPixelBoard.appendChild(containerLineDivFunction());
  }
}
function lineDivParent(containerLineDiv) { // loop para que pixel se torne filha do pai containerLineDiv
  for (let indexPixel = 0; indexPixel < containerLineDiv.length; indexPixel += 1) {
    containerLineDiv[indexPixel].appendChild(pixelFunction());
  }
}
function quadrados(size) {
  const containerLineDiv = document.getElementsByClassName('linha-do-pixel');
  for (let index = 0; index < containerLineDiv.length; index += 1) {
    if (index < size) {
      lineDivParent(containerLineDiv); // linhas para conter os pixels
    }
  }
}
function comporGrade(tamanho) {
  containerPixelBoard.innerHTML = '';
  pixelBoardParent(tamanho);
  quadrados(tamanho);
}
comporGrade(5);

// desafio 6
function corPaleta() {
  const coresPaleta = document.getElementsByClassName('color');
  for (let index = 0; index < coresPaleta.length; index += 1) {
    coresPaleta[index].classList.remove('selected');
  }
  coresPaleta[0].classList.add('selected');
}
corPaleta();

// Desafio 7

function selectOneObject(event) {
  const removeSelec = document.querySelector('.selected');
  removeSelec.classList.remove('selected');
  event.target.classList.add('selected');
}

function eventoSelected() {
  const coresDaPaleta = document.getElementsByClassName('color');
  for (let index = 0; index < coresDaPaleta.length; index += 1) {
    coresDaPaleta[index].addEventListener('click', selectOneObject);
  }
}
eventoSelected();

// Desafio 8
function corSelected(event) {
  const objetoAlvo = event.target;
  const colorRequired = document.querySelector('.selected').style.backgroundColor; // será capturado a cor de background do objeto selicionado.
  objetoAlvo.style.backgroundColor = colorRequired;
}

function corAtribuida() {
  const DivDePixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < DivDePixels.length; index += 1) {
    DivDePixels[index].addEventListener('click', corSelected);
  }
}
corAtribuida();

// Desafio 9

// const buttonErase = document.getElementById('clear-board')
function limparPixels(event) {
  const pixelParaLimpar = document.querySelectorAll('.pixel');
  if (event.target.id === 'clear-board') {
    for (let index = 0; index < pixelParaLimpar.length; index += 1) {
      pixelParaLimpar[index].style.backgroundColor = 'white';
    }
  }
}
document.addEventListener('click', limparPixels);

// Requisito 10 - Faça o quadro de pixels ter seu tamanho definido pelo usuário.

function comporGradeComInput(getInputBoardSize) {
  containerPixelBoard.innerHTML = '';
  pixelBoardParent(getInputBoardSize);
  quadrados(getInputBoardSize);
}
comporGradeComInput(getInputBoardSize);

function novoQuadro() {
  if (getInputBoardSize.value > 4 && getInputBoardSize.value < 51) {
    // se atender, leve o valor de input na função que recebe o tamanho da grade
    comporGradeComInput(getInputBoardSize);

  }

}

document.addEventListener('click', novoQuadro);
