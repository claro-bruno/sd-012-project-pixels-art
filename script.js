// Criando Palleta

function palleteCreate () {
    let colorPallete = document.querySelector("#color-palette")

    let firstElement = document.createElement("div");
    firstElement.className = "color selected";
    firstElement.style.backgroundColor = "black";

    colorPallete.appendChild(firstElement);


    for (let index = 0; index < 3; index += 1){
        let element = document.createElement("div");
        element.className = "color";
        element.style.backgroundColor = hexColorGeneretor();
        colorPallete.appendChild(element);
    };
};

palleteCreate();

    // Gerar cor aeatória
    // Conceito pego no site WallaceMaxters, disponívem em : https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript;

function hexColorGeneretor () {
    return "#" + parseInt((Math.random() * 0xFFFFFF)).toString(16).padStart(6, "0");
}

// Selecionar a cor

function selectedColor (event){
    let atualSelected = document.querySelector(".selected");
    atualSelected.classList.remove("selected");

    event.target.className = "color selected";
};

let colorsList = document.querySelectorAll(".color");

for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].addEventListener("click", selectedColor);
};

// Pintar Pixel

function coloringPixel (event) {
    let colorSelected = document.querySelector(".selected").style.backgroundColor;
    event.target.style.backgroundColor = colorSelected;
};

let pixelsList = document.querySelectorAll(".pixel");

for(let index = 0; index < pixelsList.length; index += 1) {
    pixelsList[index].style.backgroundColor = "white";
    pixelsList[index].addEventListener("click", coloringPixel);
};