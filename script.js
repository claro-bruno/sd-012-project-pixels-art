window.onload = function () {

const quadroPixels = document.getElementById('pixel-board');

for (let linha = 0; linha < 5; linha += 1) {
  const linhaPixels = document.createElement('div');
  const colunaPixels = document.createElement('div');
  quadroPixels.appendChild(linhaPixels);
  quadroPixels.appendChild(colunaPixels);
  for (let coluna = 0; coluna < 5; coluna += 1) {
    const eachPixel= document.createElement('div');
    eachPixel.classList.add('pixel');
    quadroPixels.appendChild(eachPixel);
}
}
}