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
    const pixel = document.createElement('div');
    pixel.className = 'alturaDaTelaDePintura';
    areaDaTelaDePintura.appendChild(pixel);
  }

  const linha = document.querySelectorAll('.alturaDaTelaDePintura');

  for (let index = 0; index <= linha.length; index += 1) {
    for (let largura = 1; largura <= tamanho; largura += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linha[index].appendChild(pixel);
    }
  }
};

const mudarTamanhoTelaDePintura = () => {
  const inputDoTamanhoDaTela = document.querySelector('#tamanhoTelaDePintura').value;
  const sessaoPixelBoard = document.querySelector('#pixel-Board');
  const filhoAlturaDaTelaDePintura = document.querySelectorAll('.alturaDaTelaDePintura');

  sessaoPixelBoard.removeChild(filhoAlturaDaTelaDePintura);

  gerarTelaDePintura(inputDoTamanhoDaTela);
};
