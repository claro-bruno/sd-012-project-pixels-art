window.onload = function () {

    entradaFormatado = 5;
        for(indexLinha = 0; indexLinha < entradaFormatado; indexLinha += 1){
            let linha = document.createElement('div');
            linha.className = 'linha';
            document.querySelector('#pixel-board').appendChild(linha);
            for(indexColuna = 0; indexColuna < entradaFormatado; indexColuna += 1){
                let criaPixel = document.createElement('div');
                criaPixel.className = 'pixel';
                criaPixel.addEventListener('click', function(event){
                    let cor = document.querySelector('.selected');
                    let corSelected = window.getComputedStyle(cor).getPropertyValue('background-color');
                    event.target.style.backgroundColor = corSelected;
                })
                document.querySelectorAll('.linha')[indexLinha].appendChild(criaPixel);
                document.querySelector('#pixel-board').style.border = '1px solid black';
            }
        };
    
    function criaQuadro() {
        let btn = document.getElementById('generate-board');
        btn.addEventListener('click', function() {
            let entrada = document.getElementById('board-size').value;
            let entradaFormatado = parseInt(entrada);
            if(entrada == ''){
                alert('Board Inválido!')
            }
            else if(entradaFormatado >= 5 && entradaFormatado <= 50){
            for(indexLinha = 0; indexLinha < entradaFormatado; indexLinha += 1){
                let linha = document.createElement('div');
                linha.className = 'linha';
                document.querySelector('#pixel-board').appendChild(linha);
                for(indexColuna = 0; indexColuna < entradaFormatado; indexColuna += 1){
                let criaPixel = document.createElement('div');
                criaPixel.className = 'pixel';
                criaPixel.addEventListener('click', function(event){
                    let cor = document.querySelector('.selected');
                    let corSelected = window.getComputedStyle(cor).getPropertyValue('background-color');
                    event.target.style.backgroundColor = corSelected;
                })
                document.querySelectorAll('.linha')[indexLinha].appendChild(criaPixel);
                document.querySelector('#pixel-board').style.border = '1px solid black';
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
                        let cor = document.querySelector('.selected');
                    let corSelected = window.getComputedStyle(cor).getPropertyValue('background-color');
                    event.target.style.backgroundColor = corSelected;
                    })
                    document.querySelectorAll('.linha')[indexLinha].appendChild(criaPixel);
                    document.querySelector('#pixel-board').style.border = '1px solid black';
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
                        let cor = document.querySelector('.selected');
                    let corSelected = window.getComputedStyle(cor).getPropertyValue('background-color');
                    event.target.style.backgroundColor = corSelected;
                    })
                    document.querySelectorAll('.linha')[indexLinha].appendChild(criaPixel);
                    document.querySelector('#pixel-board').style.border = '1px solid black';
                    }
                };
            }
        })
    }

    function paletaCores() {
        let selectColor = document.getElementsByClassName('color');
        let cor1 = document.getElementById('cor-1');
        cor1.classList.add('selected');
        for (indexColor = 0; indexColor < selectColor.length; indexColor += 1){
            selectColor[indexColor].addEventListener('click', function(event) {
                let selecionado = document.querySelector('.selected');
                selecionado.classList.remove('selected');
                event.target.classList.add('selected');
            })
        };
    }
    
    criaQuadro();
    paletaCores();
}