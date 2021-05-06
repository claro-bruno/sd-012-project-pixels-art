const pixelBoard = document.querySelector('#pixel-board');
let elements = 5;


function pixelBox (linhas) {
    for (let line = 1; line <= linhas; line =+1); {
        const boxIndex = document.createElement("box");
        pixelBoard.appendChild(boxLine);
        pixelBoxColumns(boxLine, linhas);
    }
}

function pixelBoxColumns(line, colunas) {
    for (let column = 1; column <= colunas; column += 1); {
    const boxColumn = document.createElement("box");
    boxColumn.classList.add("pixel");
    line.appendChild(boxColumn);
    }
}
pixelBox(elements);