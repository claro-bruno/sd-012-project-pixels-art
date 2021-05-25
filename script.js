let frame = document.getElementById("pixel-board");
let paletaDeCores = document.querySelector('#color-palette');
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
      }
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

  
  function createColors() {
    const color = document.getElementsByClassName('color');
    const letters = '0123456789ABCDEF';
    for (let index = 1; index < color.length; index += 1) {
      let newColor = '#';
      for (let index2 = 0; index2 < 6; index2 += 1) {
        newColor += letters[Math.floor(Math.random() * 16)];
      }
      color[index].style.backgroundColor = newColor;
      }
    return letters;
  }
  
  createColors();
     

const btnLimpar = document.getElementById('clear-board')
btnLimpar.addEventListener('click', () => {
let limpaPixels = document.querySelectorAll(".pixel");
  for ( let index = 0; index < limpaPixels.length; index += 1) {
      limpaPixels[index].style.backgroundColor = "white";
  }
})
