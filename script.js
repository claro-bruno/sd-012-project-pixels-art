
let quadradocores = document.querySelector('#color-palette');
let cores = ['black', 'red', 'blue', 'green'];
for (indice = 0; indice < cores.length; indice += 1) {
    let cor = cores[indice];
    let coresitem = document.createElement('div');
    coresitem.className = 'color';
    coresitem.style.backgroundColor = cor;
    coresitem.style.color = cor;
    coresitem.innerHTML = cor;
    coresitem.addEventListener('click', coresPaleta);
    quadradocores.appendChild(coresitem);
};


function quadrados() {
    let pixell = document.querySelector('#pixel-board');
    let ospixels = [];
    for (indice = 0; indice < 25; indice += 1) {
        ospixels.push("")
        let pixels = ospixels[indice];
        let quadrado = document.createElement('div');
        quadrado.className = 'pixel';
        quadrado.style.backgroundColor = 'White';
        quadrado.innerHTML = pixels;
        quadrado.addEventListener('click', recebePaleta);
        pixell.appendChild(quadrado);
    };
};
quadrados();
window.onload = function () {
    let cor = document.getElementsByClassName('color')[0];
    cor.classList.add('selected');
    cor.addEventListener('click', pegacor)
    function pegacor() {
        
        cor.style.backgroundColor = document.getElementsByClassName('color')[0];
    };
};

function coresPaleta() {
    let color = document.querySelector('.color.selected');
    color.classList.remove('selected');
    event.target.classList.add('selected');
    //console.log(this.classList.value)
};

function recebePaleta(event){
    let pixel = document.querySelector('.selected')
    let opixel = window.getComputedStyle(pixel);
    event.target.style.backgroundColor = opixel.getPropertyValue('background-color');
    console.log(this.classList.value);
    console.log(pixel);
    //fonte sobre uso do event.target = https://pt.stackoverflow.com/questions/63395/quando-usar-this-e-quando-usar-event-target
    //o uso do getProperTyValue, se deu do code review da colega Caroline Benichio, e conteúdo da Web = https://www.w3schools.com/jsref/met_cssstyle_getpropertyvalue.asp
};
