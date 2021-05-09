let paletaCores = document.getElementsByClassName('color');

paletaCores[0].style.backgroundColor = 'black';
paletaCores[0].classList.add('selected');
paletaCores[1].style.backgroundColor = 'yellow';
paletaCores[2].style.backgroundColor = '#ff9933';
paletaCores[3].style.backgroundColor = '#009933';
   
let colunas = 5;
let linhas = 5;

for (let index = 0; index < linhas; index += 1){
    const divQuadroBranco = document.getElementById('pixel-board');
    const criarDiv = document.createElement('div');

    criarDiv.className = ('pixel-line');
    divQuadroBranco.appendChild(criarDiv);
        
    for (let indice = 0; indice < colunas; indice += 1) {
    const divPixelLine = document.querySelector('#pixel-board').lastElementChild;

    const criarDivPixel = document.createElement('div');

    criarDivPixel.className = ('pixel');
    divPixelLine.appendChild(criarDivPixel);
    }   
}

for (let index = 0; index < paletaCores.length; index += 1){
    paletaCores[index].addEventListener('click', function(evento){
        for (let index2 = 0; index2 < paletaCores.length; index2 += 1){
            paletaCores[index2].className = 'color';
        }
        evento.target.classList.add('selected');
    });
}


let pixelBranco = document.getElementsByClassName('pixel');

for (let index = 0; index < pixelBranco.length; index += 1){
    pixelBranco[index].addEventListener('click', function(evento){
     let corSelecionada = document.querySelector('.selected');
 
     evento.target.style.backgroundColor = corSelecionada.style.backgroundColor;
    });
}

let botaoClearBoard = document.getElementById('clear-board');

    botaoClearBoard.addEventListener('click', limparQuadro);

    function limparQuadro(){
    for (let index = 0; index < pixelBranco.length; index += 1){
        pixelBranco[index].style.backgroundColor = 'rgb(255, 255, 255)'
    }
}
