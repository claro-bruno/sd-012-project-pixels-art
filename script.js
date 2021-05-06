const gerarPaletaDeCorAleatoria = () => {
  const caixaDeCorDaPaleta = document.querySelectorAll('.color');

  caixaDeCorDaPaleta[0].style.backgroundColor = 'black';

  for (let index = 1; index < caixaDeCorDaPaleta.length; index += 1) {
    const randomColor = [];
    for (let indexCor = 0; indexCor <= 2; indexCor += 1) {
      randomColor.push(Math.round(Math.random() * 255));
    }
    caixaDeCorDaPaleta[index].style.backgroundColor = `rgb(${randomColor})`;
  }
};

const gerarTelaDePintura = (tamanho) => {
  const areaDaTelaDePintura = document.querySelector('#pixel-board');

  for (let altura = 1; altura <= tamanho; altura += 1) {
    const linhaDaAreaDaPintura = document.createElement('div');
    linhaDaAreaDaPintura.className = 'alturaDaTelaDePintura';
    areaDaTelaDePintura.appendChild(linhaDaAreaDaPintura);
  }
  const linhaDePixel = document.querySelectorAll('.alturaDaTelaDePintura');

  for (let indexDeLinha = 0; indexDeLinha < linhaDePixel.length; indexDeLinha += 1) {
    let numPixel = 1;
    while (numPixel <= tamanho) {
      numPixel += 1;
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linhaDePixel[indexDeLinha].appendChild(pixel);
    }
  }
};

const mudarTamanhoTelaDePintura = () => {
  const inputDoTamanhoDaTela = document.querySelector('#board-size').value;

  if (inputDoTamanhoDaTela >= 5 && inputDoTamanhoDaTela <= 50) {
    const sessaoPixelBoard = document.getElementById('pixel-board');

    while (sessaoPixelBoard.firstChild) {
      sessaoPixelBoard.removeChild(sessaoPixelBoard.firstChild);
    }
    gerarTelaDePintura(inputDoTamanhoDaTela);
  } else {
    window.alert('Board inválido!');
  }
};

const limparTelaDePintura = () => {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
};

const selecionarCor = (elementoClicado) => {
  const paletaDeCor = document.querySelector('.selected');
  paletaDeCor.classList.remove('selected');
  elementoClicado.className += ' selected';
};

const pintarPixel = () => {
  const listaDePixel = document.querySelectorAll('.pixel');

  for (let index = 0; index < listaDePixel.length; index += 1) {
    listaDePixel[index].addEventListener('click', () => {
      const corSelecionada = document.querySelector('.selected').style.backgroundColor;
      listaDePixel[index].style.backgroundColor = corSelecionada;
    });
  }
};
