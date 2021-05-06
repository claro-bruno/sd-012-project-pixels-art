const cores = ['black', 'blue', 'red', 'green'];



function fillBoard (lines, columns) {

    for(let index = 0; index < lines; index += 1) {
        const line_position = document.createElement('div');
        line_position.className = 'line';
        document.querySelector('#pixel-board').appendChild(line_position);

        fillLineBoard(line_position,columns);
    }
}

function fillLineBoard(line,columns) {
    for(let index = 0 ; index < columns; index += 1) {
        const column_position = document.createElement('div');
        column_position.className = 'pixel';
        column_position.addEventListener('click',fillBoxSelected)
        line.appendChild(column_position);
    }
}

fillBoard (5, 5);

let sectionColours =  document.querySelectorAll('.color');

for(let indexColors = 0; indexColors < sectionColours.length; indexColors += 1) {
    sectionColours[indexColors].addEventListener('click',  fillCheckSelected)
}

function fillCheckSelected(event) {
    
    //console.log(window.getComputedStyle(event.target).getPropertyValue('background-color'));
    const removeSelected = document.querySelector('.selected');
    removeSelected.classList.remove('selected');
    event.target.classList.add('selected');
}

function fillBoxSelected(event) {
    
    let boxColorSelected = document.querySelector('.selected');
    let colorSelected = window.getComputedStyle(boxColorSelected).getPropertyValue('background-color');
    event.target.style.backgroundColor = colorSelected;
    //console.log(window.getComputedStyle(event.target).getPropertyValue('background-color'));
}

let btnClean = document.querySelector('#clear-board');
btnClean.addEventListener('click', setCleanBoard);

function setCleanBoard(event) {
    let selectedPixels = document.querySelectorAll('.pixel');
    for(let index = 0; index < selectedPixels.length; index += 1) {
        selectedPixels[index].style.backgroundColor = 'white';
    }
}

let btnGenerateBoard = document.querySelector('#generate-board');
btnGenerateBoard.addEventListener('click', setBoard);

function setBoard(event) {
    let newSize = document.querySelector('#board-size').value;
    if(!Number(newSize)) {
        alert('Board inválido!');
    } else if (newSize<5) {
        document.querySelector('#board-size').value = 5;
    } else if (newSize>50) {
        document.querySelector('#board-size').value = 50;
    } else {
        let pixelBoard = document.querySelector('#pixel-board');
        pixelBoard.innerHTML = '';
        fillBoard(Number(newSize),Number(newSize));
    }
       
}
        

    

