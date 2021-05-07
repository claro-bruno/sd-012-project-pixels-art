let  pixeles = document.querySelector('#pixel-board');

function criaPixel () {
    for (let index = 0; index < 5; index += 1) {
    let quadro = document.createElement("div");
    quadro[index].className = "pixel";
    
    pixeles.appendChild(quadro)
        }
    }