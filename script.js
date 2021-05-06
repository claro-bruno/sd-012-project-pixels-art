let colors = ['blue', 'pink', 'orange', 'green'];

function geraCores() {
    let getColorList = document.querySelector('#color-palette');

    for(let index = 0; index < colors.length; index += 1) {
        let color = colors[index];
        let colorItem = document.createElement('li');

        if (color ==='blue'){
            colorItem.className = 'color';
            colorItem.style.backgroundColor = 'blue';
            getColorList.appendChild(colorItem);
        } else if (color === 'pink') {
            colorItem.className = 'color';
            colorItem.style.backgroundColor = 'pink';
            getColorList.appendChild(colorItem);
        } else if (color === 'orange') {
            colorItem.className = 'color';
            colorItem.style.backgroundColor = 'orange';
            getColorList.appendChild(colorItem);
        } else if (color === 'green') {
            colorItem.className = 'color';
            colorItem.style.backgroundColor = 'green';
            getColorList.appendChild(colorItem);
        }
    };
};
geraCores();

document.getElementsByClassName('color')[0].style.backgroundColor = 'black';


let linhasQuadroPixels = document.getElementsByClassName('linha-pixel');

function quadroPixels() {

    for (index = 0; index < linhasQuadroPixels.length; index += 1){ 
        let linhaPixels = linhasQuadroPixels[index];
        console.log(linhaPixels)
        for (index2 = 0; index2 < linhasQuadroPixels.length; index2 += 1){ 
            let pixel = document.createElement('div');
            linhaPixels.appendChild(pixel);
            pixel.className='pixel';
            pixel.style.backgroundColor='white';
        };
    };
};

quadroPixels();
// retirei esse código da aluna Camila Malvess : camila-pereira-pixels-art//

let colorBlack = document.querySelector('.color');
colorBlack.classList.add = ('selected');

// pesquisa de como adicionar uma classe ao elemento:https://tableless.com.br/manipulando-o-uso-de-classes-com-classlist-api/
