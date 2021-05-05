window.onload = function() {
    let pixel_board = document.getElementById("pixel-board");
    for (let i = 0; i < 5; i++) {
        let linha_pixel = document.createElement("div");
        pixel_board.style.display = "block";
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
}