const colorPalete = document.getElementById('color-palette');
const colors = ['#000', '#405d27', '#034f84', '#c94c4c'];


for(let index = 0; index < colors.length; index+=1) {
        const eachColor = document.createElement('div');
        const color = colors[index];
        eachColor.innerText = color;
        eachColor.className = 'color';
        colorPalete.appendChild(eachColor);
    };
    
const pixelBoard = document.getElementById('pixel-board');
for(let index = 0; index < 25; index+=1) {
    const eachPixel = document.createElement('div');
    const pixel = index;
    eachPixel.innerText = pixel;
    eachPixel.className = 'pixel';
    pixelBoard.appendChild(eachPixel);
};