let colors = ['blue', 'pink', 'orange', 'green'];

function geraCores() {
    let getColorList = document.querySelector('#color-palette');

    for(let index = 0; index < colors.length; index += 1) {
        let color = colors[index];
        let colorItem = document.createElement('li');

        if (color ==='blue'){
            colorItem.className = 'color';
            colorItem.style.backgroundColor = 'blue';
            getColorList.appendChild(colorItem);
        } else if (color === 'pink') {
            colorItem.className = 'color';
            colorItem.style.backgroundColor = 'pink';
            getColorList.appendChild(colorItem);
        } else if (color === 'orange') {
            colorItem.className = 'color';
            colorItem.style.backgroundColor = 'orange';
            getColorList.appendChild(colorItem);
        } else if (color === 'green') {
            colorItem.className = 'color';
            colorItem.style.backgroundColor = 'green';
            getColorList.appendChild(colorItem);
        }
    };
};
geraCores();
