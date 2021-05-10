function createPixels(size) {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
  for (let row = 0; row < size; row += 1) {
    const rowPixel = document.createElement('div');

    for (let column = 0; column < size; column += 1) {
      const columnPixel = document.createElement('div');
      rowPixel.className = 'row-pixel';
      columnPixel.className = 'pixel';
      rowPixel.appendChild(columnPixel);
    }
    pixelBoard.appendChild(rowPixel);
  }
}

createPixels(5);

function setClassSelectd(event) {
  const colorsSelected = document.querySelectorAll('.selected');
  for (let index = 0; index < colorsSelected.length; index += 1) {
    colorsSelected[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
const palletColors = document.querySelector('#color-palette');
palletColors.addEventListener('click', setClassSelectd);