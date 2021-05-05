const quadro = document.querySelector('#pixel-board');
const pixel = '<div class="pixel"> <div>';
function criaQuadro() {
  for (let i = 0; i < 25; i += 1) {
    quadro.innerHTML += pixel;
  }
}
criaQuadro();
