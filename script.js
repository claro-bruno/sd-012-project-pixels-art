let colors = document.getElementsByClassName("color");
let pixels = document.getElementsByClassName("pixel");
let clearBoard = document.getElementById("clear-board");

document.addEventListener("click", function (event) {
    let colorSelected = document.getElementsByClassName("selected")[0];

    if(event.target.classList.contains("color")) {
        for (let index = 0; index < colors.length; index += 1) {
            colors[index].classList.remove("selected");
        }
        event.target.classList.add("selected");
    }

    if(event.target.classList.contains("pixel")) {
        event.target.style.backgroundColor = getComputedStyle(colorSelected).getPropertyValue("background-color");
    }

    if(event.target == clearBoard) {
        for (let index = 0; index < pixels.length; index += 1) {
            pixels[index].style.backgroundColor = "white";
        }
    }
})