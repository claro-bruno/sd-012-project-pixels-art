function paletaDeCores() {
    let colorPalette = document.getElementById('color-palette');
    let paleta;

    let cores = ['black', 'orange', 'red', 'green']

    for (let index = 0; index < cores.length; index += 1) {
        paleta = document.createElement('div');
        paleta.className= 'color';
        paleta.style.backgroundColor = cores[index];
        colorPalette.appendChild(paleta);
    }
}
paletaDeCores();


function quadroDePixels() {
    let pixelBoard = document.getElementById('pixel-board');
   

    for (let index = 0; index < 5; index += 1) {
       let linha = document.createElement('div');
       linha.className = 'line';
       document.querySelector('#pixel-board').appendChild(linha); 
        
    }

    for (let index = 0; index < 5; index += 1) {
        for (let index = 0; index < 5; index += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            document.querySelectorAll('.line')[index].appendChild(pixel)
        }
    }
}
quadroDePixels(); 

document.getElementsByClassName('color')[0].classList.add('selected');