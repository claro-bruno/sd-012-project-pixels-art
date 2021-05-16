const containerPixelBoard = document.getElementById('pixel-board');




//Requisito 12
function gerarCor(opacidade = 1) {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}

//Requisito 2
function paletteColor() {
  const divPai = document.getElementById('color-palette');
  const colorPalette = ['black', gerarCor(1), gerarCor(1), gerarCor(1)];
  for (let index = 0; index < colorPalette.length; index += 1) {
    const div2 = document.createElement('div');
    div2.className = 'color';
    div2.style.backgroundColor = colorPalette[index];
    div2.addEventListener('click', function (event) {
      const removeSelec = document.querySelector('.selected');
      removeSelec.classList.remove('selected');
      event.target.classList.add('selected');
    });
    divPai.appendChild(div2);
    const coresPaleta = document.getElementsByClassName('color');
    coresPaleta[0].classList.add('selected');
  }
}
paletteColor();

function criarPixel() {
  const pixel = document.createElement('div'); 
  pixel.className = 'pixel';
  pixel.addEventListener('click', function (event) {
    const alvo = event.target;
    alvo.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  });
  return pixel;
}
criarPixel();

function variosPixels(tamanho) {
  for (let index = 0; index < tamanho *tamanho; index += 1) {
    containerPixelBoard.appendChild(criarPixel());
  }
  containerPixelBoard.style.width = (tamanho * 40) +'px';
}
variosPixels(5);

const botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click', () => {
  const arrayPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < arrayPixel.length; index += 1) {
    arrayPixel[index].style.backgroundColor = 'white';
  }
});

const botaoVqv = document.getElementById('generate-board');
botaoVqv.addEventListener('click', () => {
  let tamanho = document.getElementById('board-size').value;
  if (tamanho <= 50 && tamanho > 4) {
    tamanho = tamanho;
    containerPixelBoard.innerHTML = '';
    variosPixels(tamanho);
    } else if (tamanho > 50) {
    tamanho = 50;
    containerPixelBoard.innerHTML = '';
    variosPixels(tamanho);
  } else {
    window.alert('Board inválido!');
  }
});