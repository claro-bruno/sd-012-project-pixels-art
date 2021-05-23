window.onload = pixelBoard;

function pixelBoard(){ 
    for (let index = 0; index < 25; index += 1) {       
        const pxBoard = document.querySelector('#pixel-board');
        let pxl = document.createElement('div');
        pxl.className = 'pixel';
        pxBoard.appendChild(pxl); 
               
    }    
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
      for (let index = 0; index < 25; index += 1) {
          pxl[index].style.backgroundColor = "white";          
      }
  }
