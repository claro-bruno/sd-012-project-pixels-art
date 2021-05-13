let quadrado = document.getElementById('pixel-board');

function board(num){
    for (let i = 0; i < num; i += 1){
        let linha = document.createElement('div')
        quadrado.appendChild = (linha);
    for (let index = 0; index < num; index +=1){
        let pixel = document.createElement('div')
        pixel.className = 'pixel';
        quadrado.appendChild(pixel);
    }
}
}
board(5)