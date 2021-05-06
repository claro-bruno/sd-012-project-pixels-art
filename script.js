function grid(pixelLine) {
  const pixels = document.getElementById('pixel-board');
  for(let index = 0; index < pixelLine; index += 1) {
    const createDivLine = document.createElement('tr');
    createDivLine.classList.add('line');
    pixels.appendChild(createDivLine);

    for(let indexcolumn = 0; indexcolumn < pixelLine; indexcolumn += 1 ) {
      const createDivColumn = document.createElement('td');
      createDivColumn.classList.add('pixel');
      createDivLine.appendChild(createDivColumn);
    }
  }
}
const pixelLine = 5;
grid(pixelLine);

let elementcolor = document.getElementsByClassName('color');
function colorSelect(event) {
  let select = document.querySelector('.selected')
  select.classList.remove('selected');
  event.target.classList.add('selected');
}
  for(let index = 0; index < elementcolor.length; index += 1) {
    elementcolor[index].addEventListener('click', colorSelect);
} 
