const colorPalete = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const colors = ['#000', '#405d27', '#034f84', '#c94c4c'];


function colorSelector() {
    for(let index = 0; index < colors.length; index+=1) {
        const eachColor = document.createElement('div');
        eachColor.className = 'color';
        const color = colors[index];
        eachColor.innerText = color;
        colorPalete.appendChild(eachColor);
    };
    colorPalete.firstChild.className = 'color selected';
}
colorSelector();    

function drawingBoarder() {    
    for(let index = 0; index < 25; index+=1) {
        const eachPixel = document.createElement('div');
        const pixel = index;
        eachPixel.innerText = pixel;
        eachPixel.className = 'pixel';
        pixelBoard.appendChild(eachPixel);
        pixelBoard.style.maxWidth = index*8.75 + 'px';
    };
}    
drawingBoarder();

const colorDraw = document.querySelectorAll('.pixel');

document.body.addEventListener('click', function (event) {
    if (event.target.className === 'color' ){
        document.querySelector('.selected').className = 'color';
        event.target.className = 'color selected';
        const painting = event.target.innerHTML
        colorDraw.forEach((pixel) => {
            pixel.addEventListener('click', () => {
                pixel.style.backgroundColor = painting;
            })
        })
    }
})    
