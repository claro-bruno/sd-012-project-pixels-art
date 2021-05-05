window.onload = function() {
    let pixel_board = document.getElementById("pixel-board");
    let board_size = document.getElementById("board-size");
    let generate_board = document.getElementById("generate-board");
    generate_board.addEventListener("click", setBoardSize);
    let control_board = 0;

    function createBoard(size) {
        if(size < 5) {
            size = 5;
        }
        if(size > 50) {
            size = 50;
        }
        for (let i = 0; i < size; i++) {
            let linha_pixel = document.createElement("div");
            linha_pixel.style.display = "block";
            linha_pixel.style.height = "40px";
            pixel_board.appendChild(linha_pixel);
            for (let i = 0; i < size; i++) {
                let pixel = document.createElement("div");
                pixel.className = "pixel";
                pixel.style.backgroundColor = "white";
                pixel.style.display = "inline-block";
                pixel.style.width = "40px";
                pixel.style.height = "40px";
                pixel.style.border = "1px solid black";
                linha_pixel.appendChild(pixel);
            }
        }
    }

    createBoard(5);

    function setBoardSize() {
        if(board_size.value == 0 || board_size.value < 0) {
            alert("Board inválido!");
        }
        else{
            if(control_board === 0) {
                createBoard(board_size.value);
                control_board++;
            }
            else{
                let div = document.getElementById("pixel-board");
                let size = div.childElementCount;
                for(let i = 0; i < size; i++) {
                    div.removeChild(div.firstChild);
                }
                createBoard(board_size.value);
            }
            let pixels = document.querySelectorAll(".pixel");
            for(let i = 0; i < pixels.length; i++) {
                pixels[i].addEventListener("click", paintPixel);
            }
        }
    }

    let colors = document.querySelectorAll(".color");
    for(let i = 0; i < colors.length; i++) {
        colors[i].addEventListener("click", selectColor);
    }
    
    colors[0].style.backgroundColor = "black";
    colors[1].style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    colors[2].style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    colors[3].style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    function selectColor(event) {
        for(let j = 0; j < colors.length; j++) {
            if(colors[j].className == "color selected") {
                colors[j].className = "color"
            }
        }
        event.target.className = "color selected";
    }

    function paintPixel(event) {
        let cor;
        for(let i = 0; i < colors.length; i++) {
            if(colors[i].className == "color selected") {
                cor = colors[i].style.backgroundColor;
            }
        }
        event.target.style.backgroundColor = cor;
    }

    let clear = document.getElementById("clear-board");
    clear.addEventListener("click", clearBoard);

    function clearBoard() {
        let pixels = document.querySelectorAll(".pixel");
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].style.backgroundColor = "white";
        }
    }

}