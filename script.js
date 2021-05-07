let pixeles = document.querySelector("#pixel-board");

function criaLinha () {
    for (let index = 0; index < 5; index += 1) {
        let linha = document.createElement("div");
        linha.className = "pixel-line";
        pixeles.appendChild(linha);
            }
        }
       
function criaPixel () {
    let line = document.getElementsByClassName("pixel-line");
    for (let index1 = 0; index1 < line.length; index1 += 1) {
        if (index1 < 5) {
        for (let index2 = 0; index2 < line.length; index2 += 1) {
        let quadro = document.createElement("div");
        quadro.className = "pixel";
        line[index2].appendChild(quadro);
            }
        }
    }
}

criaLinha();
criaPixel();
