let pixeles = document.querySelector("#pixel-board");

function criaLinha () {
    for (let index = 0; index < 5; index += 1) {
        let linha = document.createElement("div");
        linha.className = "pixel-line";
        pixeles.appendChild(linha);
            }
        }
        criaLinha();

function criaPixel () {
    let line = document.getElementsByClassName("pixel-line");
    for (let index = 0; index < line.length; index += 1) {
    let quadro = document.createElement("div");
    quadro.className = "pixel";
    console.log(quadro)
        if (index < line) {
            criaLinha();
        }
    }
}
    criaPixel ();