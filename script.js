
const caixaDeCorDaPaleta = document.querySelectorAll('.color');

const randomColorPalette = () => {
    caixaDeCorDaPaleta[0].style.backgroundColor = 'black';
    
    for (let index = 1; index < caixaDeCorDaPaleta.length; index += 1) {
        let randomColor = [];
        for (let index = 0; index <= 2; index += 1) {
            randomColor.push(Math.round(Math.random()*255));
        }
        caixaDeCorDaPaleta[index].style.backgroundColor = `rgb(${randomColor})`;
    }
}