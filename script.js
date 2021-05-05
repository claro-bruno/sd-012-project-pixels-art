// Cria paleta de cores dinamicamente:
let numberOfColors = 4;
function createPalleteColors(number) {
    for (let index = 0; index < number; index += 1) {
        let pallete = document.getElementById("color-palette");
        let elementPallete = document.createElement('div');
        elementPallete.className = 'color';
        pallete.appendChild(elementPallete);
    }
}
createPalleteColors(numberOfColors);
// Adiciona Cores dinamicamente a paleta de cores:
let palleteColors = ['black', 'lime', 'aqua', 'deeppink']; // Array com cores para serem adicionadas.
function addColors(arrColors) {
    let colorPallete = document.getElementsByClassName('color');
    for (let index = 0; index < colorPallete.length; index += 1) {
        colorPallete[index].style.backgroundColor = arrColors[index];
}
}
addColors(palleteColors);