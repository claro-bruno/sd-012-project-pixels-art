let colorPalette = document.querySelector('#color-palette');
let colors = ['black', 'red', 'green',  'blue'];
let ident = '';

for (let index = 0; index < colors.length; index += 1) {    
    let div = document.createElement('div');
    div.className = 'color ' + colors[index];
    colorPalette.appendChild(div);
}
 
for (let index = 1; index <= 15; index += 1) {    
    let div = document.createElement('div');  
    div.className = 'pixel';
    
    if (index > 10) {
        ident = '#secao3';
    } else if (index > 5) {
        ident = '#secao2';
    } else {
        ident = '#secao1';
    }
    let pixelBoard = document.querySelector(ident);
    pixelBoard.appendChild(div);   
}
