document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
document.getElementsByClassName('color')[2].style.backgroundColor = 'blue';
document.getElementsByClassName('color')[3].style.backgroundColor = 'green';

window.onload = function(){

    
    let getBoard = document.querySelector('#pixel-board');
    

    function pixelBoard(size){
        
        for(let row = 0; row < size; row += 1){
            let pixelRow = document.createElement('div');

            pixelRow.className = 'pixel-row';
            getBoard.appendChild(pixelRow);

            for(let cell = 0; cell < size; cell += 1){
                let coluna = document.createElement('div');
                coluna.className = 'pixel';
                pixelRow.appendChild(coluna);
    
            }

        }
    }
    pixelBoard(5);
}
