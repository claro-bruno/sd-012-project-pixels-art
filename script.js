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

// Limpar quadro de pixels

function clearBoard () {
    for(let index = 0; index < pixelsList.length; index += 1) {
        pixelsList[index].style.backgroundColor = "white";
    };
};

document.querySelector("#clear-board").addEventListener("click", clearBoard);

// Redefinir tamanho do Pixel Board

function reSizeBoardPixel () {
    let inputValue = document.querySelector("#board-size").value;

    if (inputValue === "") {
        alert("Board inválido!")
    } else {
        // Reseta PixelBoard
        document.querySelector("tbody").remove();

        // Redefine PixelBoard
        let numOfLines = document.querySelector("#board-size").value;

        for (let index = 0; index < parseInt(numOfLines); index += 1){
            let tableLine = document.createElement("tr");
            
            for (let index2 = 0; index < parseInt(numOfLines); index2 += 1) {
                let pixelPoint = document.createElement("td");
                pixelPoint.className = "pixel";
                tableLine.innerHTML += pixelPoint;
            };

            document.querySelector("table").appendChild(tableLine);
        };
    };
};

let reSizeButton = document.querySelector("#generate-board");

reSizeButton.addEventListener("click", reSizeBoardPixel);
