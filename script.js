
const areaDiv2 = document.getElementById("div2")

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

window.onload = function () {
    let firstColor = document.querySelector(".color1");
    firstColor.classList.add("selected");
};

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