window.onload = function () {

  function criarPalheta() {
    const cores = ['black', 'pink', 'purple', 'blue'];
    const pegarPaleta = document.getElementById('color-palette');
    for (let i = 0; i < cores.length; i += 1) {
      const div = document.createElement('div');
      div.style.backgroundColor = cores[i];
      div.className = 'color';
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
}