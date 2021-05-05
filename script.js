// let cor1 = "rgb(0, 0, 0, 1)";
// let cor2 = "rgb(255, 0, 0, 1)";
// let cor3 = "rgb(180, 180, 180, 1)";
// let cor4 = "rgb(0, 255, 0, 1)";

let cor = ["rgb(0, 0, 0, 1)", "rgb(255, 0, 0, 1)", "rgb(0, 100, 255, 1)", "rgb(0, 255, 0, 1)"];

function coresPaleta() {
  let paleta = document.getElementsByClassName("color");
  console.log(paleta);
  for (let index = 0; index < paleta.length; index += 1) {
    paleta[index].setAttribute("id", "cor" + (index+1));
    if (paleta[index].id === ("cor" + (index+1))) {
      console.log("OLÁ");
      paleta[index].style.backgroundColor = cor[index];
    }
  }
}

function criaPixel() {
  let linha = 5;
  let coluna = 5;
  let divLinha = [];
  let idPixel = 1;
  let lugar = document.getElementById("pixel-board");
  for (let indexColuna = 0; indexColuna < coluna; indexColuna += 1) {
    let criaLinha = document.createElement("div");
    criaLinha.setAttribute("class", "linha");
    divLinha.push(criaLinha);
    lugar.appendChild(divLinha[indexColuna]);
    for (let indexLinha = 0; indexLinha < linha; indexLinha += 1) {
        let pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel");
        divLinha[indexColuna].appendChild(pixel);
        pixel.setAttribute("id", "pixel" + idPixel);
        idPixel += 1;
    }
  }
  
  
  // lugar.appendChild(pixel);
}


coresPaleta();
criaPixel();