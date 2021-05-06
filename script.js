window.onload = function () {

    let colorSelection = document.getElementById('color-palette');
    let selectedColor = "black";
    let boardPixels = document.querySelector('#pixel-board');
    let boardClear = document.querySelector("#clear-board");


    createBoard();

    colorSelection.addEventListener('click', function () {
        if (event.target.className == "color") {
            selectedColor = event.target.id;
            let colorName = document.querySelector(".selected-color");

            colorName.innerHTML = selectedColor;
        }

    });


    boardPixels.addEventListener("click", function () {
        if (event.target.className == "pixel") {
            event.target.id = selectedColor;
        }
    })

    boardClear.addEventListener("click", function () {
        let square = boardPixels.querySelectorAll(".pixel");
        square.forEach(element => {
            element.id = "erased";
        })
    })

    function createBoard() {
        for (let pixel = 0; pixel < 25; pixel++) {
            let square = document.createElement('div');
            square.className = ("pixel");
            document.querySelector('#pixel-board').appendChild(square);
            boardPixels.style.width = 210 + "px";
            boardPixels.style.height = 210 + 'px';
        }
    };

}

