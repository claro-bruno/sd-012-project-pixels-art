window.onload = resetColors();

function resetColors() {
    let pixels = document.getElementsByClassName('pixel');
    

    for (let index = 0; index < pixels.length; index += 1) {
        if (pixels[index].style.backgroundColor !== 'white') {
            pixels[index].style.backgroundColor = 'white';
        }
    }

}


