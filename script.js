window.onload = function() {
    let pixel_board = document.getElementById("pixel-board");
    for (let i = 0; i < 5; i++) {
        let linha_pixel = document.createElement("div");
        linha_pixel.style.display = "block";
        linha_pixel.style.height = "40px";
        pixel_board.appendChild(linha_pixel);
        for (let i = 0; i < 5; i++) {
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
    let colors = document.querySelectorAll(".color");
    for(let i = 0; i < colors.length; i++) {
        colors[i].addEventListener("click", selectColor);
    }
    colors[0].style.backgroundColor = "black";
    colors[1].style.backgroundColor = "red";
    colors[2].style.backgroundColor = "green";
    colors[3].style.backgroundColor = "blue";
    function selectColor(event) {
        for(let j = 0; j < colors.length; j++) {
            if(colors[j].className == "color selected") {
                colors[j].className = "color"
            }
        }
        event.target.className = "color selected";
    }
    let pixels = document.querySelectorAll(".pixel");
    for(let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener("click", paintPixel);
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
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].style.backgroundColor = "white";
        }
    }
}