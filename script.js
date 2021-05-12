


function pixelsColumn(pixelsNumber) {
    const pixelBoard = document.getElementById('pixel-board');
    for (let index = 0; index < pixelsNumber; index ++) {
      const createPixel = document.createElement('div');
      createPixel.classList.add('pixel');
      pixelBoard.appendChild(createPixel);
    }
  };
  pixelsColumn(25);
  
