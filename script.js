let quadro = document.getElementById("pixel-board");

function quadroPixels(num) {
    for (let index = 0; index < num; index += 1) {
        let linha = document.createElement("div");
        quadro.appendChild(linha);
        for (let index = 0; index < num; index += 1) {
            let coluna = document.createElement("div");
            coluna.className = "pixel"
            quadro.appendChild(coluna);
        }
    }
} 
quadroPixels(5);