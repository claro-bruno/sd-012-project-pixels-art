let capturaColorPalette = document.querySelector('#color-palette');


//Exercício 2 e 3:

let paleta = ['Preto', 'Vermelho', 'Azul', 'Amarelo'];
function lista (array) {
    for(index = 0; index < paleta.length; index += 1) {
        let criarLi = document.createElement('li');
        capturaColorPalette.appendChild(criarLi);
        criarLi.className = 'color';
        let capturaLi = document.getElementsByTagName('li')
        if(array[index] === 'Preto'){
            capturaLi[index].style.backgroundColor = 'black';
        } else if(array[index] === 'Vermelho'){
            capturaLi[index].style.backgroundColor = 'red';
        } else if(array[index] === 'Azul'){
            capturaLi[index].style.backgroundColor = 'blue';
        } else if(array[index] === 'Amarelo'){
            capturaLi[index].style.backgroundColor = 'yellow';
        }
    }
}

lista (paleta)

