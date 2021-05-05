window.onload = function () {

    let colorSelection = document.getElementById('color-palette');
    let selectedColor = undefined;
    let boardPixels = document.querySelector('#pixel-board');


    createBoard();

    colorSelection.addEventListener('click', function () {
        selectedColor = event.target.id;
        let colorName = document.querySelector(".selected-color");

        colorName.innerHTML = selectedColor.toUpperCase();
    });

    boardPixels.addEventListener("click", function () {
        event.target.id = selectedColor;
    })

    function createBoard() {
        for (let pixel = 0; pixel < 25; pixel++) {
            let square = document.createElement('div');
            square.className = "color";
            square.id = "erased";
            document.querySelector('#pixel-board').appendChild(square);
            boardPixels.style.width = 210 + "px";
            boardPixels.style.height = 210 + 'px';
        }
    };

}

