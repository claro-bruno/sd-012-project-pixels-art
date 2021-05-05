window.onload = initialBrush;

function initialBrush () {
  document.querySelector('#color1').classList.add('selected');
}

function changeBrush (event) {
  if (event.target.classList.contains('color')) {
    let palette = document.getElementsByClassName('color');
    for (let index = 0; index < palette.length; index += 1) {
      palette[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}

let colorPalette = document.querySelector('#color-palette');

colorPalette.addEventListener('click', changeBrush);