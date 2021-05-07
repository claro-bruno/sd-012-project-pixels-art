let arrayCores = ["black"];
for(let iCor = 0; iCor < 3; iCor++){
      let r = parseInt(Math.random() * 255)
      let g = parseInt(Math.random() * 255)
      let b = parseInt(Math.random() * 255)
     arrayCores.push("rgb"+"("+r+" ,"+g+" ,"+ b+")");
}
const paiPaleta = document.getElementById("color-palette");
let paiBody = document.getElementById("bodi");
function paletaArco(){
   for(let index = 0; index < arrayCores.length; index++){
      const criaPaleta = document.createElement("p");
      criaPaleta.className = "color";
      criaPaleta.style.background = arrayCores[index];
      criaPaleta.style.borderStyle = "solid";
      criaPaleta.style.borderColor = "black";
      criaPaleta.style.borderWidth = "1px";
      criaPaleta.style.height = "40px";
      criaPaleta.style.width = "40px";
      criaPaleta.style.display = "inline-block"
      criaPaleta.style.marginRight = "15px";
      criaPaleta.style.marginTop = "15px";
      criaPaleta.style.marginBotto = "15px";
      paiPaleta.appendChild(criaPaleta);
   };
   let selecBlack = document.getElementsByClassName("color")[0];
   selecBlack.classList.add("selected");
};
paletaArco();
function quadroPixels(){
   let quadro = document.createElement("section");
   paiBody.appendChild(quadro);
   quadro.id = "pixel-board";
   let paiQuadro = document.getElementById("pixel-board");
   const lupFive = 5; 
   for(let index = 0; index < lupFive; index++){
      let linha = document.createElement("ol");
      paiQuadro.appendChild(linha);
      linha.style.lineHeight = "0";
      linha.style.margin = "0px"; 
      for(let indexOl = 0; indexOl < lupFive; indexOl++){
            let pixel = document.createElement("ul");
            linha.appendChild(pixel);
            pixel.className = "pixel";
            pixel.style.borderStyle = "solid";
            pixel.style.borderColor = "black";
            pixel.style.borderWidth = "1px";
            pixel.style.height = "40px";
            pixel.style.width = "40px";
            pixel.style.display = "inline-block";
            pixel.style.backgroundColor = "white";
            pixel.style.lineHeight = "0";
            pixel.style.margin = "0px"; 
      }
   }
}
quadroPixels();
function botao(){
   let butone = document.createElement("button");
   butone.innerHTML = "Limpar Blocos";
   paiBody.appendChild(butone);
   butone.style.padding = "15px";
   butone.style.margin = "20px";
   butone.addEventListener("click",function(){
      let pegaUls = document.getElementsByTagName("ul");
      for(let index = 0; index < pegaUls.length; index ++){
         pegaUls[index].style.backgroundColor = "white";
      }
   })
}
botao();
function blackSelect(){
      let blackS = document.getElementsByTagName("p")[0].style.backgroundColor;
};
blackSelect();