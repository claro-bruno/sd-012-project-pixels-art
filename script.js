createPallete(4);
setPalleteColors();

function createPallete(numberOfColors) {
    let colorPallete = document.getElementById('color-palette');

    for (let index = 0; index < numberOfColors; index += 1) {
        let color = document.createElement('div');
        color.className = 'color';
        colorPallete.appendChild(color);
    }
}

function setPalleteColors() {
    let palleteColors = document.querySelectorAll('.color');
    let colors = ['black', 'red', 'yellow', 'green'];
    
    for (let index = 0; index < palleteColors.length; index += 1) {
        palleteColors[index].style.backgroundColor = colors[index];
        console.log(palleteColors[index]);
    }
}