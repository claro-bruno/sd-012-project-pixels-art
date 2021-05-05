const pixelBoard = document.getElementById('pixel-board');

for(let index = 0; index < 25; index+=1) {
    const eachPixel = document.createElement('div');
    const pixel = index;
    eachPixel.innerText = pixel;
    eachPixel.className = 'pixel';
    pixelBoard.appendChild(eachPixel);
}