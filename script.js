function createBoxPalette() {
  let containerPalette = document.querySelector('#color-palette');
  for (let create = 1; create <= 4; create += 1) {
    let createBoxColor = document.createElement('div');
    createBoxColor.classList.add('color');

    containerPalette.appendChild(createBoxColor);
  }
}
createBoxPalette();

function addBgcPalette(color1, color2, color3) {
  let boxOptionPalette = document.querySelectorAll('.color');
  for (let box = 0; box < boxOptionPalette.length; box += 1) {
    if (color1 === color2 || color2 === color3 || color1 === color3) {
      return 'erro';
    } else if (color1 === 'white' || color2 === 'white' || color3 === 'white') {
      return 'erro';
    } else {
      if (boxOptionPalette[0]) {
        boxOptionPalette[0].style.backgroundColor = 'rgb(0,0,0)';
      }
      if (boxOptionPalette[1]) {
        boxOptionPalette[1].style.backgroundColor = color1;
      }
      if (boxOptionPalette[2]) {
        boxOptionPalette[2].style.backgroundColor = color2;
      }
      if (boxOptionPalette[3]) {
        boxOptionPalette[3].style.backgroundColor = color3;
      }
    }
  }
}
addBgcPalette('darkorange', 'green', 'orange');

function addpixels() {
  let containerPixels = document.querySelector('#pixel-board');
  for (let create = 1; create <= 25; create += 1) {
    let createPixels = document.createElement('div');
    createPixels.classList.add('pixel');
    containerPixels.appendChild(createPixels);
  }
}
addpixels();

window.onload = function classSelected() {
  let palette = document.querySelectorAll('.color');
  if (palette[0].style.backgroundColor == 'rgb(0, 0, 0)') {
    palette[0].classList.add('selected');
  }
  for (let index = 0; index < palette.length; index += 1) {
    palette[index].addEventListener('click', function (event) {
      let elementSelected = document.querySelector('.selected');
      elementSelected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
};

let colorSelected;
let paletteColors = document.querySelectorAll('.color', '.selected');
//define a cor selecionada
for (let index = 0; index < paletteColors.length; index += 1) {
  paletteColors[index].addEventListener('click', function (event) {
    colorSelected = event.target.style.backgroundColor;
  });
}

let pixels = document.querySelectorAll('.pixel');
//pinta o pixel com a cor selecionada
for (let pix = 0; pix < pixels.length; pix += 1) {
  pixels[pix].addEventListener('click', function (event) {
    if (colorSelected == null) {
      event.target.style.backgroundColor = 'rgb(0,0,0)';
    } else {
      event.target.style.backgroundColor = colorSelected;
    }
  });
}
