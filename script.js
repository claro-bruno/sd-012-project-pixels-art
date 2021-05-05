//Requisitos 02 e 03
let colors = ['black', 'green', 'blue', 'red'];

for (let color = 0; color < colors.length; color += 1) {
    let box = document.createElement('div');
    box.className = 'color';
    box.style.width = '40px';
    box.style.height = '40px';
    box.style.border = '1px solid black';
    box.style.display = 'inline-block';
    box.style.backgroundColor = colors[color];
    document.querySelector('#color-palette').appendChild(box);
}

//Requisitos 04 e 05
function createBoard(board) {

    for (let size = 0; size < board; size += 1) {
        let line = document.createElement('div');
        line.className = 'line';
        line.style.lineHeight = 0;
        document.querySelector('#pixel-board').appendChild(line);
    }

    for (let pixel = 0; pixel < board; pixel += 1) {
        for (let pixel = 0; pixel < board; pixel += 1) {
            let box = document.createElement('div');
            box.className = 'pixel';
            box.style.width = '40px';
            box.style.height = '40px';
            box.style.border = '1px solid black';
            box.style.display = 'inline-block';
            box.style.backgroundColor = 'white';
            document.querySelectorAll('.line')[pixel].appendChild(box);
        }
    }
}

createBoard (5);

//Requisito 06
document.querySelector('#color-palette').firstElementChild.className = 'color selected';

//Requisito 07
document.body.addEventListener('click', function (event) {
    if (event.target.className === 'color' ){
        document.querySelector('.selected').className = 'color';
        event.target.className = 'color selected';
    }
})

//Requisito 08
document.body.addEventListener('click', function (event) {
    if (event.target.className === 'pixel') {
        event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    }
})

//Requisito 09
document.querySelector('#clear-board').addEventListener('click', function () {
    let pixelBoard = document.querySelectorAll('.pixel');
    for (let box = 0; box < pixelBoard.length; box += 1) {
        pixelBoard[box].style.backgroundColor = 'white';
    }
})

//Requisito 10
document.querySelector('#generate-board').addEventListener('click', function () {
    let newBoard = document.querySelector('#board-size').value;
    let oldBoard = document.querySelectorAll('.line');
    let board = document.querySelector('#pixel-board');
    if (newBoard === '') {
        alert('Board inválido!');
    } else {
        for (let index = 0; index < oldBoard.length; index +=1) {
            board.removeChild(board.lastElementChild);
        }
        createBoard(newBoard);
    } 
})