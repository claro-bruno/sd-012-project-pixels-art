const colorPalette = document.querySelector('#color-palette');
const colors = ['black selected', 'red', 'green', 'blue'];
let ident = '';

for (let index = 0; index < colors.length; index += 1) {
  const div = document.createElement('div');
  div.className = 'color ' + colors[index];
  div.id = index + 30;
  colorPalette.appendChild(div);
}

for (let index = 1; index <= 25; index += 1) {
  const div = document.createElement('div');
  div.className = 'pixel';
  div.id = index;

  if (index > 20) {
    ident = '#secao5';
  } else if (index > 15) {
    ident = '#secao4';
  } else if (index > 10) {
    ident = '#secao3';
  } else if (index > 5) {
    ident = '#secao2';
  } else {
    ident = '#secao1';
  }
  const pixelBoard = document.querySelector(ident);
  pixelBoard.appendChild(div);
}

// Algoritmo do colega Caio Takeshi.
let paleta = document.getElementsByClassName('color');
for (let index = 0; index < paleta.length; index += 1) {
  paleta[index].addEventListener('click', function(event) {
    let removeSelection = document.querySelector('.selected');
    removeSelection.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

const button = document.getElementById('clear-board');
button.addEventListener('click', () => {
    const allPixels = document.getElementsByClassName('pixel');
    for (let pixel of allPixels) {
      pixel.style.backgroundColor = 'white';
    }
});

// Algoritmo do colega Talles Carneiro.
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('pixel')) {
    const selectedElement = document.querySelector('.selected');
    const selectedBackgroundColor = window.getComputedStyle(selectedElement).getPropertyValue('background-color');
    const initialColor = 'white';
    if (event.target.style.backgroundColor === selectedBackgroundColor) {
      event.target.style.backgroundColor = initialColor;
    } else {
      event.target.style.backgroundColor = selectedBackgroundColor;
    };
  };
});
