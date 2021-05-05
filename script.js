let pixelBoard = document.querySelector('#pixel-board');

for (let index = 1; index <= 5; index +=1) {
    for (let index2 = 1; index2 <= 5; index2 +=1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';
        pixel.style.width = '40px';
        pixel.style.height = '40px';
        pixel.style.padding = '0px';
        pixel.style.margin = '0px';
        pixel.style.border = '1px solid black';
        pixel.style.position = 'relative';
        pixel.style.display = 'inline-block';
        pixel.style.verticalAlign = 'top';
        pixelBoard.appendChild(pixel);
    }
}

document.querySelector('.color').classList.add('selected');

function selecionaCor (event) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
} document.querySelector('#color-palette').addEventListener('click', selecionaCor);