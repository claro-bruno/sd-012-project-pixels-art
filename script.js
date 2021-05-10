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
captureInitialColor.classList.add('selected')

