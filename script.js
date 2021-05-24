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

  
  



 
// function OneSelected (event) {
//   let selecionada = document.querySelector(".selected");
//   selecionada.classList.remove("selected");
//     event.target.className.add("color selected");
// };

// let listaDasCores = document.querySelectorAll(".color");

// for (let index = 0; index < listaDasCores.length; index += 1) {
//     listaDasCores[index].addEventListener("click", OneSelected);
// };


// botao limparAll 
const btnLimpar = document.getElementById('clear-board')


function limpaTudo () {
btnLimpar.addEventListener('click', () => {
let limpaPixels = document.querySelectorAll(".pixel");

  for(let index = 0; index < limpaPixels.length; index += 1) {
      limpaPixels[index].style.backgroundColor = "white";
  }
});
}
limpaTudo();













 