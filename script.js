let quadradocores = document.querySelector('#color-palette');
let cores = ['black', 'red', 'blue', 'green'];
for (indice = 0; indice < cores.length; indice += 1) {
    let cor = cores[indice];
    let coresitem = document.createElement('div');
    coresitem.style.height = '40px';
    coresitem.style.width = '40px';
    coresitem.style.border = 'solid';
    coresitem.style.borderWidth = '1px';
    coresitem.style.display = 'inline-block';;
    coresitem.style.margin = '2px';
    coresitem.style.backgroundColor = cor;
    coresitem.innerHTML = cor;
    quadradocores.appendChild(coresitem);
};
