window.onload = function () {
    
    function criaQuadro() {
        let btn = document.getElementById('btn');
        btn.addEventListener('click', function() {
            let entrada = document.getElementById('inputTamanho').value;
            let entradaFormatado = parseInt(entrada);
            if(entradaFormatado >= 5 && entradaFormatado <= 50){
            for(indexLinha = 0; indexLinha < entradaFormatado; indexLinha += 1){
                let linha = document.createElement('div');
                linha.className = 'linha';
                document.querySelector('#pixel-board').appendChild(linha);
                for(indexColuna = 0; indexColuna < entradaFormatado; indexColuna += 1){
                let criaPixel = document.createElement('div');
                criaPixel.className = 'pixel';
                criaPixel.addEventListener('click', function(event){
                })
                document.querySelectorAll('.linha')[indexLinha].appendChild(criaPixel);
                }
            };
            } else if(entradaFormatado < 5){
                entradaFormatado = 5;
                for(indexLinha = 0; indexLinha < entradaFormatado; indexLinha += 1){
                    let linha = document.createElement('div');
                    linha.className = 'linha';
                    document.querySelector('#pixel-board').appendChild(linha);
                    for(indexColuna = 0; indexColuna < entradaFormatado; indexColuna += 1){
                    let criaPixel = document.createElement('div');
                    criaPixel.className = 'pixel';
                    criaPixel.addEventListener('click', function(event){
                    })
                    document.querySelectorAll('.linha')[indexLinha].appendChild(criaPixel);
                    }
                };
            } else if(entradaFormatado > 50){
                entradaFormatado = 50;
                for(indexLinha = 0; indexLinha < entradaFormatado; indexLinha += 1){
                    let linha = document.createElement('div');
                    linha.className = 'linha';
                    document.querySelector('#pixel-board').appendChild(linha);
                    for(indexColuna = 0; indexColuna < entradaFormatado; indexColuna += 1){
                    let criaPixel = document.createElement('div');
                    criaPixel.className = 'pixel';
                    criaPixel.addEventListener('click', function(event){
                    })
                    document.querySelectorAll('.linha')[indexLinha].appendChild(criaPixel);
                    }
                };
            }
        })
    }

    function paletaCores() {
        let cor1 = document.getElementById('cor-1');
        cor1.classList.add('selected')
        cor1.addEventListener('click', function(){
            cor1.classList.toggle('selected')
        })
        let cor2 = document.getElementById('cor-2');
        cor2.addEventListener('click', function(){
            cor2.classList.toggle('selected')
        })
        let cor3 = document.getElementById('cor-3');
        cor3.addEventListener('click', function(){
            cor3.classList.toggle('selected')
        })
        let cor4 = document.getElementById('cor-4');
        cor4.addEventListener('click', function(){
            cor4.classList.toggle('selected')
        })   
    }
    
    criaQuadro();
    paletaCores();
}