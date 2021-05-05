//  variáveis
let linhas = 5;
let colunas = 5;
let cores = document.getElementsByClassName("color");
let QuadroDePixels = document.getElementById("pixel-board");
let botao = document.getElementById("clear-board");

//  funções para formar quadro de pixels
function formaLinha(linhas){
    for (let linha = 0; linha < linhas; linha += 1){
        let divLinha = document.createElement("div");
        divLinha.className = "linha";
        QuadroDePixels.appendChild(divLinha);
    };
};
formaLinha(linhas);

function formaPixelsLinha (colunas){
    let listLinhas = document.getElementsByClassName("linha");
    for (let l of listLinhas){
        for (let coluna = 0; coluna < colunas; coluna += 1){
            let divPixel = document.createElement("div");
            divPixel.className = "pixel";
            l.appendChild(divPixel);
        };
    };
};
formaPixelsLinha(colunas);

//  adiciona caminho para pixels
let pixels = document.getElementsByClassName("pixel");

//  função de selecionar cor
function selecionaCor(event){
    let corAntes = document.querySelector(".selected");
    corAntes.classList.remove("selected");
    event.target.classList.add("selected");
};

//  adiciona eventListener às cores
for (let cor of cores){
    cor.addEventListener("click", selecionaCor);
};

//  função que muda a cor dos pixels
function mudaCorPixel(event){
    let corSelecionada = document.querySelector(".selected");
    let corDoClick = corSelecionada.id;
    event.target.style.backgroundColor = corDoClick;
};

//  adiciona eventlistener nos pixels
for (let element of pixels){
    element.addEventListener("click", mudaCorPixel);
};

//  função que limpa a cor dos pixels
function limpaPixel(){
    for (let element of pixels){
        element.style.backgroundColor = "white";
    };
};

//  adiciona eventlistener em botão
botao.addEventListener("click", limpaPixel);
