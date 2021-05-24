window.onload = function () {
    pixelBoard(5);
};

function pixelBoard(tam){ 

    let pxBrd = document.getElementById("pxBrd");

    let PxBoard = document.createElement('table');
        PxBoard.id = "pixel-board";       

    let corpo = document.createElement('tbody');

    pxBrd.appendChild(PxBoard);
    for (let index = 0; index < tam; index += 1) {   
        
        let linha = document.createElement("tr");

        for (let index = 0; index < tam; index += 1) {  
            let coluna = document.createElement("td");
            coluna.className = 'pixel';
            linha.appendChild(coluna);
        } 
       
        corpo.appendChild(linha);

    }   
    
    PxBoard.appendChild(corpo);

}


document.addEventListener('click', function (event) {
    let activeColor = document.querySelector(".selected");

    if (event.target.classList.contains('clr1')) {        
        activeColor.classList.toggle("selected");
        event.target.classList.toggle("selected");
     };

    if (event.target.classList.contains('clr2')) {        
        activeColor.classList.toggle("selected");
        event.target.classList.toggle("selected");
      };

    if (event.target.classList.contains('clr3')) {       
        activeColor.classList.toggle("selected");
        event.target.classList.toggle("selected");
      };

    if (event.target.classList.contains('clr4')) {       
        activeColor.classList.toggle("selected");
        event.target.classList.toggle("selected");
      };

    if (event.target.classList.contains('pixel')) {      

        let selectedCor = document.querySelector('.selected');
        // Link de referencia https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
        event.target.style.backgroundColor = window.getComputedStyle(selectedCor).backgroundColor;
      };
  })


  function limparBoard(){
    
      let pxl = document.querySelectorAll('.pixel');

      for (let index = 0; index < pxl.length; index += 1) {
          pxl[index].style.backgroundColor = "white";          
      }
  }

  function apagaBoard() {
    let pixelBoard = document.getElementById("pixel-board");
    pixelBoard.parentNode.removeChild(pixelBoard);
  };

  function gerarBoard() {

    let size = document.getElementById("board-size").value;
    
    if (size != 0) {
        if (size < 5 && size > 0){
            apagaBoard();
            pixelBoard(5);
          } else if (size > 50) {
            apagaBoard();
            pixelBoard(50);
          } else if (size > 4 | size < 51) {
            apagaBoard();
            pixelBoard(size);
          } else {
            window.alert("Board inválido!");
          }
    } else {
        window.alert("Board inválido!");
    }

    
  };
