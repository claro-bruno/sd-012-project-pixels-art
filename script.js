let idPalette = document.querySelector('#color-palette');

// requisito 2

let colorPalette = ['preto', 'vermelho', 'azul', 'amarelo'];
function listPalette (array) {
    for (let key of colorPalette) { //percorra os valores
        let liMake = document.createElement('li'); 
        liMake.className = 'color'; //variável liMake recebe a class color
        let getLi = document.getElementsByTagName9('li'); //chama(pega) o elemento criado
        if (key === 'preto') {
            getLi.style.backgroundColor = 'black';
        } else if (key === 'vermelho') {
            getLi.style.backgroundColor = 'red';
        } else if (key === 'azul') {
            getLi.style.backgroundColor = 'blue';
        } else if (key === 'amarelo') {
            getLi.style.backgroundColor = 'yellow';
        }

    }
}