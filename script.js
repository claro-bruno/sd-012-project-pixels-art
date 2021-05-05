window.onload = function () {
    let pixelBoard = document.getElementById('pixel-board');
    let boardersNumberOfPixels = 25;
//Seta as cores iniciais da paleta de cores
    const color1 = document.getElementsByClassName('color')[0];
    color1.style.backgroundColor = 'black';
    const color2 = document.getElementsByClassName('color')[1];
    color2.style.backgroundColor = 'red';
    const color3 = document.getElementsByClassName('color')[2];
    color3.style.backgroundColor = 'blue';
    const color4 = document.getElementsByClassName('color')[3];
    color4.style.backgroundColor = 'green';
//Cria dinamicamente os pixels do pixel-board
    function createPixels () {
        pixelBoard.style.maxWidth = '500px';
        for (let index = 0; index < boardersNumberOfPixels; index += 1) {
            let pixelCreate = document.createElement('div');
            pixelCreate.className = 'pixel';
            pixelBoard.appendChild(pixelCreate)
        }
    }
    createPixels();














}
