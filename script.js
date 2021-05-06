window.onload = function () {

const pixelBoard = document.getElementById('pixel-board');
nPixels = 5;

for (let i = 0; i < nPixels; i += 1) {
  const pixelLines = document.createElement('div');
  pixelLines.classList.add('pixel-line');
  pixelBoard.appendChild(pixelLines);
  const eachPixel = document.createElement('div');
  eachPixel.classList.add('pixel');
  pixelLines.appendChild(eachPixel);
  for (let i2 = 1; i2 < nPixels; i2 += 1) {
    const eachPixel = document.createElement('div');
    eachPixel.classList.add('pixel');
    pixelLines.appendChild(eachPixel);
  }
}
}