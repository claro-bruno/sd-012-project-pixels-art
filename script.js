let cores = ["black", "blue", "red", "green"];

var paleta = document.getElementById("color-palette");
var quadro = document.getElementById("pixel-board");

for(let i = 0; i < cores.length; i++){
    let paint = document.createElement("div");
    paint.className = "color";
    paint.style.backgroundColor = cores[i];
    paleta.appendChild(paint);
}

function board(size){
    for(let i = 0; i < size; i++){
        let linha = document.createElement("div");
        linha.className = "linha";
        quadro.appendChild(linha);
    }
    for(let i = 0; i < size; i++){
        for(let i = 0; i < size; i++){
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            document.querySelectorAll(".linha")[i].appendChild(pixel);
        }
    }    
}

board(5);
