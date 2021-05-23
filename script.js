window.onload = pixelBoard;

function pixelBoard(){ 
    for (let index = 0; index < 25; index += 1) {       
        const pxBoard = document.querySelector('#pixel-board');
        let pxl = document.createElement('div');
        pxl.className = 'pixel';
        pxBoard.appendChild(pxl); 
               
    }    
}