//função que atribui ids e colore o fundo de cada cor
let nomesDasCores = ['black', 'yellow', 'blue', 'green', 'red'] //background colors

function idsStyleDivsCores() {
    let listaCores = document.getElementsByClassName('color'); //captura lista de cores html
    for (index = 0; index < listaCores.length; index += 1){
        let cor = listaCores[index]; //captura div da cor no html
        cor.id = nomesDasCores[index]; //adiciona id de cada div
        cor.style.backgroundColor = nomesDasCores[index]; //adiciona cor de cada div
    };
};

idsStyleDivsCores();

//função para criar o quadro de pixels
let linhasQuadroPixels = document.getElementsByClassName('linha-pixel'); //lista linhas quadro

function quadroPixels() {
    
    for (index = 0; index < linhasQuadroPixels.length; index += 1){ //percorre cada linha
        let linhaPixels = linhasQuadroPixels[index];
        console.log(linhaPixels)
        for (index2 = 0; index2 < linhasQuadroPixels.length; index2 += 1){ //cria pixels de cada linha
            let pixel = document.createElement('div');
            linhaPixels.appendChild(pixel);
            pixel.className='pixel';
            pixel.style.backgroundColor='white';
        };
    };
};

quadroPixels()