window.onload = function () {

  function criarPalheta() {
    const cores = ['black', 'pink', 'purple', 'blue', 'yellow'];
    const pegarPaleta = document.getElementById('color-palette');
    console.log(pegarPaleta)
    for (let i = 0; i < cores.length; i += 1) {
      const div = document.createElement('div');
      div.style.backgroundColor = cores[i];
      div.className = 'color';
      pegarPaleta.appendChild(div);
    }
  }

  criarPalheta();
}