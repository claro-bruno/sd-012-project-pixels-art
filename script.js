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
function OneSelected (event) {
  const selection = event.target;
  let paleteDeCores = document.getElementsByTagName('td')
  for (let index = 0; index < paleteDeCores.length; index += 1 ){
   (paleteDeCores[index].classList.remove('selected') );
}
  selection.classList.add('selected')
}

document.addEventListener('click', OneSelected)















 