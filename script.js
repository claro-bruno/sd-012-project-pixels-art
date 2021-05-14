let getIdPixelBoard = document.querySelector('#pixel-board');

for (let indexTr = 0; indexTr < 5; indexTr += 1) {
    let createTr = document.createElement('tr');
    getIdPixelBoard.appendChild(createTr);
    
        for(let indexTd = 0; indexTd < 5; indexTd += 1) {
            let createTd = document.createElement('td');
            let getTagTr = document.querySelectorAll('tr');
            createTd.className = 'pixel';
            getTagTr[indexTr].appendChild(createTd);
        };
};

let getClassColor = document.querySelectorAll('.color');


for (let indexClassColor = 0; indexClassColor < getClassColor.length; indexClassColor += 1) {
    getClassColor[indexClassColor].addEventListener('click', function(event){
        let getFirstSelection = document.getElementsByClassName('selected')[0];
        getFirstSelection.classList.remove('selected');
        event.target.classList.add('selected');
        let getSelectedColor = document.querySelectorAll('.selected');          //pega cor selecionada
        let getSelectedActualColor = window.getComputedStyle(getSelectedColor[0]).getPropertyValue('background-color'); //pega o valor da cor adicionada
        let getPixel = document.querySelectorAll('.pixel');     //pega todos os elementos pixels
            for (let mudaCorPixel = 0; mudaCorPixel  < getPixel.length; mudaCorPixel += 1) {
                getPixel[mudaCorPixel].addEventListener('click', function(){
                    getPixel[mudaCorPixel].style.backgroundColor = getSelectedActualColor;
                })
                
            }
    });
};


let getButton = document.getElementById('clear-board');
let getPixelsId = document.querySelectorAll('.pixel');
getButton.addEventListener('click', function (){
    for (let indexPixels = 0; indexPixels < getPixelsId.length; indexPixels += 1) {
        getPixelsId[indexPixels].style.backgroundColor = 'rgb(255,255,255)';
    }
})





