let quadrado = document.getElementById('pixel-board');
function quadrado25(num) {
    for (let index = 0; index < num; index += 1) {
        let linha = document.createElement('div');
        quadrado.appendChild(linha);
        for (let index = 0; index < num; index += 1) {
            let coluna = document.createElement('div')
            coluna.className = 'pixel';
            quadrado.appendChild(coluna);
        }
    }
}
quadrado25(5)

let initColor = document.body.addEventListener('click', function (event) {
    if (event.target.className = 'pixel') {
       event.target.style.backgroundColor = 'black';
    }
})