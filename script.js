let boardSize = 5;

createBoard(boardSize);

changeSelected();


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



function changeSelected() { 
    let firstColor = document.querySelector('#first-div');
    let secondColor = document.querySelector('#second-div');
    let thirdColor = document.querySelector('#third-div');
    let fourthColor = document.querySelector('#fourth-div');


    firstColor.addEventListener('click', selectedColor(event));
    secondColor.addEventListener('click', selectedColor(event));
    thirdColor.addEventListener('click', selectedColor(event));
    fourthColor.addEventListener('click', selectedColor(event));

    function selectedColor(event){ //Através da contribuição do colega André Moreno no Slack conheci a propriedade target event.
        let replaced = document.querySelector('.selected');
        replaced.classList.remove('.selected');
        event.target.classList.add('selected');
    }

    
}
