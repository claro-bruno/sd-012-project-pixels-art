let frame = document.getElementById("pixel-board");

function frameBoard (size) {
for ( let index=0 ; index < size; index +=1) {
    let linhas = document.createElement("div");
    frame.appenChild(linhas);
for ( let index=0 ; index < size; index +=1) {
    let colunas = document.createElement("div");
    colunas.className = "pixel"   
    frame.appenChild(colunas);
}
}
} 
frameBoard(5);   
 