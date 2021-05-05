window.onload = function () {

    let colorSelection = document.getElementById('color-palette');
    let selectedColor = undefined;
    let boardPixels = document.querySelector('#pixel-board');
    let boardClear = document.querySelector("#clear-board");


    createBoard();

    colorSelection.addEventListener('click', function () {
        if (event.target.className == "color") {
            selectedColor = event.target.id;
            let colorName = document.querySelector(".selected-color");

            colorName.innerHTML = selectedColor.toUpperCase();
        }

    });

    boardPixels.addEventListener("click", function () {
        if (event.target.className == "color") {
            event.target.id = selectedColor;
        }
    })

    boardClear.addEventListener("click", function () {
        let square = boardPixels.querySelectorAll(".color");
        square.forEach(element => {
            element.id = "erased";
        })
    })

    function createBoard() {
        for (let pixel = 0; pixel < 25; pixel++) {
            let square = document.createElement('div');
            square.className = "color";
            document.querySelector('#pixel-board').appendChild(square);
            boardPixels.style.width = 210 + "px";
            boardPixels.style.height = 210 + 'px';
        }
    };

}

