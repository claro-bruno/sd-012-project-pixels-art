//ex2
function paletaCores(nomeCores) {
    let getContainer = document.querySelector('#color-palette');
    for (let index = 0; index < nomeCores.length; index += 1) {
        let newColor = document.createElement('div');
        newColor.className = 'color';
        newColor.style.backgroundColor = nomeCores[index];
        //newColor.innerText = nomeCores[index]; 
        //newColor.style.width = '500px';
        //newColor.style.height = '100px';
        getContainer.appendChild(newColor);
    }
}

let cores = ['blue', 'green', 'red', 'black'];

let corSubs = [];
//ex3
function organizaPreto (coresE) {
for (let i = 1; i < cores.length; i += 1) {
    if (coresE[0] !== 'black') {
        corSubs = cores[0];
        coresE[0] = 'black';
    }
    if (coresE[i] === 'black') {
        coresE[i] = corSubs
    }
}
}

organizaPreto(cores);
paletaCores(cores);

//ex 4
let larguraQuadro = 5;
let comprimentoQuadro = 5;

function criaQuadro (largura, comprimento) {
    let getBoard = document.querySelector('#pixel-board');

    for (let iC = 0; iC < comprimento; iC += 1) {
    for (let iL = 0; iL < largura; iL += 1) {
        let criaPixel = document.createElement('div');
        criaPixel.className = 'pixel';
        criaPixel.style.backgroundColor = 'white';
        criaPixel.style.width = '30px';
        criaPixel.style.height = '30px';
        criaPixel.style.display = 'inline-block';
        getBoard.appendChild(criaPixel);
    } 
    let quebraLinha = document.createElement('br');
    getBoard.appendChild(quebraLinha)
    }
}

criaQuadro(larguraQuadro, comprimentoQuadro);


