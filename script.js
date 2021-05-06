function selectedColorPrimary() {
  const onloadBlackColor = document.querySelector('div', '.color');
  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    onloadBlackColor.classList.add('selected');
    pixels[index].addEventListener('click', () => {
      pixels[index].style.backgroundColor = 'black';
    });
  }
}

// Trecho de código retirado de: https://jsfiddle.net/ntxuc69a/9/
function selectColor() {
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', () => {
      const selectedColor = document.querySelector('.selected');
      if (selectedColor) {
        selectedColor.classList.remove('selected');
      }
      colors[index].classList.add('selected');
    }, false);
  }
}

function paintPixels() {
  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => {
      const selectedColor = document.querySelector('.selected');
      const cssObj = window.getComputedStyle(selectedColor);
      pixels[index].style.backgroundColor = cssObj.getPropertyValue('background-color');
    });
  }
}

function clearPixels() {
  const pixels = document.querySelectorAll('.pixel');
  const button = document.getElementById('clear-board');

  for (let index = 0; index < pixels.length; index += 1) {
    button.addEventListener('click', () => {
      pixels[index].style.backgroundColor = 'white';
    });
  }
}

window.onload = () => {
  selectedColorPrimary();
  selectColor();
  paintPixels();
  clearPixels();
};
