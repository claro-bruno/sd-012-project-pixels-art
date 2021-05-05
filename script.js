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

const color = document.getElementsByClassName('color');
const pixel = document.getElementsByClassName('pixel');

for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener('click', select);
}

for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', paint);
}
