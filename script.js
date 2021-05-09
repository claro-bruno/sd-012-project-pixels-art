const quadroPixel = document.querySelector('#pixel-board');
const pixel = document.getElementById('#pixel-board');
const cores = document.querySelectorAll('.color');

function criaLinhas(linhas) {
    for (let index = 0; index < linhas; index += 1) {
        let linhaDiv = document.createElement('div');
        linhaDiv.classList.add('linha');
        document.getElementById('pixel-board').appendChild(linhaDiv);
    };   
};
criaLinhas(5);

function criaColunas(colunas) {
    let linhas = document.querySelectorAll('.linha');
    for (let linha of linhas) {
        for (let index = 0; index < colunas; index += 1) {
            let colunaDiv = document.createElement('div');
            colunaDiv.classList.add('pixel');
            linha.appendChild(colunaDiv);
        };
    };
};
criaColunas(5);

function selecionaEvento(evento) {
    let removeSelected = document.querySelector('.selected');
    removeSelected.classList.remove('selected'); 
    evento.target.classList.add('selected');
};

function clickEvento() {
    for (let index = 0; index < cores.length; index += 1 ) {
    cores[index].addEventListener('click', selecionaEvento);
    };
};
clickEvento();

let pixelCor = document.getElementsByClassName("pixel");

function alteraCor(evento) {
    let selecionaCor = document.querySelector('.selected');
    let corClick = window.getComputedStyle(selecionaCor);
    evento.target.style.backgroundColor = corClick.getPropertyValue('background-color');
};
    for(element of pixelCor) {
        element.addEventListener('click', alteraCor);
    };

function limparQuadro() {
    for(element of pixelCor) {
    element.style.backgroundColor = 'white';
    };
};

let button = document.getElementById('clear-board');
button.addEventListener('click', limparQuadro);