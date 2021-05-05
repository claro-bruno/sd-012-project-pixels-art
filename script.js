createPallete(4);
createPixelBoard(25);

function createPallete(numberOfColors) {
    let colorPallete = document.getElementById('color-palette');

    for (let index = 0; index < numberOfColors; index += 1) {
        let color = document.createElement('div');
        if (index === 0) {
            color.className = 'color selected';
        } else {
            color.className = 'color';
        }
        color.addEventListener('click', colorSelector);
        colorPallete.appendChild(color);
    }

    setPalleteColors();
}

function setPalleteColors() {
    let palleteColors = document.querySelectorAll('.color');
    let colors = ['black', 'red', 'yellow', 'green'];
    
    for (let index = 0; index < palleteColors.length; index += 1) {
        palleteColors[index].style.backgroundColor = colors[index];        
    }
}

function createPixelBoard(numberOfPixels) {
    let pixelBoard = document.getElementById('pixel-board');

    for (let index = 0; index < Math.sqrt(numberOfPixels); index += 1) { 
        let row = document.createElement('tr');
        pixelBoard.appendChild(row);
        for (let index = 0; index < Math.sqrt(numberOfPixels); index += 1) {
            let pixel = document.createElement('td');            
            pixel.className = 'pixel';        
            row.appendChild(pixel);            
        }        
    }
}

function colorSelector(eventSource) {
    let colors = document.getElementsByClassName('color');

    for (let index = 0; index < colors.length; index += 1) {
        colors[index].className = 'color';
    }

    eventSource.target.className = 'color selected';
}