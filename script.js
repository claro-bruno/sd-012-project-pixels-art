let colors = document.getElementsByClassName("color");


document.addEventListener("click", function (event) {
    if(event.target.classList.contains("color")) {
        for (let index = 0; index < colors.length; index += 1) {
            colors[index].classList.remove("selected");
        }
        event.target.classList.add("selected");
    }
})