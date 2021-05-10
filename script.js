function createPixel (size) {
    const table = document.querySelector('#pixel-board');
    table.innerHTML = ''
		for (let line = 0; line < size; line += 1) {
			const linePixels = document.createElement('div');	
		
		for (let column = 0; column < size; column += 1) {
			const columnPixels = document.createElement('div');
			
			columnPixels.className = 'pixel';
			linePixels.className = 'pixel-line';
			linePixels.appendChild(columnPixels);
		};

		table.appendChild(linePixels);

		};

};

createPixel(5);

let captureInitialColor = document.querySelector('.color');
captureInitialColor.classList.add('selected');

let captureColor = document.querySelectorAll('.color');

for (let index = 0; index < captureColor.length; index += 1) {
	captureColor[index].addEventListener('click', (event) => {
		for (let index2 = 0; index2 < captureColor.length; index2 += 1) {
			captureColor[index2].classList.remove('selected');
		}
	    event.target.classList.add('selected');
	})

};


