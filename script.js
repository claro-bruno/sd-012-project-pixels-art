// Resolvendo: DESAFIO 2 / DESAFIO 3 / DESAFIO 4 / DESAFIO 5 

let quadroPixels = document.getElementById("pixel-board");

function board(tamanhoBoard) {
  for (let index = 0; index < tamanhoBoard; index += 1) {
    let linha = document.createElement("div");
    quadroPixels.appendChild(linha);
    for (let index = 0; index < tamanhoBoard; index += 1) {
      let coluna = document.createElement("div");
      coluna.className = "pixel";
      quadroPixels.appendChild(coluna);
    }
  }
}
board(5);

// Resolvendo: DESAFIO 6 / DESAFIO 7 

let selecionaCor = document.getElementsByClassName("color");
for (index = 0; index < selecionaCor.length; index += 1) {
  selecionaCor[index].addEventListener("click", function (event) {
    let elemento = document.querySelector(".selected");
    elemento.classList.remove("selected");
    event.target.classList.add("selected");
  })
}


// Resolvendo: DESAFIO 8
let quadradinho = document.querySelectorAll(".pixel");
for(let key of quadradinho){
  key.addEventListener("click", function(event){
    let corSelecionada = document.getElementsByClassName("selected")[0];
    let temCor = window.getComputedStyle(corSelecionada).getPropertyValue("background-color");
    event.target.style.backgroundColor = temCor;  
  })
}



