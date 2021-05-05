const coresPaleta = document.querySelectorAll('.color');
console.log(coresPaleta);
coresPaleta[0].style.backgroundColor = 'black';
coresPaleta[1].style.backgroundColor = 'red';
coresPaleta[2].style.backgroundColor = 'blue';
coresPaleta[3].style.backgroundColor = 'green';

const pixelBoard = document.querySelector('#pixel-board');
function criaPixels (valor) {
  for (let index = 0; index < valor; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
    for (let index = 1; index < valor; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoard.appendChild(pixel);
    }
  }
}

criaPixels (5);
