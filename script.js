let arrayColor = ['black','yellow','red','green'];

for (let index = 0; index < arrayColor.length; index += 1) {
  const divColor = document.createElement('div');
  divColor.className = 'color';
  divColor.style.backgroundColor = arrayColor[index];
  const colorPalette = document.getElementById('color-palette');

  colorPalette.appendChild(divColor);
}

/*
1 - Escolher quais são as cores que eu quero.
2 - A primeira cor tem que ser preta.
3 - Criar um array com as quatro cores.
4 - Acessar o background-color da minha div filho.
5 - Mudar o background-color da minha div.
*/