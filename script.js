window.onload = function() {

function setSquareColor() {
    let colors = ['black', 'blue', 'red', 'green'];
    let colorPalette = document.querySelectorAll('.color');
    for (let index = 0; index < colorPalette.length; index += 1) {
        colorPalette[index].style.backgroundColor = colors[index];
    }
}
setSquareColor();
    
}