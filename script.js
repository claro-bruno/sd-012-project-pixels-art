let frame = document.getElementById("pixel-board");;  

//    //define cor inicial : preta
  window.onload  =  function () {
    let startcolor = document.querySelector(".color1");
    startcolor.className= "color color1 selected";
    startcolor.style.backgroundColor = "black";
};
 document.addEventListener('click', function (event) {
    let selectColor = document.querySelector(".selected");
    if (event.target.classList.contains('color1')) {        
        selectColor.classList.toggle("selected");
        event.target.classList.toggle("selected");
     };
    if (event.target.classList.contains('color2')) {        
        selectColor.classList.toggle("selected");
        event.target.classList.toggle("selected");
      };
    if (event.target.classList.contains('color3')) {       
        selectColor.classList.toggle("selected");
        event.target.classList.toggle("selected");
      };
    if (event.target.classList.contains('color4')) {       
        selectColor.classList.toggle("selected");
        event.target.classList.toggle("selected");
      };
      if (event.target.classList.contains('pixel')) {      

        let selectedCor = document.querySelector('.selected');
        
        event.target.style.backgroundColor = window.getComputedStyle(selectedCor).backgroundColor;
      };
    })

//função cria 25 frames
function frameBoard (size) {
  for ( let index=0 ; index < size; index +=1) {
     let linha = document.createElement("div");
      frame.appendChild(linha);
        for ( let index=0 ; index < size; index +=1) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";  
        
        linha.appendChild(pixel);      
    }
    }
    }  
  frameBoard(5); 

const btnLimpar = document.getElementById('clear-board')
btnLimpar.addEventListener('click', () => {
let limpaPixels = document.querySelectorAll(".pixel");
  for ( let index = 0; index < limpaPixels.length; index += 1) {
      limpaPixels[index].style.backgroundColor = "white";
  }
})
 

const btnSize = document.querySelector('#generate-board');
btnSize.innerHTML = 'VQV';
let sizeFrame = document.getElementById('board-size');
btnSize.addEventListener('click', () => {
  if (sizeFrame.value >= 5 && sizeFrame.value <= 50) {
      frameBoard(sizeFrame.value);
      sizeFrame.value = '';
  }
  else{
    alert('Board inválido!');
    sizeFrame.value = '';
  }  
});