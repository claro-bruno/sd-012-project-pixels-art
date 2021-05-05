const pixelBoard = document.querySelector('#pixel-board');
const color = document.querySelectorAll('.color');

function addNewLine(j) {
  if (j === 4) {
    const br = document.createElement('br');
    pixelBoard.appendChild(br);
  }
}

function createBoard() {
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelBoard.appendChild(pixel);
      addNewLine(j);
    }
  }
}

createBoard();

for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    color[i].classList.add('selected');
    console.log(color[i]);
  });
}
