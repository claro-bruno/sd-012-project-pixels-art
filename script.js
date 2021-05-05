function randomNumber(range) {
    return Math.floor(Math.random() * range);
}

function preventEqualRandomNumbers(number, range) {
    let myNumber = randomNumber(range);
    while (myNumber === number) {
        myNumber = randomNumber(range);
    }
    return myNumber;
}

function compareNumbers(number1,number2) {
    if(number1 === number2)
        return true;
    if(number1 !== number2)
        return false;
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

function createPallet(){
    let pallet = document.querySelector('#color-pallet');

    for (let index = 1; index < 4; index += 1) {
        let pixels = pallet.children;    
        pixels[index].style.backgroundColor = generateRGB();
        if(comparePixelBackgroundColor(pixels[index - 1],pixels[index])){
            index -= 1;
        } 
    }
}

createPallet();