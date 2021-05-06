document.getElementsByClassName("color")[0].style.backgroundColor = "black"
document.getElementsByClassName("color")[0].innerHTML = "Black"
document.getElementsByClassName("color")[1].style.backgroundColor = "red"
document.getElementsByClassName("color")[1].innerHTML = "Red"
document.getElementsByClassName("color")[2].style.backgroundColor = "blue"
document.getElementsByClassName("color")[2].innerHTML = "Blue"
document.getElementsByClassName("color")[3].style.backgroundColor = "orange"
document.getElementsByClassName("color")[3].innerHTML = "Orange"


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


let paletePreto = document.getElementsByClassName("color")[0];
paletePreto.classList.add("selected");

function imprimiCor (event){
    if (!event.target.classList.contains("selected")){
        let selectedColor = document.querySelector(".selected");
        selectedColor.classList.remove("selected");
        event.target.classList.add("selected");
    }
};
    
    let regularColor = document.getElementsByClassName("color");
    for (let cor of regularColor)
        cor.addEventListener("click", imprimiCor);

let pixel = document.getElementsByClassName("pixel")

function mudaCor (event){
    let selectedColor = document.querySelector(".selected");
    let colorClick = selectedColor.className;
    event.target.style.backgroundColor = colorClick;
};
    for(element of pixel){
        element.addEventListener("click", mudaCor);
    };

function limparQuadro (){
    for(element of pixel){
    element.style.backgroundColor = white;
};
};
let button = document.getElementById("clear-board");
button.addEventListener("click", limparQuadro);