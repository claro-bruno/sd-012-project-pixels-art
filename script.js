let quadrado = document.getElementById('pixel-board');
function board(num) {
    for (let index = 0; index < num; index += 1) {
        let linha = document.createElement('div')
        quadrado.appendChild = (linha);
        for (let index = 0; index < num; index +=1) {
        let coluna = document.createElement('div')
        coluna.className = 'pixel';
        quadro.appendChild(coluna);
    }
  }
}
board(5);