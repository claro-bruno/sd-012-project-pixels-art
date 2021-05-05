// Cria paleta de cores dinamicamente:
function createPalleteColors(number) {
    let numberOfColors = number;
    for (let index = 0; index < numberOfColors; index += 1) {
        let pallete = document.getElementById("color-palette");
        let elementPallete = document.createElement('div');
        elementPallete.className = 'color';
        pallete.appendChild(elementPallete);
    }
}
createPalleteColors(4);
// Adiciona Cores dinamicamente a paleta de cores:
let palleteColors = ['lime', 'red', 'aqua', 'deeppink']; // Array com cores para serem adicionadas.
function addColors(arrColors) {
    let colorPallete = document.getElementsByClassName('color');
    for (let index = 0; index < colorPallete.length; index += 1) {
        colorPallete[index].style.backgroundColor = arrColors[index];
}
}
addColors(palleteColors);