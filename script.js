window.onload = function () {
    
    function criaQuadro() {
        btn.addEventListener('click', function() {
            let entrada = document.getElementById('inputTamanho').value;
            let entradaFormatado = parseInt(entrada);
            let tamanhoQuadro = Math.pow(entradaFormatado, 2);
            let btn = document.getElementById('btn');
            for(index = 0; index < tamanhoQuadro; index += 1){
                let criaPixel = document.createElement('div');
                criaPixel.className = 'pixel';
                const div = document.querySelector('#pixel-board').appendChild(criaPixel);
            };
        })
    }
    criaQuadro();
}