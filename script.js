function randomNumber(range) {
  return Math.floor(Math.random() * range);
}

function generateRGB() {
  const color = 'rgb(' + randomNumber(256) + ',' + randomNumber(256) + ',' + randomNumber(256) + ')';
  if (color === 'rgb(255,255,255)') {
    return generateRGB();
  }
  return color;
}

function comparePixelBackgroundColor(pixel1, pixel2) {
  if (pixel1.style.backgroundColor === pixel2.style.backgroundColor) {
    return true;
  }
  return false;
}

function makePixel(element, classes) {
  const pixel = document.createElement(element);
  pixel.className = classes;
  return pixel;
}

function createPalette() {
  const pallet = document.querySelector('#color-palette');

  for (let index = 1; index < 4; index += 1) {
    const pixels = pallet.children;
    pixels[index].style.backgroundColor = generateRGB();
    if (comparePixelBackgroundColor(pixels[index - 1], pixels[index])) {
      index -= 1;
    }
  }
}

function createBoard(number) {
  const pixelBoard = document.querySelector('#pixel-board');
  const tableBody = document.createElement('tbody');

  for (let index = 0; index < number; index += 1) {
    const row = document.createElement('tr');
    for (let index2 = 0; index2 < number; index2 += 1) {
      const line = makePixel('td', 'pixel');
      row.appendChild(line);
    }
    tableBody.appendChild(row);
  }
  pixelBoard.appendChild(tableBody);
}

function addPixelsEvents(colors, pixels) {
  for (const pixel of pixels) {
    pixel.addEventListener('click', function () {
      for (let index = 0; index < colors.length; index += 1) {
        if (colors[index].classList.contains('selected')) {
          pixel.style.backgroundColor = colors[index].style.backgroundColor;
          if (colors[index].id === 'color1') {
            pixel.style.backgroundColor = 'black';
          }
        }
      }
    });
  }
}

function addEvents() {
  const pallet = document.querySelector('#color-palette');
  const colors = pallet.children;
  const pixels = document.querySelectorAll('.pixel');
  for (const color of colors) {
    color.addEventListener('click', function () {
      for (let index = 0; index < 4; index += 1) {
        if (colors[index].classList.contains('selected')) {
          colors[index].classList.remove('selected');
        }
      }
      for (let index = 0; index < 4; index += 1) {
        if (colors[index].id === color.id) {
          colors[index].classList.add('selected');
        }
      }
    });
  }
  addPixelsEvents(colors, pixels);
}

createPalette();
createBoard(5);
addEvents();
