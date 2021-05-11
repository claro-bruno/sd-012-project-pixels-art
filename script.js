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
        pixell.appendChild(quadrado);
    };
};

window.onload = function () {
    let cor = document.getElementsByClassName('color')[0];
    cor.classList.remove('color');
    cor.className = 'selected';
    cor.addEventListener('click', pegacor)
    function pegacor() {
        
        cor.style.backgroundColor = document.getElementsByClassName('color')[0];
    };
};

function requesito7() {
    let cor7 = document.querySelectorAll('.color');
    let cores7 = [];
    for (indice = 0; indice < cor7.length; indice += 1) { 
        cores7 = cor7[indice];
        console.log(cores7)
    };
    cores7.addEventListener('click', color7);
        function color7() {
            cores7.className = 'selected';
            console.log(this.classList.value)
        };
    console.log(cores7)
};
requesito7();

