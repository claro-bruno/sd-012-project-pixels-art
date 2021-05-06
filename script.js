let boardSize = 5;

createBoard(boardSize);

function createBoard (boardSize) {

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

let allCollors = document.querySelector('#color-palette');

function selectedColor(event) { //Através da contribuição do colega André Moreno no Slack conheci a propriedade target event.
    let replaced = document.querySelector('.selected');
    replaced.classList.remove('.selected');
    let clicked = event.target;
    clicked.classList.add('.selected');        
}

allCollors.addEventListener('click', selectedColor());

