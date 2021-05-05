let capturaColorPalette = document.querySelector('#color-palette');

//Exercício 2 e 3:

let paleta = ['black', 'red', 'blue', 'yellow'];
function lista (array) {
    for(index = 0; index < paleta.length; index += 1) {
        let criarLi = document.createElement('li');
        capturaColorPalette.appendChild(criarLi);
        criarLi.className = 'color';
        let capturaLi = document.getElementsByTagName('li')
        if(array[index] === 'black'){
            capturaLi[index].style.backgroundColor = array[index];
        } else if(array[index] === 'red'){
            capturaLi[index].style.backgroundColor = array[index];
        } else if(array[index] === 'blue'){
            capturaLi[index].style.backgroundColor = array[index];
        } else if(array[index] === 'yellow'){
            capturaLi[index].style.backgroundColor = array[index];
        }
    }
}

lista (paleta)

//===========================================================

// Exercício 4:

let contadorLinha = 0;
let contadorColuna = 0;
let quadroPixel = document.createElement('section');
    document.body.appendChild(quadroPixel);
    quadroPixel.id = 'pixel-board'
function criaQuadro (tamanho) {
    for(let index = 0; index < tamanho; index += 1) {
        let linhaQuadro = document.createElement('div');
        quadroPixel.appendChild(linhaQuadro);
        for (let index = 0; index < tamanho; index += 1) {
            let criaPixels = document.createElement('li')
            linhaQuadro.appendChild(criaPixels);
            criaPixels.className = 'pixel';
        }
    }
   
}

criaQuadro(5)

//===========================================================

// Exercício 6: (O 5 foi feito via css)

let selectBlack = document.querySelector('.color');
selectBlack.classList.add('selected');

//===========================================================

// Exercício 7:
function captureColor (){
    let getColor = document.getElementsByClassName('color');
    let selectColor = document.querySelector('.selected');

    for(let index = 0; index < getColor.length; index += 1) {
        selectColor.classList.remove('selected');
        getColor[index].addEventListener('click', function (event) {
            for(let index = 0; index < getColor.length; index += 1) {
                getColor[index].classList.remove('selected')
            }
            event.target.classList.add('selected')
        })
    }
    getColor[0].classList.add('selected')
}

captureColor()