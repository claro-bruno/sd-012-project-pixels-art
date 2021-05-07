// const colorPalette = document.getElementById('color-palete');
const pixelBoard = document.getElementById('pixel-board');
const pixels = document.getElementsByClassName('pixel');

// function paletteColor (n) {
//     for (let cont = 0; cont < n; cont += 1) {
//         let color = document.createElement('div');
//         color.className = 'color';
//         color.id = 'c' + [cont];
//         colorPalette.appendChild(color);
//     };
// };
// // paletteColor(4);


function boardPixels (n) {
    for (let cont = 0; cont < n**2; cont += 1){
        let board = document.createElement('div');
        board.className = 'pixel';
        board.id = 'p' + [cont];
        pixelBoard.appendChild(board);
    };
};
boardPixels(5);


//window.onload = alerta
//function alerta(){
//    alert('Oba! Vamos colorir.');
//};

// let desfazer = document.getElementById('undo-button');
// desfazer.addEventListener('click', undoButton);
// function undoButton(eventoDeOrigem) {
// console.log(eventoDeOrigem.target);
// console.log(eventoDeOrigem.type);
// }
