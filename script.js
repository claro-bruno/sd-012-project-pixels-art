// 1 - Adicione à página o título "Paleta de Cores".
// O título deverá ficar dentro de uma tag h1 com o id denominado title;
// O texto do título deve ser exatamente "Paleta de Cores".
// O que será verificado:
// Verifica se contém um elemento h1 com o id title com o título correto

let h1 = document.createElement('h1')
h1.id = 'title'
h1.innerHTML = 'Paleta de Cores'
document.body.appendChild(h1)

// 2 - Adicione à página uma paleta de quatro cores distintas.
// A paleta de cores deve ser um elemento com id denominado color-palette, ao passo que cada cor individual da paleta de cores deve possuir a classe color;
// A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. A única cor não permitida na paleta é a cor branca.;
// Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;
// A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título "Paleta de Cores";
// A paleta de cores não deve conter cores repetidas.
// O que será verificado:
// A paleta de cores deve ser um elemento com id denominado color-palette
// Verifica se cada cor individual da paleta de cores possui a classe chamada color.
// Verifica se a cor de fundo de cada elemento da paleta é a cor que o elemento representa. A única cor não permitida na paleta é a cor branca.
// Verifica se cada elemento da paleta de cores tem uma borda preta, sólida e com 1 pixel de largura;
// Verifica se a paleta lista todas as cores disponíveis para utilização, lado a lado.
// Verifica se a paleta de cores está posicionada abaixo do título 'Paleta de Cores'
// Verifica se a paleta de cores não contém cores repetidas.

let colorPalette = document.createElement('div')
document.body.appendChild(colorPalette)
colorPalette.id = 'color-palette'
let colorList = ['black', 'red', 'green', 'blue']
for (color of colorList) {
    let colorItem = document.createElement('div')
    colorItem.className = 'color'
    colorItem.style.backgroundColor = color
    colorItem.style.borderColor = 'black'
    colorItem.style.borderStyle = 'solid'
    colorItem.style.borderWidth = '1px'
    colorItem.style.display = 'inline-block'
    colorPalette.appendChild(colorItem)
}