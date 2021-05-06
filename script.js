let pixelLine = 5;
function grid (pixelLine) {
  const pixels = document.getElementById('pixel-board');
  for (let index = 0; index < pixelLine; index += 1) {
    const createDivLine = document.createElement('tr');
    createDivLine.classList.add('line');
    pixels.appendChild(createDivLine);

    for (let indexcolumn = 0; indexcolumn < pixelLine; indexcolumn +=1 ) {
      let createDivColumn = document.createElement('td');
      createDivColumn.classList.add('pixel');
      createDivLine.appendChild(createDivColumn);
    };
  };
};

grid(pixelLine);
