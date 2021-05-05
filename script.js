document.getElementsByClassName("color")[0].style.backgroundColor = "black"
document.getElementsByClassName("color")[0].innerHTML = "Black"
document.getElementsByClassName("color")[1].style.backgroundColor = "red"
document.getElementsByClassName("color")[1].innerHTML = "Red"
document.getElementsByClassName("color")[2].style.backgroundColor = "blue"
document.getElementsByClassName("color")[2].innerHTML = "Blue"
document.getElementsByClassName("color")[3].style.backgroundColor = "orange"
document.getElementsByClassName("color")[3].innerHTML = "Orange"

// funcoes para formar o quadro de pixels
function linhasQuadrado (linhas){
    for (let index = 0; index < linhas; index+=1){
        let linha = document.createElement("div");
        linha.className = "linha";
        document.getElementById("pixel-board").appendChild(linha);
    };
};
linhasQuadrado(5);

function preencherLinha (colunas){
    let listaLinha = document.getElementsByClassName("linha");
    for (let element of listaLinha){
        for (let coluna = 0; coluna < colunas; coluna +=1){
            let listaColuna = document.createElement("div");
            listaColuna.className = "pixel";
            element.appendChild(listaColuna);
        };
    };
};
preencherLinha(5);

// atribui uma nova classe a paleta preta.
let paletePreto = document.getElementsByClassName("color")[0];
paletePreto.classList.add("selected");

