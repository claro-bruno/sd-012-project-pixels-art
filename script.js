window.onload = paletaDeCores();

quadroBranco();

function paletaDeCores (){

const paletaCores = document.getElementsByClassName('color');

paletaCores[0].style.backgroundColor = 'black';
paletaCores[1].style.backgroundColor = 'yellow';
paletaCores[2].style.backgroundColor = '#ff9933';
paletaCores[3].style.backgroundColor = '#009933';

// Função para gerar os pixels do quadro branco //

function quadroBranco (){
    let alturaQuadro = 5;
    let larguraQuadro = 5;
    const quadroBranco = document.getElementById('pixel-board');
    const criarPixel = document.createElement('div');


    for (let index = 0; index < alturaQuadro; index += 1) {
    for (let indice = 0; indice < larguraQuadro; indice += 1) {
        criarPixel.className('pixel')
        quadroBranco.appendChild(criarPixel);
    }
}

}
}