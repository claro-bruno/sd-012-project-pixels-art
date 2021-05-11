function createPixels(size) {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
  for (let row = 0; row < size; row += 1) {
    const rowPixel = document.createElement('div');

    for (let column = 0; column < size; column += 1) {
      const columnPixel = document.createElement('div');
      rowPixel.className = 'row-pixel';
      columnPixel.className = 'pixel';
      rowPixel.appendChild(columnPixel);
    }
    pixelBoard.appendChild(rowPixel);
  }
}

createPixels(5);

function setClassSelectd(event) {
  const colorsSelected = document.querySelectorAll('.selected');
  for (let index = 0; index < colorsSelected.length; index += 1) {
    colorsSelected[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
const palletColors = document.querySelector('#color-palette');
palletColors.addEventListener('click', setClassSelectd);


function paintPixel(event) {
  // Descobrir qual a cor da paleta de cores está selecionada
  // Descobrir uma forma de pegar o background color do elemento que tem a classe selected
  // Adicionar este backgroundColor ao elemento clicado
  // event.target
  const storageColor = document.querySelector('.selected').id;
  if (event.target.className === 'pixel') {
    const getColor = event.target;
    getColor.style.backgroundColor = storageColor;
  }
}
const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', paintPixel);

const clearBtn = document.querySelector('#clear-board');
clearBtn.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});