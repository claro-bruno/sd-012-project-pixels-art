let frame = document.getElementById("pixel-board");;  
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



   //define cor inicial : preta
   window.onload = function () {
    let startcolor = document.querySelector(".color1");
    startcolor.classList.add("selected");
    startcolor.style.backgroundColor = "black";
};
 








    












