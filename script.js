function creatBoard(linha) {
  const tamanho = linha * linha;
  for (let index = 0; index < tamanho; index++) {
    const div = document.createElement('div');
    div.className = 'pixel';
    const pai = document.getElementById('pixel-board');
    pai.appendChild(div);
  }
}
creatBoard(5);

const colorBlackSelected = document.getElementsByClassName('color')[0];
colorBlackSelected.className = 'color selected';

let backgrColor = 'black';
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('color')) {
    const classesSelecionadas = document.querySelector('.selected');
    classesSelecionadas.classList.remove('selected');
    const selecionada = event.target;
    selecionada.classList.add('selected');
    backgrColor = selecionada.style.backgroundColor;
  }
}, false);

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('pixel')) {
    const pixelSelecionado = event.target;
    pixelSelecionado.style.backgroundColor = backgrColor;
  }
}, false);
