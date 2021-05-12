// Criar o Pixel Board;

const generateBtn = document.getElementById('generate-board');
const inputSize = document.getElementById('box-size');

function pixelsColumn(pixelsNumber) {
    const pixelBoard = document.getElementById('pixel-board');
    const pixelBoardWidth = pixelsNumber * 42;
    pixelBoard.style.width = pixelBoardWidth + 'px';
    for (let index = 0; index < pixelsNumber * pixelsNumber; index ++) {
      const createPixel = document.createElement('div');
      createPixel.classList.add('pixel');
      pixelBoard.appendChild(createPixel);
    }
  }

  pixelsColumn(5);

generateBtn.addEventListener('click', () => {
  console.log(inputSize.value);
  if (inputSize.value < 0) {
    alert('ERRO! Adicione um valor maior que 0');
  } else if (inputSize.value > 50) {
    alert('ERRO! Adicione um valor menor ou igual a 50');
  } else {
    pixelsColumn(inputSize.value);
  }
});

// Seleção De Cores;

const palette = document.getElementById('color-palette');
const color = document.getElementsByClassName('color');

palette.addEventListener('click', (event) => {
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
});


const pixels = document.getElementsByClassName('pixel');

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', () => {
    pixels[index].style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    console.log(document.querySelector('.selected').style.backgroundColor);
  });
};

// Limpa o Quadro;

const clearBtn = document.getElementsByTagName('button')[1];

clearBtn.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});
