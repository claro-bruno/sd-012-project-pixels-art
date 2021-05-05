function fillBoard (lines, columns) {

    for(let index = 0; index < lines; index += 1) {
        const line_position = document.createElement('div');
        line_position.className = 'line';
        document.querySelector('#pixel-board').appendChild(line_position);

        fillLineBoard(line_position,columns);
    }
}

function fillLineBoard(line,columns) {
    for(let index = 0 ; index < columns; index += 1) {
        const column_position = document.createElement('div');
        column_position.className = 'pixel';
        line.appendChild(column_position);
    }
}

fillBoard (5, 5);