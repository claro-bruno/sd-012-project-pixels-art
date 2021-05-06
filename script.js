const pixelBoard = document.querySelector('#pixel-board');
let element = 5;

function creatingPixelDivs (linhas) {
    for (let row = 1; row <= linhas; row += 1) {
        const divRow = document.createElement('div');
        pixelBoard.appendChild(divRow);
        creatingPixelDivsCollumns(divRow, linhas);
    }
}

function creatingPixelDivsCollumns(row, colunas) {
    for (let column = 1; column <= colunas; column += 1) {
        const divColumn = document.createElement('div');
        divColumn.classList.add('pixel');
        row.appendChild(divColumn);
    }
}
creatingPixelDivs(element);

// window.onload = function () {
//     let button = document.getElementById('clear-board');

//     button.addEventListener('click', evento);

// }

// function evento() {

// }