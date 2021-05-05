const pixelBoard = document.querySelector('#pixel-board');

let medidas = 5;

function creatingPixelDivsCollumns(row, colunas) {
    for (let column = 1; column <= colunas; column += 1) {
        const divColumn = document.createElement('div');
        divColumn.classList.add('pixel');
        divColumn.classList.add('td');
        row.appendChild(divColumn);
    }
}

function creatingPixelDivs(linhas) {
    for (let row = 1; row <= linhas; row += 1) {
        const divRow = document.createElement('div');
        divRow.classList.add('tr');
        pixelBoard.appendChild(divRow);
        creatingPixelDivsCollumns(divRow, linhas);
    }
}

const paletteColors = document.querySelectorAll('.color'); 

function addingEventListenersToPalette(elements) {
    for (index = 0; index < elements.length; index += 1) {
        elements[index].addEventListener('click', function(event) {
            for (index = 0; index < elements.length; index += 1) {
            elements[index].classList.remove('selected');    
            }
            event.target.classList.toggle('selected');
        });
    }   
}

addingEventListenersToPalette(paletteColors);

creatingPixelDivs(medidas);

window.onload = function() {
    const blackColor = document.querySelector('#first-color');
    blackColor.classList.add('selected');
};
