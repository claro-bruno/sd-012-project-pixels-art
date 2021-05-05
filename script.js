const pixelBoard = document.querySelector('#pixel-board');

for (let i = 0; i < 5; i += 1) {
  for (let j = 0; j < 5; j += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
    if (j === 4) {
      const br = document.createElement('br');
      pixelBoard.appendChild(br);
    }
  }
}
