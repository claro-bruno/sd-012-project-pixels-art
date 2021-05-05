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
        if (paleta[index].id == ("cor"+(index+1))) {
            console.log("OLá");
            paleta[index].style.backgroundColor = cor[index];
        }
    }
}

coresPaleta();  