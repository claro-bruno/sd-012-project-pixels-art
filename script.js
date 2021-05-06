function createLines(total) {
    const all = total;
    const pixelBoard = document.querySelector('#pixel-board');
    for (let index = 0; index < all; index += 1){
      const pixelLine = document.createElement('div');
      pixelLine.className = 'pixelLine';
      pixelBoard.appendChild(pixelLine);
        for (let index = 0; index < all; index += 1) {
          const pixel = document.createElement('div');
          pixel.className = 'pixel';
          pixelLine.appendChild(pixel);
        };
    };   
};
createLines(5);

