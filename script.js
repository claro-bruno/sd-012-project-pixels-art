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

function pixelMark () {
  let canvas = document.getElementsByClassName('pixel');
  for (let index = 0; index < canvas.length; index += 1) {
    canvas[index].id = 'pixel' + index;
  }
}
pixelMark();

function paint (event) {
  if (event.target.classList.contains('pixel')) {
    //let brushColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
  } 
}

let frame = document.querySelector('#pixel-board');

frame.addEventListener('click', paint);