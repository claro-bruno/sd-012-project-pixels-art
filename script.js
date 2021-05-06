window.onload = function () {

    let colorSelection = document.getElementById('color-palette');
    let selectedColor = undefined;
    let boardPixels = document.querySelector('#pixel-board');
    let boardClear = document.querySelector("#clear-board");
    let colors = document.querySelectorAll('.color');

    colors.forEach(element => {
        if (element.id == "black") {
            element.classList.add('selected');
            selectedColor = element.id;
        }
    })

    colors.forEach(element => {
        if (element.classList.contains('selected')) {
            element.id = selectedColor;
        }
    })


    createBoard();

    colorSelection.addEventListener('click', function () {
        if (event.target.className == "color") {
            selectedColor = event.target.id;
            let colorName = document.querySelector(".selected-color");

            colorName.innerHTML = selectedColor;
        }

    });

    colorSelection.addEventListener("click", function () {
        colors.forEach(element => {
            if (element.classList.contains("selected")) {
                element.classList.remove("selected");
            }
        })

        if (event.target.classList.contains("color")) {
            event.target.classList.add("selected");
            event.target.id = selectedColor;
        }
    })

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
            square.id = 'erased';
            document.querySelector('#pixel-board').appendChild(square);
            boardPixels.style.width = 210 + "px";
            boardPixels.style.height = 210 + 'px';
        }
    };

}