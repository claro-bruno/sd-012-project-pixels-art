
const areaDiv2 = document.getElementById("div2");
const colors = document.getElementsByClassName("color");
const colorPixel = document.querySelector('.pixel');
const printPixel = document.getElementsByClassName("pixel");

// Populando PixelBoard
function createBoard(row, column) {
    let createTable = document.createElement('table');
    createTable.id = "pixel-board";
    let tbody = document.createElement('tbody');
    areaDiv2.appendChild(createTable)

    for (let index = 0; index < row; index +=1){
        let createrow = document.createElement("tr");
        for (let index = 0; index < row; index +=1){
            let cell = document.createElement("td");
            cell.className = "pixel";
            createrow.appendChild(cell);
        }
        tbody.appendChild(createrow);
    };
    createTable.appendChild(tbody);
}
createBoard(5, 5);

//preenchendo cores da paleta
function paletteColor() {
    const arrayCores = ["black", "orange", "blue", "green"];
    for (let index = 0; index < colors.length; index += 1) {
      colors[index].style.backgroundColor = arrayCores[index];
    };
  };
paletteColor();

//selecionando preto como cor primária
window.onload = function () {
    let firstColor = document.querySelector(".color1");
    firstColor.classList.add("selected");
};

//evento para atribuir .selected ao clicar
function colorselector() {
    let color1 = document.querySelector(".color1");
    color1.addEventListener('click', function(event) {
        let activeColor = document.querySelector(".selected");
        activeColor.classList.remove("selected");
        event.target.classList.add("selected");
    })

    let color2 = document.querySelector(".color2");
    color2.addEventListener('click', function(event) {
        let activeColor = document.querySelector(".selected");
        activeColor.classList.remove("selected");
        event.target.classList.add("selected");
    })
    
    let color3 = document.querySelector(".color3");
    color3.addEventListener('click', function(event) {
        let activeColor = document.querySelector(".selected");
        activeColor.classList.remove("selected");
        event.target.classList.add("selected");
    })

    let color4 = document.querySelector(".color4");
    color4.addEventListener('click', function(event) {
        let activeColor = document.querySelector(".selected");
        activeColor.classList.remove("selected");
        event.target.classList.add("selected");
    })
};
colorselector();


function pixelBoardColor() {
    for (let index = 0; index < printPixel.length; index += 1) {
      printPixel[index].addEventListener('click', (event) => {
        let selectedColor = document.querySelector('.selected');
        let selectedBackgroundColor = window.getComputedStyle(selectedColor).backgroundColor;
        event.target.style.backgroundColor = selectedBackgroundColor;
      });
    };
  };
  pixelBoardColor();