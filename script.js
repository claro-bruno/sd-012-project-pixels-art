let divs = document.getElementById('color-palette');   
let cor = ['box1', 'box2', 'box3', 'box4'];


for(let index = 0; index <= 3; index += 1){
    let createDivs = document.createElement('div');
    createDivs.className = 'color';
    createDivs.id = cor[index];
    divs.appendChild(createDivs);
}

function lineDivs() {
    let lines = document.getElementById('lines');
    for(let index = 0; index < 5; index += 1){
        let createLines = document.createElement('div');
        createLines.className = 'line'
        lines.appendChild(createLines);
    }
}

lineDivs();

function columnsDivs() {
    
}
