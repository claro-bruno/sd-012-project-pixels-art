let divs = document.getElementById('color-palette');   
let cor = ['box1', 'box2', 'box3', 'box4'];


for(let index = 0; index <= 3; index += 1){
    let createDivs = document.createElement('div');
    createDivs.className = 'color';
    createDivs.id = cor[index];
    divs.appendChild(createDivs);
}








