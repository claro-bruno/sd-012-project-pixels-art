const quadroPixel = document.querySelector('#pixel-board');
const pixel = '<div id="pixel-board"></div>';
const colores = document.querySelectorAll('.color');

function criaQuadro(tamanho) {
    for (let index = 0; index < tamanho; index += 1) {
        quadroDiv.innerHTML += pixel;
    }
}       