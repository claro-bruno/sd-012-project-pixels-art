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

paleta.firstChild.classList.add("selected");

document.body.addEventListener("click", function(event){
    if(event.target.className === "color"){
        document.querySelector(".selected").classList.remove("selected");
        event.target.classList.add("selected");
    }
})

document.body.addEventListener("click", function(event){
    if(event.target.className === "pixel"){
        event.target.style.backgroundColor = document.querySelector(".selected").style.backgroundColor;
    }
})

document.querySelector("#clear-board").addEventListener("click", function(event){
    let pixels = document.querySelectorAll(".pixel");
    for(let i = 0; i < pixels.length; i++){
        pixels[i].style.backgroundColor = "white";
    }
})

document.querySelector("#generate-board").addEventListener("click", function(){
    let valor = document.querySelector("#board-size").value;
    let lastBoard = document.querySelectorAll(".linha");

    if(valor === ""){
        alert("Board inválido!");
    }
    else{
        for(let i = 0; i < lastBoard.length; i++){
            quadro.removeChild(quadro.lastChild);
        }
        if(valor <= 5){
            board(5);
        }
        else if(valor >= 50){
            board(50);
        }
        else{
            board(valor);
        }
        
    }
})
