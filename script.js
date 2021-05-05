function paletaCores(nomeCores) {
    let getContainer = document.querySelector('#color-palette');
    console.log(getContainer)
    for (let index = 0; index < nomeCores.length; index += 1) {
        let newColor = document.createElement('div');
        console.log(newColor)
        newColor.className = 'color';
        newColor.style.backgroundColor = nomeCores[index];
        //newColor.innerText = nomeCores[index]; 
        //newColor.style.width = '500px';
        //newColor.style.height = '100px';
        getContainer.appendChild(newColor);
    }
}

let cores = ['blue', 'green', 'red', 'black'];
paletaCores(cores);

// ex3

