const quadroPixel = document.querySelector('#pixel-board');

for (let indexUl = 1; indexUl <= 5; indexUl += 1) {
  const divQuadro = document.createElement('div');
  divQuadro.className = 'ulDivPixel';
  quadroPixel.appendChild(divQuadro);
  for (let index = 1; index <= 5; index += 1) {
    const liPixelQuadro = document.createElement('li');
    liPixelQuadro.className = 'pixel';
    divQuadro.appendChild(liPixelQuadro);
  }
}

const corInicial = document.querySelector('#black');
document.createElement.className = 'selected';
corInicial.classList.add('selected');
