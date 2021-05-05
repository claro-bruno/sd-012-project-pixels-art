function createPixelBaordElement() {
    const pixelBoard = document.getElementById('pixel-board');
    for (let index = 0; index < 25; index += 1) {
      const createPixel = document.createElement('div');
      createPixel.className = 'pixel';
      pixelBoard.appendChild(createPixel);
    }
  }

  createPixelBaordElement();
