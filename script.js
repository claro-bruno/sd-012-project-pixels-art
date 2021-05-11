paleta();
quadrados();

function paleta(){
    let quadradocores = document.querySelector('#color-palette');
    let cores = ['black', 'red', 'blue', 'green'];
    for (indice = 0; indice < cores.length; indice += 1) {
        let cor = cores[indice];
        let coresitem = document.createElement('div');
        coresitem.className = 'color';
        coresitem.style.backgroundColor = cor;
        coresitem.style.color = cor;
        coresitem.innerHTML = cor;
        coresitem.addEventListener('click', color7);
        quadradocores.appendChild(coresitem);
    };
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
        //quadrado.addEventListener('click',);
        pixell.appendChild(quadrado);
    };
};

window.onload = function () {
    let cor = document.getElementsByClassName('color')[0];
    cor.classList.add('selected');
    cor.addEventListener('click', pegacor)
    function pegacor() {
        
        cor.style.backgroundColor = document.getElementsByClassName('color')[0];
    };
};

function color7() {
    let color = document.querySelector('.color.selected');
    color.classList.remove('selected');
    event.target.classList.add('selected');
    console.log(this.classList.value)
    console.log(color);
};

