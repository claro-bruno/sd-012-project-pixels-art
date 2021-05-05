let coresDaPaleta = [preto, amarelo, azul, verde, vermelho, laranja];

function divsCoresPaleta() {
    for (index = 0; index < coresDaPaleta.length; index += 1){
        let cor = document.createElement('div'); //cria elemento div com cor
        let divPalette = document.getElementById('color-palette');
        divPalette.appendChild(cor);
        cor.className = 'color'
    };
};

;