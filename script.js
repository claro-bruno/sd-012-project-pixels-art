window.onload = function () {
    function randomColor () {
        let hexadecimal = '0123456789ABCDEF';
        let color = '#'
        for (let index = 0; index < 6; index +=1) {
            color += hexadecimal[Math.floor(Math.random()*16)]
        }
        return color;
    }

    let colors = ['black'];
    for (let quantity = 0; quantity < 3; quantity += 1) {
        colors.push(randomColor());
    }

    for (let color = 0; color < colors.length; color += 1) {
        let box = document.createElement('div');
        box.className = 'color';
        box.style.backgroundColor = colors[color];
        document.querySelector('#color-palette').appendChild(box);
    }

    function createBoard(board) {

        for (let size = 0; size < board; size += 1) {
            let line = document.createElement('div');
            line.className = 'line';
            document.querySelector('#pixel-board').appendChild(line);
        }

        for (let pixel = 0; pixel < board; pixel += 1) {
            for (let pixel = 0; pixel < board; pixel += 1) {
                let box = document.createElement('div');
                box.className = 'pixel';
                document.querySelectorAll('.line')[pixel].appendChild(box);
            }
        }
    }

    createBoard (5);

    document.querySelector('#color-palette').firstElementChild.className = 'color selected';

    document.body.addEventListener('click', function (event) {
        if (event.target.className === 'color' ){
            document.querySelector('.selected').className = 'color';
            event.target.className = 'color selected';
        }
    })

    document.body.addEventListener('click', function (event) {
        if (event.target.className === 'pixel') {
            event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
        }
    })

    document.querySelector('#clear-board').addEventListener('click', function () {
        let pixelBoard = document.querySelectorAll('.pixel');
        for (let box = 0; box < pixelBoard.length; box += 1) {
            pixelBoard[box].style.backgroundColor = 'white';
        }
    })

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
            if (newBoard <= 5) {
                createBoard(5);
            } else if (newBoard >= 50) {
                createBoard(50);
            } else {
                createBoard(newBoard); 
            } 
        } 
    })
}