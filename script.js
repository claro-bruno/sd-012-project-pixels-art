// Desafio 1, 2 e 3
const containerPixelBoard = document.getElementById('pixel-board');
const minValue = 5;

function paletteColor() {
  const divPai = document.getElementById('color-palette');
  const colorPalette = ['black', gerarCor(1), gerarCor(1), gerarCor(1)];
  for (let index = 0; index < colorPalette.length; index += 1) {
    const div2 = document.createElement('div');
    div2.className = 'color';
    div2.style.backgroundColor = colorPalette[index];
    divPai.appendChild(div2);
  }
}
paletteColor();
// Desafio 4 e 5
function pixel() {
  const pixel = document.createElement('div'); 
  pixel.className = 'pixel'; // adiciona a classe 'pixel'.
  return pixel; // retorna 01 pixel que é uma div.
}
function containerLineDiv() {
  const containerLineDiv = document.createElement('div'); // cria uma div que será uma (01) linha.
  containerLineDiv.className = 'linha-do-pixel'; // cria classe para para containerLineDiv.
  return containerLineDiv; // retorna 01 linha que é uma div
}
function pixelBoardParent(base) { // loop para crias as 5 linhas antes de preencher. Cada linha é uma div.
 // captura a div com Id=pixel-board, que será Pai dos elementos do loop
  for (let index = 0; index < base; index += 1) {
    containerPixelBoard.appendChild(containerLineDiv()); // cada containerLineDiv será filha de containerPixelBoard
  }
}
function lineDivParent(containerLineDiv) { // loop para que pixel se torne filha do pai containerLineDiv
  for (let indexPixel = 0; indexPixel < containerLineDiv.length; indexPixel += 1) {
    containerLineDiv[indexPixel].appendChild(pixel());
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

function eventoSelected() {
  const coresDaPaleta = document.getElementsByClassName('color');
  for (let index = 0; index < coresDaPaleta.length; index += 1) {
    coresDaPaleta[index].addEventListener('click', selectOneObject);
  }
}
eventoSelected();

function selectOneObject(event) {
  const removeSelec = document.querySelector('.selected');
  removeSelec.classList.remove('selected');
  event.target.classList.add('selected');
}

// Desafio 8
function corSelected(event) {
  const objetoAlvo = event.target;
  const colorRequired = document.querySelector('.selected').style.backgroundColor; //será capturado a cor de background do objeto selicionado.
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
  const containerPixelBoard = document.getElementById('pixel-board');
  containerPixelBoard.innerHTML = '';
  pixelBoardParent(getInputBoardSize);
  quadrados(getInputBoardSize);
}

// Requisito 11
function novoQuadro() {
  let getInputBoardSize = document.querySelector('#board-size').value ;
  console.log(getInputBoardSize);
  if (getInputBoardSize > 4 && getInputBoardSize < 51) {
    // se atender, leve o valor de input na função que recebe o tamanho da grade
    comporGradeComInput(getInputBoardSize);
  } else {
    alert('Board inválido!');
  }
  if (getInputBoardSize < 5) {
    minValue;
  }
  if (getInputBoardSize > 50) {
    comporGradeComInput(50);
  }
}

document.addEventListener('click', novoQuadro)

//Requisito 12
function gerarCor(opacidade = 1) {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}
