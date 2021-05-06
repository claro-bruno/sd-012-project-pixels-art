window.onload = function(){
    gerarPixelBoard();
    let cores = document.getElementsByClassName('color')
    
    selecionarCor(cores)
    
    

}

function gerarPixelBoard(){
    let pixelBoard = document.getElementById('pixel-board');
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            let cell = document.createElement('div')
            cell.style.border = '1px solid black'
            cell.style.width = '40px'
            cell.style.height = '40px'
            cell.style.background = 'white'
            cell.className = 'pixel'
            pixelBoard.appendChild(cell)
        }
    }
}

function selecionarCor(array){

    for(let item of array){
        item.addEventListener('click', (e) => {
            for(let itemRemovivel of array){
                itemRemovivel.classList.remove('selected')
            }
            e.target.classList.toggle('selected')
            console.log(array)
        })
    }
    
}