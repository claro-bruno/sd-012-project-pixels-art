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



function makePixel(classes){
    let pixel = document.createElement('li'); 
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

createPalette();