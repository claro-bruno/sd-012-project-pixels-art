function createQuadradinhos() {
    for (let index = 0; index < 5; index += 1) {
        const getPixelBoard = document.querySelector('#pixel-board');
        const quadradoItem = document.createElement('div');
        const paragrafo = document.createElement('p');
        getPixelBoard.appendChild(paragrafo);
        for(let indexLinha = 0; indexLinha < 5; indexLinha += 1) {
            const quadradoItem = document.createElement('div');
            quadradoItem.className = 'pixels';
            quadradoItem.style.width = '40px';
            quadradoItem.style.height = '40px';
            quadradoItem.style.border = 'solid 1px black';
            quadradoItem.style.lineHeight = '0';
            quadradoItem.style.display = 'inline-block';
            getPixelBoard.appendChild(quadradoItem);
        }

        
    }   
}

createQuadradinhos();