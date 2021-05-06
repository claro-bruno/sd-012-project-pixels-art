// function givePaletteColor(){
//     let colors = ["blue","green","red", "black"];
//     let paletteC = document.querySelectorAll('.color');
//     for (let index = 0; index < paletteC.length; index +=1){
//         for (let index2 = 0; index2 < colors.length; index2 +=1){
//             paletteC[index].style.background = colors[index];
//         }
//     };
// };
let areaDiv2 = document.getElementById("div2")






function createBoard(row, column) {
    let createTable = document.createElement('table');
    createTable.className = "pixel-board";
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