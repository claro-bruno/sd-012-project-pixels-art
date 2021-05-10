//Cores da paleta inicial(atribuindo cor aos filhos da div color-palete)
let paleta = document.getElementById("color-palette").childNodes;
let cor = document.getElementsByClassName("color");

// Função gera quadro:
let quadro = document.getElementById("pixel-board");

function quadroPixels(num) {
    for (let index = 0; index < num; index += 1) {
        let linha = document.createElement("div");
        quadro.appendChild(linha);
        for (let index = 0; index < num; index += 1) {
            let coluna = document.createElement("div");
            coluna.className = "pixel"
            quadro.appendChild(coluna);
        }
    }
} 
quadroPixels(5);



//O código não está rodando no npx, por enquanto estou fazendo as ateraçoes de forma manual.
// // Função gera cores: Com referência do stackoverflow.
// function geraCores() {
//     let r = Math.random() * 255;
//     let g = Math.random() * 255;
//     let b = Math.random() * 255;

//     return `rgb(${r}, ${g}, ${b})`;
// }

// for (let index of paleta){
//         paleta[index].style.backgroundColor = (geraCores());

// }

