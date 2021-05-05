function mudarCorPaleta (array){
    let arrayCores = ["black","yellow", "red", "green"];
    let paleta = document.getElementsByClassName('color')
    for (index = 0; index < paleta.length; index += 1){
        for (index = 0; index < arrayCores.length; index += 1){
            paleta[index].style.backgroundColor = arrayCores[index];
        }
    }
}
mudarCorPaleta();

let quadroPixel = document.createElement('table');
    document.body.appendChild(quadroPixel);
    quadroPixel.id = 'pixel-board'
function createBoard (pixeis) {
    for(let index = 0; index < pixeis; index += 1) {
        let lineCanvas = document.createElement('tr');
        quadroPixel.appendChild(lineCanvas);
        for (let index = 0; index < pixeis; index += 1) {
            let criaPixels = document.createElement('td')
            lineCanvas.appendChild(criaPixels);
            criaPixels.className = 'pixel';
        }
    }
}
createBoard(5);

// function createPixels (){
//     let pixels = document.getElementsByClassName('canvas')
//     for (let index = 0; index <= columns; index += 1){
//         let criarColuna = document.createElement('tr')
//         pixels.append('tr');
        
//     }
//     for (let index = 0; index <= lines; index += 1){
//         let criarLinha = document.createElement('td')
//     }
// }
// createPixels();
