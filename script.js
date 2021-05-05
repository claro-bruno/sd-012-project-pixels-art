let colors = ['black', 'green', 'blue', 'red'];

for (let color = 0; color < colors.length; color += 1) {
    let box = document.createElement('div');
    box.className = 'color';
    box.style.width = '40px';
    box.style.height = '40px';
    box.style.border = '1px solid black';
    box.style.display = 'inline-block'
    box.style.backgroundColor = colors[color];
    document.querySelector('#color-palette').appendChild(box);
}

let board = 5;

for (let size = 0; size < board; size += 1) {
    let line = document.createElement('div');
    line.className = 'line';
    document.querySelector('#pixel-board').appendChild(line);
}

for (let pixel = 0; pixel < board; pixel += 1) {
    for (let pixel = 0; pixel < board; pixel += 1) {
        let box = document.createElement('div');
        box.className = 'pixel';
        box.style.width = '40px';
        box.style.height = '40px';
        box.style.border = '1px solid black';
        box.style.display = 'inline-block'
        box.style.backgroundColor = 'white';
        document.querySelectorAll('.line')[pixel].appendChild(box);
    }
}

window.onload = function () {
    document.querySelector('#color-palette').firstElementChild.className = 'selected'
}
