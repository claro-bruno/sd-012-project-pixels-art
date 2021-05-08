function paletteColor() {
    for (let cont = 0; cont < 4; cont += 1) {
        let colorPalette = document.createElement('div');
        colorPalette.classList.add ('color');
        document.querySelector('#color-palette').appendChild(colorPalette);  
        switch (cont){
            case 0:
                colorPalette.style.background = 'black';
                break;
            case 1:
                colorPalette.style.background = 'green';
                break;
            case 2:
                colorPalette.style.background = 'yellow';
                break;
            case 3:
                colorPalette.style.background = 'red';
                break;
        };
        colorPalette.addEventListener('click', changeSelected);
    }; 
    document.querySelector('.color').classList.add('selected'); 
};
paletteColor();

function changeSelected(event) {
    const selectedChange = document.querySelector('.selected');
    selectedChange.classList.remove('selected');
    event.target.classList.add('selected');
};
function selectedSetColor (event) {
    const selectedColor = document.querySelector('.selected');
    event.target.style.background = selectedColor.style.background;
}
        
function boardPixels (n) {
    for (let cont = 0; cont < n**2; cont += 1){
        let board = document.createElement('div');
        board.classList.add ('pixel');
        document.querySelector('#pixel-board').appendChild(board);
        board.addEventListener('click', selectedSetColor);
    };
};
boardPixels(5);

const resetButton = document.querySelector('#clear-board');
resetButton.addEventListener('click', clearBoard)
function clearBoard() {
    const pixel = document.querySelectorAll('.pixel');
    for (cont = 0; cont < pixel.length; cont += 1) {
        pixel[cont].style.background = 'white';
    };
    //console.log('ok')
};
        








//window.onload = alerta
//function alerta(){
//    alert('Oba! Vamos colorir.');
//};

