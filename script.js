window.onload = function () {

  function criarPalheta() {
    const cores = ['black', 'pink', 'purple', 'blue'];
    const pegarPaleta = document.getElementById('color-palette');
    for (let i = 0; i < cores.length; i += 1) {
      const div = document.createElement('div');
      div.style.backgroundColor = cores[i];
      if (i === 0) {
        div.className = 'color selected';
      } else {
        div.className = 'color';
      }
      pegarPaleta.appendChild(div);
    }
  }

  criarPalheta();

  function criarPixelBoard(base) {
    const pegarPixelBoard = document.getElementById('pixel-board');
    for (let index = 0; index < base*base; index += 1) {
      const div = document.createElement('div');
      div.className = 'pixel';
      pegarPixelBoard.appendChild(div);
    }
  }

  criarPixelBoard(5);

  function selecionarCores() {
    const coresPaleta = document.querySelectorAll('.color');
    let indexSelecionado = 0;
    for (let i = 0; i < coresPaleta.length; i += 1) {
      let cor = coresPaleta[i];
      cor.addEventListener('click', function (event) {

        if (event.target.className === 'color') {
          resetSelect();
          event.target.className = 'color selected';
        } 
      })
    }
  }

  function resetSelect() {
    const cores = document.querySelectorAll('.color');
    for (let i = 0; i < cores.length; i += 1) {
      cores[i].className = 'color';
    }
  }

  selecionarCores();
}