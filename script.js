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
        let pixel = document.createElement("div");
        pixel.className = "pixel";  
        
        linha.appendChild(pixel);      
    }
    }
    }  
  frameBoard(5); 

  
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
  })

  