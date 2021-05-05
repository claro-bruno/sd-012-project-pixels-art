const coresPaleta = document.querySelectorAll('.color');
console.log(coresPaleta);
coresPaleta[0].style.backgroundColor = 'black';
coresPaleta[1].style.backgroundColor = 'red';
coresPaleta[2].style.backgroundColor = 'blue';
coresPaleta[3].style.backgroundColor = 'green';

const quantidadePixels = 5;
const pixelBoard = document.querySelector('#pixel-board');
for (let index = 0; index < quantidadePixels * quantidadePixels; index += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}
