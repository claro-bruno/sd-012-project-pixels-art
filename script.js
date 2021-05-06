let pixel = document.getElementById('pixel-board')

function board() {
    for(let i = 0; i < 875; i +=1) {
        let div = document.createElement('div')
        div.className = 'pixel'
        pixel.appendChild(div)
    }
}

board()