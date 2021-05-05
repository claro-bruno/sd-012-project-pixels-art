// Criar paleta de cores de forma dinâmica
// 1. Capturar o elemento pai





let divLine = document.createElement('div');
divLine.className = 'divLine';

let divPalette = document.getElementById('color-palette')

let script = document.querySelector('script');

let body = document.querySelector('body');
body.insertBefore(divLine, script);

// divPalette.insertAdjacentElement('afterend', divLine)

