let boardSize = 5;
let allCollors = document.querySelector('#color-palette');
let pixelBoard = document.querySelector('#pixel-board');  


setBackgroundColor();
createBoard(boardSize);
selectColor();
changePixelColor();



function setBackgroundColor() {
    document.getElementById('first-div').style.backgroundColor = "black";
    document.getElementById('second-div').style.backgroundColor = getRandomColor();
    document.getElementById('third-div').style.backgroundColor = getRandomColor();
    document.getElementById('fourth-div').style.backgroundColor = getRandomColor();
}


function createBoard(boardSize) {

    for (let index = 0; index < boardSize; index += 1) {
        let line = document.createElement('div');
        line.className = 'line';
        document.querySelector('#pixel-board').appendChild(line);
    
    
        for (let index2 = 0; index2 < boardSize; index2 += 1) {
            
        let box = document.createElement('div');
        box.className = 'pixel';
        line.appendChild(box); 
        }        
    }
}
function selectColor() {
    
    allCollors.addEventListener('click', function(event) {
        let replaced = document.querySelector('.selected');
        replaced.classList.remove('selected');
        let clicked = event.target;
        clicked.classList.add('selected');  
    })
}


function changePixelColor() {
      
        
        pixelBoard.addEventListener('click', function(event) {
                   
            let selectedColor = document.querySelector('.selected').style.backgroundColor;
            event.target.style.backgroundColor = selectedColor;
            
    })
}    

function resetColors() {

    window.location.reload(false);
}

function userBoardSize() {
    newBoardSize = document.querySelector('#board-size').value;
    
    if(newBoardSize < 5) {
        boardSize = 5;
    } else if (newBoardSize > 50) {
        boardSize = 50;
    } else {
        boardSize = newBoardSize;
    }

    if(newBoardSize.length === 0){
        alert("Board inválido!");
    } else {
        while(pixelBoard.firstChild) {
            pixelBoard.removeChild(pixelBoard.lastChild);
        }   
        createBoard(boardSize);
    }
}


function getRandomColor() { // encontrei no https://stackoverflow.com/questions/1484506/random-color-generator
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
