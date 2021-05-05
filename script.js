let quadrad = document.querySelector('#pixel-board');
let nlinhas = 5;
let nPixels = 5;

function criaTabela () {
    for(index = 0; index < nlinhas; index += 1){
        let criarTr = document.createElement('tr');
        quadrad.appendChild(criarTr);
        for (i = 0; i < nPixels; i += 1){
            let criarTd = document.createElement('td');
            criarTr.appendChild(criarTd);
        }
    }
}
criaTabela();

function classes (){
    let tds = document.querySelectorAll("#pixel-board tr td");
    for (let index = 0; index < tds.length; index += 1){
        tds[index].className = "pixel";
    }
}
classes();

function colocaClassSelected() {
    let corPaleta = document.querySelector("#color-palette");
    let corSelecionada = document.getElementsByClassName("selected");
    corPaleta.addEventListener("click", function (evento) {
      if (corSelecionada.length === 0) {
        evento.target.className = "color selected";
      } else {
        evento.target.className = "color";
      }
    });
  }
  colocaClassSelected();
