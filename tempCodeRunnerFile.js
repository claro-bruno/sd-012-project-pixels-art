let quadro = document.getElementById("pixel-board");

function quadroPixels(num) {
    for (let index = 0; index < num; index += 1) {
        let linha = document.createElement("div");
        linha.className = "pixel"
        quadroPixels.appendChild(linha);
        for (let index = 0; index < num; index += 1) {
            let coluna = document.createElement("div");
            quadroPixels.appendChild(coluna);
        }
    }
}
console.log(quadroPixels(5))

