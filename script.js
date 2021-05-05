let colorPalette = document.getElementById('color-palette');

let paleta;

let cores = ['black', 'blue', 'red', 'green']

for (let index = 0; index < cores.length; index += 1) {
    paleta = document.createElement('div');
    paleta.className= 'color';
    paleta.style.backgroundColor = cores[index];
    colorPalette.appendChild(paleta);
}
