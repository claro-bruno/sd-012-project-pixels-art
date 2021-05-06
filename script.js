const colorPalete = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const colors = ['#000', '#405d27', '#034f84', '#c94c4c'];
const clearBtn = document.getElementById('clear-board');



function colorSelector() {
    for(let index = 0; index < colors.length; index+=1) {
        const eachColor = document.createElement('div');
        eachColor.className = 'color';
        const color = colors[index];
        eachColor.innerText = color;
        colorPalete.appendChild(eachColor);
        colorPalete.firstChild.className = 'color selected';
    };
    
}
colorSelector();    

function drawingBoarder(board) {    
    const boardWidth = board * 40 + board * 2 + 1;
    pixelBoard.style.width = `${boardWidth}px`
    for(let index = 0; index < board; index+=1) {
        for(let index2 = 0; index2 < board; index2+=1) {   
            const eachPixel = document.createElement('div');
            eachPixel.className = 'pixel';
            pixelBoard.appendChild(eachPixel);
        }
    };
}    
drawingBoarder(5);

function removeBoard() {
    const board = document.querySelector('#pixel-board');
    const pixelDivs = document.querySelectorAll('.pixel');

    for(let index = 0; index < pixelDivs.length; index +=1) {
        board.removeChild(pixelDivs[index]);
    }
}

function changeBorderNum() {
    const inputValue = document.getElementById('board-size');
    const inputBtn = document.getElementById('generate-board');
    
    inputBtn.addEventListener('click', (e) => {
        if(inputValue.value === '') {
            alert('Board inválido!');
        } else if (inputValue.value < 5) {
            removeBoard();
            drawingBoarder(5)
        } else if (inputValue.value > 50) {
            removeBoard();
            drawingBoarder(50)
        } else {
            removeBoard();
            drawingBoarder(inputValue.value);
        }
    })
}
changeBorderNum();

const colorDraw = document.querySelectorAll('.pixel');

colorDraw.forEach((pixel, idx) => {
    pixel.addEventListener('click', () => {
        pixel.style.backgroundColor = 'black';
    })
})

document.body.addEventListener('click', function (event) {
    if (event.target.className === 'color' ){
        document.querySelector('.selected').className = 'color';
        event.target.className = 'color selected';
        const painting = event.target.innerHTML;
        
        colorDraw.forEach((pixel, idx) => {
            pixel.addEventListener('click', () => {
                pixel.style.backgroundColor = painting;
            })
        })
    }
})    

function clearBoard() {
    clearBtn.addEventListener('click', () => {
        for(let index = 0; index < colorDraw.length; index +=1) {
            colorDraw[index].style.backgroundColor = 'white';
        }
    })
}
clearBoard();