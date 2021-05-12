function selecioneColor1() {
    let mudançaDeCor = document.getElementsByClassName("selected")[0];
    mudançaDeCor.style.backgroundColor = "black";
}

function selecioneColor2() {
    let mudançaDeCor = document.getElementsByClassName("selected")[0];
    mudançaDeCor.style.backgroundColor = "green";
}

function selecioneColor3() {
    let mudançaDeCor = document.getElementsByClassName("selected")[0];
    mudançaDeCor.style.backgroundColor = "blue";
}

function selecioneColor4() {
    let mudançaDeCor = document.getElementsByClassName("selected")[0];
    mudançaDeCor.style.backgroundColor = "blueviolet";
}

window.onload = function () {
    let firstColor = document.querySelector("#color1");
    firstColor.classList.add("selected");
    firstColor.style.background = "black";
}

function colorSelector () {
    let color1 = document.querySelector("#color1");
    color1.addEventListener('click', function(event) {
        let activeColor = document.querySelector(".selected");
        activeColor.classList.remove("selected");
        event.target.classList.add("selected");
    })

    let color2 = document.querySelector("#color2");
    color2.addEventListener('click', function(event) {
        let activeColor = document.querySelector(".selected");
        activeColor.classList.remove("selected");
        event.target.classList.add("selected");
    })

    let color3 = document.querySelector("#color3");
    color3.addEventListener('click', function(event) {
        let activeColor = document.querySelector(".selected");
        activeColor.classList.remove("selected");
        event.target.classList.add("selected");
    })

    let color4 = document.querySelector("#color4");
    color4.addEventListener('click', function(event) {
        let activeColor = document.querySelector(".selected");
        activeColor.classList.remove("selected");
        event.target.classList.add("selected");
    })
};
colorSelector ();
