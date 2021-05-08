const divColor = document.createElement('div');
divColor.className = 'color';
console.log(divColor);

let colorPalette = document.getElementById("color-palette");

colorPalette.appendChild(divColor);

console.log(colorPalette);



/*
    1 - capturar a div pai.
    2 - Salvar o elemento pai em uma variavel.
    3 - fazer um filho na variavel.
*/