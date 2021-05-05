//ex2
function paletaCores(nomeCores) {
    let getContainer = document.querySelector('#color-palette');
    for (let index = 0; index < nomeCores.length; index += 1) {
        let newColor = document.createElement('div');
        newColor.className = 'color';
        newColor.style.backgroundColor = nomeCores[index];
        //newColor.innerText = nomeCores[index]; 
        //newColor.style.width = '500px';
        //newColor.style.height = '100px';
        getContainer.appendChild(newColor);
    }
}

let cores = ['blue', 'green', 'red', 'black'];

let corSubs = [];
//ex3
function organizaPreto (coresE) {
for (let i = 1; i < cores.length; i += 1) {
    if (coresE[0] !== 'black') {
        corSubs = cores[0];
        coresE[0] = 'black';
    }
    if (coresE[i] === 'black') {
        coresE[i] = corSubs
    }
}
}

organizaPreto(cores);
paletaCores(cores);



