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
    pixelsList[index].addEventListener("click", coloringPixel);
};

// Limpar quadro de pixels

function clearBoard () {
    let pixelsListToClear = document.querySelectorAll(".pixel");

    for(let index = 0; index < pixelsListToClear.length; index += 1) {
        pixelsListToClear[index].style.backgroundColor = "white";
    };
};

document.querySelector("#clear-board").addEventListener("click", clearBoard);

// Redefinir tamanho do Pixel Board

function reSizeBoardPixel () {
    let inputValue = document.querySelector("#board-size").value;

    if (inputValue === "") {
        alert("Board inválido!")
    } else if (inputValue < 5){
        alert("Insira um valor maior que 5!")
    } else if (inputValue > 50){ 
        alert("Insira um valor menor que 50!")
    } else {
        // Reseta PixelBoard
        let lineList = document.querySelectorAll("tr");

        for (let index = 0; index < lineList.length; index += 1){
            lineList[index].remove();
        }

        // Redefine PixelBoard
        let numOfLines = document.querySelector("#board-size").value;

        for (let index = 0; index < parseInt(numOfLines); index += 1){
            let tableLine = document.createElement("tr");
            document.querySelector("table").appendChild(tableLine);
        };

        let List = document.querySelectorAll("tr");

        for (let index = 0; index < parseInt(numOfLines); index += 1){
            for (let index2 = 0; index2 < parseInt(numOfLines); index2 += 1){
                let pixelPoint = document.createElement("td");
                pixelPoint.className = "pixel";
                pixelPoint.style.backgroundColor = "white";
                pixelPoint.addEventListener("click", coloringPixel);
                List[index].appendChild(pixelPoint);
            };
        };
    };

    document.querySelector("#board-size").value = "";
};

let reSizeButton = document.querySelector("#generate-board");

reSizeButton.addEventListener("click", reSizeBoardPixel);

// Adicionando Eventos aos Pixels


