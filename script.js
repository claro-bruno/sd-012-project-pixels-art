window.onload = function () {


gerarBoard(5);
}

function gerarBoard(numero) {
    let pixelBoard = document.getElementById('pixel-board');
    for (let index = 0; index < numero; index += 1){
        console.log(index);
        let primeiraDiv = document.createElement('div');
        primeiraDiv.className = 'linha';
        pixelBoard.appendChild(primeiraDiv);
        for (let index2 = 0; index2 < numero; index2 += 1){
          let divInterna = document.createElement('div');
          divInterna.className = 'pixel';
          primeiraDiv.appendChild(divInterna);
    }
  }
  
}