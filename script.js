//função que atribui ids e colore o fundo de cada cor da paleta - requisitos 2 e 3

let nomesDasCores = ['black', 'yellow', 'blue', 'green'] //background colors

function coloreDivsPaleta() {
    let listaCores = document.getElementsByClassName('color');  //captura lista de cores html
    for (index = 0; index < listaCores.length; index += 1){
        let cor = listaCores[index];                       //captura div da cor no html
        cor.id = nomesDasCores[index];                     //adiciona id de cada div
        cor.style.backgroundColor = nomesDasCores[index];  //adiciona cor de cada div
    };
};

coloreDivsPaleta();

//REQUISITOS 4 e 5

let linhasQuadroPixels = document.getElementsByClassName('linha-pixel'); //captura lista linhas html

function quadroPixels() {
    
    for (index1 = 0; index1 < linhasQuadroPixels.length; index1 += 1){  //percorre cada linha
        let linhaPixels = linhasQuadroPixels[index1];                 //captura cada linha e guarda
        for (index2 = 0; index2 < linhasQuadroPixels.length; index2 += 1){ //cria pixels de cada linha
            let pixel = document.createElement('div'); //cria cada pixel
            linhaPixels.appendChild(pixel);            //cada pixel vira filho da linha
            pixel.className = 'pixel';                 //atribui classe pixel
            pixel.style.backgroundColor='white';       //colore pixel de branco
        };
    };
};

quadroPixels()

//REQUISITO 6 - função que define a cor preta (da paleta de cores) como inicial (com classe selected)
function setBlackAsDefault(){
    let corSelecionada = document.getElementById('black');
    corSelecionada.className = 'color selected';
};

setBlackAsDefault();

//REQUISITO 7 - função que adiciona eventos click na paleta e seleciona cores
function adicionaEventosPaleta(){
    let listaCores = document.getElementsByClassName('color');     //captura lista de cores paleta html
    for (index3 = 0; index3 < listaCores.length; index3 += 1){
        let corPaleta = listaCores[index3];
        corPaleta.addEventListener('click', function() {
            let corSelecionadaAntes = document.getElementsByClassName('color selected')[0]; //captura cor já selecionada
            if (corPaleta.className = 'color'){
                corSelecionadaAntes.classList.remove('selected')
                corPaleta.className = 'color selected'
            };

        });
    };
};

adicionaEventosPaleta();

//REQUISITO 8 - função que adiciona event listeners aos pixels e os faz mudar de cor

function adicionaEventosPixel(){
    let listaPixels = document.getElementsByClassName('pixel'); //captura lista de pixels html
    for (index4 = 0; index4 < listaPixels.length; index4 += 1){
        let umPixel = listaPixels[index4];
        umPixel.addEventListener ('click', function () {          
            let selectedColor = document.getElementsByClassName('color selected')[0];
            umPixel.style.backgroundColor = selectedColor.style.backgroundColor;
        });
    };
};

adicionaEventosPixel();

