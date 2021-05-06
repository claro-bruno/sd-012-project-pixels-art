function palleteCreate () {
    let colorPallete = document.querySelector("#color-palette")

    let firstElement = document.createElement("div");
    firstElement.className = "color selected";
    firstElement.style.backgroundColor = "black";

    colorPallete.appendChild(firstElement);


    for (let index = 0; index < 3; index += 1){
        let element = document.createElement("div");
        element.className = "color";
        element.style.backgroundColor = randomcolor();
        colorPallete.appendChild(element);
    };
};

palleteCreate();


function randomcolor () {
    return "#" + parseInt((Math.random() * 0xFFFFFF)).toString(16).padStart(6, "0");
}


function selectedColor (event){
    let atualSelected = document.querySelector(".selected");
    atualSelected.classList.remove("selected");

    event.target.className = "color selected";
};

let colorsList = document.querySelectorAll(".color");

for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].addEventListener("click", selectedColor);
};


function coloringPixel (event) {
    let colorSelected = document.querySelector(".selected").style.backgroundColor;
    event.target.style.backgroundColor = colorSelected;
};

let pixelsList = document.querySelectorAll(".pixel");

for(let index = 0; index < pixelsList.length; index += 1) {
    pixelsList[index].addEventListener("click", coloringPixel);
};