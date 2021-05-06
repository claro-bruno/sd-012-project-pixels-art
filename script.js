window.onload = function () {
    //Variaveis importantes ou recorrentes
    let boardersNumberOfPixels = 25;
    //Seta as cores iniciais da paleta de cores
    const color1 = document.getElementsByClassName('color')[0];
    color1.style.backgroundColor = 'black';
    const color2 = document.getElementsByClassName('color')[1];
    color2.style.backgroundColor = 'red';
    const color3 = document.getElementsByClassName('color')[2];
    color3.style.backgroundColor = 'blue';
    const color4 = document.getElementsByClassName('color')[3];
    color4.style.backgroundColor = 'green';
    //Cria dinamicamente os pixels do pixel-board
    function createPixels () {
        let pixelBoard = document.getElementById('pixel-board');
        pixelBoard.style.maxWidth = '210px';
        for (let index = 0; index < boardersNumberOfPixels; index += 1) {
            let pixelCreate = document.createElement('div');
            pixelCreate.className = 'pixel';
            pixelBoard.appendChild(pixelCreate)
        }
    }
    createPixels();
    //Defina a cor preta como inicial.
    function setBlackAsDefault () {
        color1.className = 'color selected';
        }
    setBlackAsDefault();
    //Adiciona a classe selected ao clicar em uma cor da paleta
    function selectColor (color) {
        color.addEventListener('click', event => {
        if (event.target.className !== 'color selected') {
            event.target.className = 'color selected';
            resetClass(color);
            }
        })
    }
    selectColor(color1);
    selectColor(color2);
    selectColor(color3);
    selectColor(color4);
    //Reseta a classe para color(esta função será invocada dentro da função selectcolor)
    function resetClass (color) {
        let colors = document.getElementsByClassName('color');
        for (let index = 0; index < colors.length; index += 1) {
            if (colors[index].className !== 'color' && colors[index] !== color) {
                colors[index].className = 'color';
            }
        }
    } 
//Pinta os pixels com a cor selecionada
    function pixelPainter () {
        let pixels = document.querySelectorAll('.pixel');

        for (let index = 0; index < pixels.length; index += 1) {
            pixels[index].addEventListener('click', event => {
                let selectedColor = document.querySelector('.selected');
                let pixel = event.target;

                pixel.style.backgroundColor = selectedColor.style.backgroundColor;

            })
        }
    }
    pixelPainter();











}
