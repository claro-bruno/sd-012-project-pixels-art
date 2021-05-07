function grid(pixelLine) {
  const pixels = document.getElementById('pixel-board');
  for (let index = 0; index < pixelLine; index += 1) {
    const createDivLine = document.createElement('tr');
    createDivLine.classList.add('line');
    pixels.appendChild(createDivLine);

    for (let indexcolumn = 0; indexcolumn < pixelLine; indexcolumn += 1) {
      const createDivColumn = document.createElement('td');
      createDivColumn.classList.add('pixel');
      createDivLine.appendChild(createDivColumn);
    }
  }
}
const pixelLine = 5;
grid(pixelLine);

const elementColor = document.getElementsByClassName('color');
function colorSelect(event) {
  const select = document.querySelector('.selected');
  select.classList.remove('selected');
  event.target.classList.add('selected');
}
for (let index = 0; index < elementColor.length; index += 1) {
  elementColor[index].addEventListener('click', colorSelect);
}

const black = document.getElementById('black').style.backgroundColor = 'black';
const red = document.getElementById('red').style.backgroundColor = '#FF0000';
const blue = document.getElementById('blue').style.backgroundColor = '#0000FF';
const green = document.getElementById('green').style.backgroundColor = '#008000';

const pixed = document.querySelectorAll('.pixel');
function paintPixel(eventPaint) {
  const paint = document.querySelector('.selected');
  eventPaint.target.style.backgroundColor = paint.style.backgroundColor;
}

for (let indexPixels = 0; indexPixels < pixed.length; indexPixels += 1) {
  pixed[indexPixels].addEventListener('click', paintPixel);
}
