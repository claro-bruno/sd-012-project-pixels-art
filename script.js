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

