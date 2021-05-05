window.onload = resetColors();

function resetColors() {
    const pixels = document.getElementsByClassName('pixel');

    for (let index = 0; index < pixels.length; index += 1) {
        if (pixels[index].style.backgroundColor !== 'white') {
            pixels[index].style.backgroundColor = 'white';
        }
    }

}

function initialColor() {

}

resetColors();

function makeBoard(tamanho) {
    let destiny = document.querySelector('#pixel-board');

    if (tamanho > 10) {
        return 'Tamanho maximo e 10.'
    }
    for (let index = 1; index <= tamanho; index += 1) {
        let lines = document.createElement('div');
        destiny.appendChild(lines);
            for (let index = 1; index <= tamanho; index += 1) {
                let columns = document.createElement('div');
                columns.className = 'pixel';
                lines.appendChild(columns);
        }
    }
}

makeBoard(5);