const color = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const button = document.getElementById('clear-board');

function select(e) {
  const currentColor = document.querySelector('.selected');
  currentColor.classList.remove('selected');

  const colorSelect = e.target;
  colorSelect.classList.add('selected');
}

function paint(e) {
  const currentPixel = e.target;
  const currentColorEl = document.querySelector('.selected');
  const currentColor = window.getComputedStyle(currentColorEl).backgroundColor;
  currentPixel.style.backgroundColor = currentColor;
}

function clear() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener('click', select);
}

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', paint);
}

button.addEventListener('click', clear);

// function genTable() {
//   const number = 40;
//   const table = document.getElementById('pixel-board');

//   for (let i = 0; i < number; i += 1) {
//     const tr = document.createElement('tr');
//     for (let j = 0; j < number; j += 1) {
//       const th = document.createElement('th');
//       th.className = 'pixel';
//       tr.appendChild(th);
//     }
//     table.appendChild(tr);
//   }
// }

// genTable();
