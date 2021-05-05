function paletteGenerator (){
  let colors = ['black', 'green', 'blue', 'orange'];
  let paletteSection = document.getElementById('color-palette');
  

  for (let index = 0; index< colors.length; index += 1){
    let createDiv = document.createElement('div');
    paletteSection.appendChild(createDiv);
    createDiv.className = 'color';
    createDiv.style.backgroundColor = colors[index];
  }
}
paletteGenerator();