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
    function selectColor(event) {
        for(let j = 0; j < colors.length; j++) {
            if(colors[j].className == "color selected") {
                colors[j].className = "color"
            }
        }
        event.target.className = "color selected";
        console.log("black: " + colors[0].className);
        console.log("red: " + colors[1].className);
        console.log("green: " + colors[2].className);
        console.log("blue: " + colors[3].className);
    }
}