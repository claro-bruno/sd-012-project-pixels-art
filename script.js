function randomNumber(range) {
    return Math.floor(Math.random() * range);
}

function generateRGB() {
    let color = 'rgb(' + randomNumber(256) + ',' + randomNumber(256) + ',' + randomNumber(256) + ')';
    if (color === 'rgb(255,255,255)') {
        return generateRGB();
    }
    return color;
}

function comparePixelBackgroundColor(pixel1,pixel2){
    if (pixel1.style.backgroundColor === pixel2.style.backgroundColor) {
        return true;
    }
    return false;
}



function makePixel(element,classes){
    let pixel = document.createElement(element); 
    pixel.className = classes;
    return pixel;
}

function createPalette(){
    let pallet = document.querySelector('#color-palette');

    for (let index = 1; index < 4; index += 1) {
        let pixels = pallet.children;    
        pixels[index].style.backgroundColor = generateRGB();
        if(comparePixelBackgroundColor(pixels[index - 1],pixels[index])){
            index -= 1;
        } 
    }
}

function createBoard(number) {
    let pixelBoard = document.querySelector('#pixel-board');
    let tableBody = document.createElement('tbody');

    for (let index = 0; index < number; index += 1) {
        let row = document.createElement('tr');
        for (let index2 = 0; index2 < number; index2 += 1) {
            let line = makePixel('td','pixel');
            row.appendChild(line);
        }
        tableBody.appendChild(row);
    }
    pixelBoard.appendChild(tableBody);


}

function addEvents(){
    let pallet = document.querySelector('#color-palette');
    let pixels = pallet.children; 

    for (const pixel of pixels) {
        pixel.addEventListener( 'click', function (){
            for (let index = 0; index < 4; index += 1) {
                if(pixels[index].classList.contains('selected')){
                    pixels[index].classList.remove('selected');
                } 
            }

            for (let index = 0; index < 4; index += 1) {
                if(pixels[index].id === pixel.id){
                     pixels[index].classList.add('selected');
                } 
            }
        });
    }
}

createPalette();
createBoard(5);
addEvents();