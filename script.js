const quadroPixel = document.querySelector('#pixel-board');

for (let indexUl = 1; indexUl <= 5; indexUl += 1) {
  const ulPixelQuadro = document.createElement('ul');
  ulPixelQuadro.className = 'ulPixel';
  quadroPixel.appendChild(ulPixelQuadro);
  for (let index = 1; index <= 5; index += 1) {
    const liPixelQuadro = document.createElement('li');
    liPixelQuadro.className = 'pixel';
    ulPixelQuadro.appendChild(liPixelQuadro);
  }
}

