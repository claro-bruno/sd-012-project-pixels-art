/* 1 - Adicione à página o título "Paleta de Cores".
O título deverá ficar dentro de uma tag h1 com o id denominado title;
O texto do título deve ser exatamente "Paleta de Cores".
O que será verificado:
Verifica se contém um elemento h1 com o id title com o título correto */

function addTitle () {
    let h1 = document.createElement('h1')
    h1.id = 'title'
    h1.innerHTML = 'Paleta de Cores'
    document.body.appendChild(h1)
}
addTitle();


/* 2 - Adicione à página uma paleta de quatro cores distintas.
A paleta de cores deve ser um elemento com id denominado color-palette, ao passo que cada cor individual da paleta de cores deve possuir a classe color;
A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. A única cor não permitida na paleta é a cor branca.;
Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;
A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título "Paleta de Cores";
A paleta de cores não deve conter cores repetidas.
O que será verificado:
A paleta de cores deve ser um elemento com id denominado color-palette
Verifica se cada cor individual da paleta de cores possui a classe chamada color.
Verifica se a cor de fundo de cada elemento da paleta é a cor que o elemento representa. A única cor não permitida na paleta é a cor branca.
Verifica se cada elemento da paleta de cores tem uma borda preta, sólida e com 1 pixel de largura;
Verifica se a paleta lista todas as cores disponíveis para utilização, lado a lado.
Verifica se a paleta de cores está posicionada abaixo do título 'Paleta de Cores'
Verifica se a paleta de cores não contém cores repetidas. */

/* 3 - Adicione a cor preta como a primeira cor da paleta de cores.
O que será verificado:
Verifica se a primeira cor da paleta é preta
Verifica se as demais cores podem ser escolhidas livremente. */

function adicionaPaleta () {
    let colorPalette = document.createElement('div');
    document.body.appendChild(colorPalette);
    colorPalette.id = 'color-palette';
    let colorList = ['black', 'red', 'green', 'blue'];
    for (let color of colorList) {
        let colorItem = document.createElement('div');
        colorItem.className = 'color';
        colorItem.style.backgroundColor = color;
        colorPalette.appendChild(colorItem);
    }
}
adicionaPaleta();

/* 4 - Adicione à página um quadro de pixels, com 25 pixels.
O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

O quadro de "pixels" deve possuir o id denominado pixel-board, ao passo que cada "pixel" individual dentro do quadro deve possuir a classe denominada pixel;

A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;

O quadro de "pixels" deve aparecer abaixo da paleta de cores.

O que será verificado:

Verifica se o quadro de pixels possui o id denominado pixel-board

Verifica se cada pixel individual dentro do quadro possui a classe denominada pixel.

Verifica se a cor inicial dos pixels dentro do quadro, ao abrir a página, é branca.

Verifica se o quadro de pixels aparece abaixo da paleta de cores */
/* Creditos a https://stackoverflow.com/questions/29229523/how-and-why-to-use-display-table-cell-css */
/* HTML
<div id="table">
    <div class="tr">
        <div class="td"></div>
        <div class="td"></div>
        <div class="td"></div>
    </div>
    <div class="tr">
        <div class="td"></div>
        <div class="td"></div>
        <div class="td"></div>
    </div>
</div>
CSS
#table{ 
    display: table; 
}
.tr{ 
    display: table-row; 
}
.td{ 
    display: table-cell; } */
function adicionaQuadro () {
    let pixelBoard = document.createElement('div');
    document.body.appendChild(pixelBoard);
    pixelBoard.id = 'pixel-board';
    let pixelLines = 5;
    let pixelColumns = 5;
    for (let lineIndex = 0; lineIndex < pixelLines; lineIndex += 1) {
        let line = document.createElement('div');
        pixelBoard.appendChild(line);
        line.className = 'line';
        for (let columnIndex = 0; columnIndex < pixelColumns; columnIndex += 1) {
            let pixel = document.createElement('div');
            line.appendChild(pixel);
            pixel.className = 'pixel';
        }
    }
}
adicionaQuadro();
// window.onload


/* 5 - Faça com que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja delimitado por uma borda preta de 1 pixel.
O que será verificado:

Verifica se o quadro de pixels tem altura e comprimento de 5 elementos

Verifica se 40 pixels é o tamanho total do elemento, incluindo seu conteúdo e excluindo a borda preta, que deve ser criada à parte. */
// Dica CSS: .pixel{box-sizing: border-box}
/* https://www.w3schools.com/csS/css3_box-sizing.asp */ 
/* https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing */

function verificaTamanho () {
    let element = document.getElementsByClassName('pixel')[0]
    let elementHeight = window.getComputedStyle(element, null).getPropertyValue("height");
    let elementWidth = window.getComputedStyle(element, null).getPropertyValue("width");
    // console.log(` pixel height: ${elementHeight}\n pixel width: ${elementWidth}`)
}
verificaTamanho();


/* 6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels
O elemento da cor preta deve possuir, inicialmente, a classe selected;

Note que o elemento que deverá receber a classe selected deve ser um dos elementos que possuem a classe color, como especificado no requisito 2.

O que será verificado:

Verifica se o elemento da cor preta possui, inicialmente, a classe selected

Verifica se nenhuma outra cor da paleta tem a classe selected */
/* Credito: https://www.w3schools.com/howto/howto_js_remove_class.asp */

function selecionaCorInicial () {
    let colorPalette = document.getElementsByClassName('color');
    for (let colorItem of colorPalette) {
        if (colorItem.style.backgroundColor !== 'black') {
            colorItem.classList.remove('selected');
        } else {
            colorItem.classList.add('selected');
        }
    }
}
selecionaCorInicial();


/* 
7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
A classe selected deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

Somente uma das cores da paleta deve ter a classe selected de cada vez;

Note que os elementos que deverão receber a classe selected devem ser os mesmos elementos que possuem a classe color, como especificado no requisito 2.

O que será verificado:

Verifica se somente uma cor da paleta de cores tem a classe selected de cada vez

Verifica se os pixels dentro do quadro não têm a classe selected quando são clicados */

function usuarioEscolheCor () {
    let cores = document.getElementsByClassName('color')
    for (let cor of cores) {
        cor.addEventListener('click', function (event) {
            for (let cor of cores) {
                cor.classList.remove('selected')
            }
            event.target.classList.add('selected')
        })
    }
}
usuarioEscolheCor();


/* 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
O que será verificado:

Verifica se ao carregar a página deve ser possível pintar os pixels de preto

Verifica se após selecionar uma outra cor na paleta, é possível pintar os pixels com essa cor

Verifica se somente o pixel que foi clicado foi preenchido com a cor selecionada, sem influenciar na cor dos demais pixels. */

function preenchePixelClicado () {
    let pixels = document.getElementsByClassName('pixel')
    for (pixel of pixels) {
        pixel.addEventListener('click', function (event) {
        let color = document.getElementsByClassName('color selected')[0].style.backgroundColor;
            event.target.style.backgroundColor = color;
        })
    }
}
preenchePixelClicado();


/* 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
O que será verificado:

Verifica se o botão tem o id denominado clear-board

Verifica se o botão está posicionado entre a paleta de cores e o quadro de pixels

Verifica se o texto do botão é 'Limpar'

Verifica se ao clicar no botão, o quadro de pixels é totalmente preenchido de branco */
/* https://www.w3schools.com/jsref/met_node_insertbefore.asp */

function botaoClearBoard () {
    let button = document.createElement('button')   
    button.id = 'clear-board'
    button.innerHTML = 'Limpar'
    let board = document.getElementById('pixel-board')
    document.body.insertBefore(button, board)
    let pixels = document.getElementsByClassName('pixel')
    button.addEventListener('click', function (event) {
        for (pixel of pixels) {
            pixel.style.backgroundColor = 'white'
        }
    })
}
botaoClearBoard();