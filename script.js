window.onload = function() {
    createPalette();
};

const colorPalette = document.getElementById('color-palette'); 

function createPalette() {
    
    let div = document.createElement('div');
    div.className = 'color';
    div.style.backgroundColor = 'black';
    colorPalette.appendChild(div);
    for (let index = 0; index < 3; index += 1) {
        let div = document.createElement('div');
        div.className = 'color';
        div.style.backgroundColor = randomRGB();
        colorPalette.appendChild(div); 
    }

}

function randomRGB() {
    let r, g, b;
    r = parseInt(Math.random() * 255);
    g = parseInt(Math.random() * 255);
    b = parseInt(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}