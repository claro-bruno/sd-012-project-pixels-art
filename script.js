const arrayCores = ["black", "purple", "red", "blue"];

const paiPaleta = document.getElementById("color-palette");

function paletaArco(){
   for(let index = 0; index < arrayCores.length; index++){
      const criaPaleta  = document.createElement("p");
      criaPaleta.className = "color";

      criaPaleta.style.background = arrayCores[index];
      criaPaleta.style.borderStyle = "solid";
      criaPaleta.style.borderColor = "black";
      criaPaleta.style.borderWidth = "1px";
      criaPaleta.style.height = "40px";
      criaPaleta.style.width = "40px";
      criaPaleta.style.display = "inline-block";

      paiPaleta.appendChild(criaPaleta);
   };
};
paletaArco();