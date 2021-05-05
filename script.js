function select(e) {
  const currentColor = document.querySelector('.selected');
  currentColor.classList.remove('selected');

  const colorSelect = e.target;
  colorSelect.classList.add('selected');
}

function paint(e) {
  const currentPixel = e.target;
  const currentColor = document.querySelector('.selected').style.backgroundColor;
  currentPixel.style.backgroundColor = currentColor;
}

function clear() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const color = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const button = document.getElementById('clear-board');

for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener('click', select);
}

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', paint);
}

button.addEventListener('click', clear);
