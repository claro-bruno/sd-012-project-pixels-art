let quadro = document.getElementById('pixel-board');

function board(num){
  //for(let cont = 0; cont < num; cont += 1)
  for(let i = 0; i < num; i += 1){
    let linha = document.createElement('div');
    quadro.appendChild(linha);
      for(let index = 0; index < num; index += 1){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        quadro.appendChild(pixel);
      }
  }

}
board(5);

document.body.addEventListener('click', function(event){
  if(event.target.className = 'pixel'){
    event.target.style.backgrondColor = 'yellow';
  }
});
