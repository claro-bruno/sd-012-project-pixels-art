let frame = document.getElementById("pixel-board");;  

//    //define cor inicial : preta
  window.onload  =  function () {
    let startcolor = document.querySelector(".color1");
    startcolor.className= "color color1 selected";
    startcolor.style.backgroundColor = "black";
};
 
   //função cria 25 frames
   function frameBoard (size) {
    for ( let index=0 ; index < size; index +=1) {
     let linha = document.createElement("div");
      frame.appendChild(linha);
    for ( let index=0 ; index < size; index +=1) {
        let coluna = document.createElement("div");
      coluna.className = "pixel"   
      frame.appendChild(coluna);      
      }
    }
      
    }  
  frameBoard(5);  



  
// const selectColor = document.getElementsByClassName('.color'); 
// function colorSelected (event) {
//   for ( let index=0; index < selectColor.length; index += 1) {
//     if (selectColor[index].classList.remove('selected'));
//   }
//   onlySelected.classList.add('selected')
// }


// onlySelected.addEventListener('click', colorSelected);



















const btnClear = document.getElementById('clear-board');
let framePixels = document.getElementsByClassName('pixel');
function limpaTudo() {
  for (let index = 0; index < framePixels.length; index += 1) {
    framePixels[index].style.backgroundColor = rgb(255,255,255);
  }
}
btnClear.addEventListener('click', limpaTudo);


 