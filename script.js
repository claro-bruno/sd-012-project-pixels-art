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

creatingPixelDivs(medidas);

const paletteColors = document.querySelectorAll('.color'); 

function addingEventListenersToPalette(elements) {
    for (let index = 0; index < elements.length; index += 1) {
        elements[index].addEventListener('click', function(event) {
            for (index = 0; index < elements.length; index += 1) {
            elements[index].classList.remove('selected');    
            }
            event.target.classList.toggle('selected');
        });
    }   
}

addingEventListenersToPalette(paletteColors);

const pixels = document.querySelectorAll('.pixel');

function addingEventListenersToPixels(elements) {
    for (let index = 0; index < elements.length; index += 1) {
        elements[index].addEventListener('click', function(event) {
            const selectedColor = document.querySelector('.selected');
            let selectedBackgroundColor = window.getComputedStyle(selectedColor, null).getPropertyValue('background-color');
            event.target.style.backgroundColor = selectedBackgroundColor;
            console.log(selectedColor.style.backgroundColor);
            event.target.classList.toggle('teste');
        });
    }
}

addingEventListenersToPixels(pixels);

function clearingTheBoard(elements) {
    const button = document.querySelector('#clear-board');
    button.addEventListener('click', function() {
        for (let index = 0; index < elements.length; index += 1) {
            elements[index].style.backgroundColor = 'white';
        }
    });
}

clearingTheBoard(pixels);

window.onload = function () {
    const blackColor = document.querySelector('#first-color');
    blackColor.classList.add('selected');
};
