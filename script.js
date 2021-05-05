const quadroPai = document.getElementById("pixel-board");

let board = 5;

for (let index = 0; index < board; index += 1) {
    const newLine = document.createElement("tr");
    newLine.classList.add("pixel");
    newLine.classList.add("line");
    quadroPai.appendChild(newLine);

    for (let columns = 0; columns < board; columns += 1) {
    const newColumn = document.createElement("td");
    newColumn.classList.add("column");
    newColumn.classList.add("pixel");
    newLine.appendChild(newColumn);
    };
};
//Exercício feito com auxílio do colega Rodrigo Facury.
