const pixels = document.getElementsByClassName('pixel');
function changeSelected(event) {
    const selectedChange= document.querySelector('.selected');
    selectedChange.classList.remove('selected');
    event.target.classList.add('selected');
};

function paletteColor() {
    for (let cont = 0; cont < 4; cont += 1) {
        let colorPalette = document.createElement('div');
        colorPalette.classList.add ('color');
        colorPalette.id = 'cp' + [cont];
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
                colorPalette.style.background= 'red';
                break;
        };
        colorPalette.addEventListener('click', changeSelected);
    }; 
    document.querySelector('.color').classList.add('selected'); 
};
paletteColor();
 
function selectedSetColor(event) {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
};
        
function boardPixels (n) {
    for (let cont = 0; cont < n**2; cont += 1){
        let board = document.createElement('div');
        board.classList.add ('pixel');
        board.id = 'pb' + [cont];
        document.querySelector('#pixel-board').appendChild(board);
    };
};
boardPixels(5);
        








//window.onload = alerta
//function alerta(){
//    alert('Oba! Vamos colorir.');
//};

