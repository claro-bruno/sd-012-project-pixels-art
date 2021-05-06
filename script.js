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
