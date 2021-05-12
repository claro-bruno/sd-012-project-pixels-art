window.onload = function () {

    let colorSelection = document.getElementById('color-palette');
    let selectedColor = undefined;
    let boardPixels = document.querySelector('#pixel-board');
    let boardClear = document.querySelector("#clear-board");
    let colors = document.querySelectorAll('.color');
    let generateGridButton = document.querySelector('#generate-board');

    createBoard();

    colors.forEach(element => {
        if (element.id == "black") {
            element.classList.add('selected');
            selectedColor = element.id;
        }
    });

    colors.forEach(element => {
        if (element.classList.contains('selected')) {
            element.id = selectedColor;
        }
    });

    function createBoard(value = 5) {
        let size = value * value;
        divSize = 40;

        for (let pixel = 0; pixel < size; pixel++) {
            let square = document.createElement('div');
            square.className = ("pixel");
            square.id = 'erased';
            square.style.width = divSize + "px";
            square.style.height = divSize + "px";
            square.style.margin = "0px";
            document.querySelector('#pixel-board').appendChild(square);
            boardPixels.style.width = ((value * divSize) + (value * 2)) + "px";
        }
    };

    function selectColor() {
        if (event.target.className == "color") {
            selectedColor = event.target.id;
            let colorName = document.querySelector(".selected-color");

            colorName.innerHTML = selectedColor;
        }
    };

    function selecionarCores() {
        colors.forEach(element => {
            if (element.classList.contains("selected")) {
                element.classList.remove("selected");
            }
        })

        if (event.target.classList.contains("color")) {
            event.target.classList.add("selected");
            event.target.id = selectedColor;
        }
    };

    function pintarTabuleiro() {
        if (event.target.className == "pixel") {
            event.target.id = selectedColor;
        }
    };

    function limparTabuleiro() {
        let square = boardPixels.querySelectorAll(".pixel");
        square.forEach(element => {
            element.id = "erased";
        });
    };

    function gerarGrid() {
        let userInput = document.querySelector('#board-size');
        let tamanhoGrid = userInput.value;
        createBoard(tamanhoGrid);
    };

    colorSelection.addEventListener('click', selectColor);

    colorSelection.addEventListener("click", selecionarCores);

    boardPixels.addEventListener("click", pintarTabuleiro);

    boardClear.addEventListener("click", limparTabuleiro);

    generateGridButton.addEventListener('click', gerarGrid);
}
