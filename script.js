//variáveis
let linhas = 5;
let colunas = 5;
let cores = document.getElementsByClassName("color");
let QuadroDePixels = document.getElementById("pixel-board");

//funções para formar quadro de pixels

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

//função de selecionar cor
function selecionaCor(event){
    let corAntes = document.querySelector(".selected");
    corAntes.classList.remove("selected");
    event.target.classList.add("selected");
};

//adiciona eventListener
for (let cor of cores){
    cor.addEventListener("click", selecionaCor);
};
