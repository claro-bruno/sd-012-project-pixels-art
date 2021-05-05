let pixelBoard = document.querySelector('#pixel-board');

for (let index = 1; index <= 5; index +=1) {
    for (let index2 = 1; index2 <= 5; index2 +=1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';
        pixel.style.width = '5px';
        pixel.style.height = '5px';
        pixel.style.padding = '0px';
        pixel.style.margin = '0px';
        pixel.style.position = 'relative';
        pixel.style.display = 'inline-block';
        pixel.style.verticalAlign = 'top';
        pixelBoard.appendChild(pixel);
    }
    // if (index !==5) {
    //     let breakLine = document.createElement('br');
    //     pixelBoard.appendChild(breakLine);
    // }
}