

    
    document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
    document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
    document.getElementsByClassName('color')[2].style.backgroundColor = 'blue';
    document.getElementsByClassName('color')[3].style.backgroundColor = 'green';
    
    let getBoard = document.querySelector('#pixel-board');
    

    function pixelBoard(size){
        // cria a linha
        for(let row = 0; row < size; row += 1){
            let pixelRow = document.createElement('div');

            pixelRow.className = 'pixel-row';
            getBoard.appendChild(pixelRow);
            //cria a coluna
            for(let cell = 0; cell < size; cell += 1){
                let coluna = document.createElement('div');
                coluna.className = 'pixel';
                pixelRow.appendChild(coluna);
    
            }

        }
    }
    pixelBoard(5);


//referência para resolução do requisito https://trybecourse.slack.com/archives/C01T2C18DSM/p1620259863380200
//https://developer.mozilla.org/pt-BR/docs/Web/API/Element/id

function selectColorsPallet(event){
    let select = document.querySelector('.selected');
    select.classList.remove('selected');//remove a claase selected de todos os elementos
    event.target.classList.add('selected'); //adiciona a classe selected ao elemento do evento atual

}

let  selectedPixel = document.getElementsByClassName('color');

for(let colors of selectedPixel){
    colors.addEventListener('click', selectColorsPallet);

}

function paintPixel(event){
    let pixelColor = document.querySelector('.selected');
    event.target.style.backgroundColor = pixelColor.style.backgroundColor;//pega o estilo do selected e atribui a cor ao evento
}

let colorSelected = document.getElementsByClassName('pixel');

for(let pixels of colorSelected){
    pixels.addEventListener('click', paintPixel);//atribui evento aos pixels da tabela

} 

let clearButton = document.getElementById('clear-board');


function clearTable(){
    for (let clear of colorSelected){
        clear.style.backgroundColor = 'white';
    }
}
clearButton.addEventListener('click', clearTable);

