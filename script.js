let paletaCores = document.querySelector('#color-palette');

let listaCores = ['black', 'yellow', 'blue', 'green'];

for (let index = 0; index < listaCores.length; index += 1) {
  let novaCor = document.createElement('li');
  let novaCorSize = '30px';
  novaCor.className = 'color';
  novaCor.style.listStyle = 'none';
  novaCor.style.width = novaCorSize;
  novaCor.style.height = novaCorSize;
  novaCor.style.border = '1px solid black';
  novaCor.style.backgroundColor = listaCores[index];
  paletaCores.appendChild(novaCor);
}
