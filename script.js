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

//função para criar o quadro de pixels - requisitos 4 e 5

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

//funções para colorir pixels de preto

//1-função que adiciona event listeners
function addPixelEvent(){

    let listaPixels = document.getElementsByClassName('pixel'); //captura lista de pixels html
        for (index3 = 0; index3 < listaPixels.length; index3 += 1){
            let pixelListener = listaPixels[index3];
            pixelListener.addEventListener('click', colorirPixel);
        };
};

addPixelEvent();

//3-função que define a cor preta (da paleta de cores) como inicial (com classe selected)
let listaCores = document.getElementsByClassName('color');
function setBlackAsDefault(){
    let corSelecionada = document.getElementById('black');
    corSelecionada.className = 'color selected';
};

setBlackAsDefault();

//2-função que faz mudar a cor para preto

//function colorirPixel(){
    let listaPixels = document.getElementsByClassName('pixel'); //captura lista de pixels html
    for (index4 = 0; index4 < listaPixels.length; index4 += 1){
        if (listaPixels[index4].style.backgroundColor === 'black'){
            listaPixels[index4].style.backgroundColor = 'white';
        }else{
            listaPixels[index4].style.backgroundColor = 'black';
        };
    };
};


