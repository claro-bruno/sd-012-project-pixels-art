let paletteColor = document.querySelector('#color-palette');

for(let index = 0; index < paletteColor.length; index +=1) {
    if(paletteColor[index] === 'Blue') {
        paletteColor[index].style.backgroundColor = 'blue';
    } else if(paletteColor[index] === 'Pink') {
        paletteColor[index].style.backgroundColor = 'pink';
    } else if(paletteColor[index] === 'Orange') {
        paletteColor[index].style.backgroundColor = 'orange';
    } else if(paletteColor[index] === 'Green') {
        paletteColor[index].style.backgroundColor = 'green';
    } 
}