function givePaletteColor(){
    let colors = ["blue","green","red", "black"];
    let paletteC = document.querySelectorAll('.color');
    for (let index = 0; index < paletteC.length; index +=1){
        for (let index2 = 0; index2 < colors.length; index2 +=1){
            paletteC[index].style.background = colors[index];
        }
    };
};