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

// let board = 5;

// for () {

// }