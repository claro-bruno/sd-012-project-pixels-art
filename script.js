window.onload = function(){
    let preColorSelected = document.getElementById('black');
    preColorSelected.className += ' selected';
}

let colorClick = document.getElementById('color-palette');
colorClick.addEventListener('click', selectColor);

function selectColor(eventOrigem) {
     let idClick = eventOrigem.target.id;
     document.getElementById("black").className = "color"; 
     document.getElementById("red").className = "color";
     document.getElementById("blue").className = "color";
     document.getElementById("green").className = "color";

     if (idClick == "black" || idClick == "red" || 
     idClick == "blue" || idClick == "green") {
         document.getElementById(idClick).className = "color selected";
     }
 }