const quadroPixel = document.querySelector('#pixel-board');
const pixel = document.getElementById('#pixel-board');
const cores = document.querySelectorAll('.color');

function criaLinhas(linhas) {
    for (let index = 0; index < linhas; index += 1) {
        const linhaDiv = document.createElement('div');
        linhaDiv.classList.add('linha');
        document.getElementById('pixel-board').appendChild(linhaDiv);
    };   
};
criaLinhas(5);

function criaColunas(colunas) {
    let linhas = document.querySelectorAll('.linha');
    for (let linha of linhas) {
        for (let index = 0; index < colunas; index += 1) {
            const colunaDiv = document.createElement('div');
            colunaDiv.classList.add('pixel');
            linha.appendChild(colunaDiv);
        };
    };
};
criaColunas(5);

function selectedEvent(click) {
    let removeSelected = document.querySelector('.selected');
    removeSelected.classList.remove('selected'); 
    click.target.classList.add('selected');
};


function clickEvent() {
    for (let index = 0; index < cores.length; index += 1 ) {
    cores[index].addEventListener('click', selectedEvent);
    };
};
clickEvent();

function geraCor() {
    
}