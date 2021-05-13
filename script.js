let frame = document.getElementById("pixel-board");;  
        
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

