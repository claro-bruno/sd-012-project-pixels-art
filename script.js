let nomesDasCores = ['black', 'yellow', 'blue', 'green', 'red']

function idsStyleDivsCores() {
    let listaCores = document.getElementsByClassName('color'); //captura lista de cores html
    for (index = 0; index < listaCores.length; index += 1){
        let cor = listaCores[index]; //captura cor html
        cor.id = nomesDasCores[index]; //adiciona id de cada cor
        cor.style.backgroundColor = nomesDasCores[index];
    };
};

idsStyleDivsCores();