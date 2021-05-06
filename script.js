function createLines(total) {
  const all = total;
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < all; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixelLine';
    pixelBoard.appendChild(pixelLine);
    for (let index1 = 0; index1 < all; index1 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
    }
  }
}
createLines(5);

const color1 = document.getElementsByClassName('color')[0];
const color2 = document.getElementsByClassName('color')[1];
const color3 = document.getElementsByClassName('color')[2];
const color4 = document.getElementsByClassName('color')[3];

function colorChange(event) {
  const color = document.querySelector('.selected');
  color.classList.remove('selected');
  event.target.classList.add('selected');
}
color1.addEventListener('click', colorChange);
color2.addEventListener('click', colorChange);
color3.addEventListener('click', colorChange);
color4.addEventListener('click', colorChange);

function colorPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', (event) => {
      const paletteSelected = document.querySelector('.selected');
      const pixelClick = event.target;
      const color = paletteSelected.style.backgroundColor;
      pixelClick.style.backgroundColor = color;
      console.log(paletteSelected.style.backgroundColor);
    });
  }
}
colorPixel();
