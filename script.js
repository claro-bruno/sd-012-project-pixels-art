let quadroDePixels = document.getElementById('pixel-board');

function board25 (){
for(let linha = 0; linha < 5; linha += 1){
    let coluna = document.createElement('div')
   quadroDePixels.appendChild(coluna)
    

    for(let i = 0; i < 5; i += 1){
       let coluna = document.createElement('div')
        coluna.className = 'pixel'
       quadroDePixels.appendChild(coluna)
              
        
    }
}
}
board25(5)

document.body.addEventListener('click', function(event){
    if(event.target.className = 'pixel'){
        event.target.style.backgroundColor = 'yellow';
    }
})