function createPixelFrame() {
    const board = document.getElementById('pixel-board');
    const elementBoard = document.createElement('div');
    elementBoard.className = 'pixel';
    board.appendChild(elementBoard);
  }
  // Cria Quadro de pixels
  const pixelBoardBase = 5;
  for (let lineIndex = 0; lineIndex < pixelBoardBase; lineIndex += 1) {
    for (let index = 0; index < pixelBoardBase; index += 1) {
      createPixelFrame();
    }