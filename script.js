const colors = document.querySelectorAll('.color');
const color1 = document.getElementById('black');
const color2 = document.getElementById('burlywood');
const color3 = document.getElementById('teal');
const color4 = document.getElementById('goldenrod');

function removeColor() {
  const colorPallete = document.querySelectorAll('.color');
  for (let index = 0; index < colorPallete.length; index += 1) {
    colorPallete[index].classList.remove('selected');
  }
}

