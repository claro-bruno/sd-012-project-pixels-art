const colorPalete = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const clearBtn = document.getElementById('clear-board');

window.onload = function() {
    function checkRepeatedColor(color, repeatColor) {
        for (let index = 0; index < repeatColor.length; index += 1) {
        if (color === repeatColor[index]) return 'used';
        }
    }  

    function randomPalette(colors) {
        repeatColor = [];
        for(let index = 0; index < 4; index += 1) {
            const randomColor = Math.floor(Math.random() * (colors.length - 1)); 
            const color = colors[randomColor]
            if(index === 0) {
                const divBlack = document.createElement('div');
                divBlack.className = 'color selected';
                divBlack.innerText = 'black';
                colorPalete.appendChild(divBlack);
            } else if(checkRepeatedColor(color, repeatColor) === 'used'){
                index -= 1;
            }else {
                const newColorDiv = document.createElement('div');
                newColorDiv.className = 'color';
                newColorDiv.style.backgroundColor = color;
                newColorDiv.innerHTML = color;
                colorPalete.appendChild(newColorDiv);
                repeatColor.push(color)
                console.log(newColorDiv)
            }    
        }
    }
    randomPalette(['#F4EBD0', '#405d27', '#034f84', '#c94c4c', '#FFAEBC', '#F8D210', '#2FF3E0', '#B68D40', '#122620']);
}    

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