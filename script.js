function alteraCor() {
  const cores = ['black', 'blue', 'red', 'green'];
  let paletaCores = document.querySelectorAll('.color');
  for (let index = 0; index < paletaCores.length; index += 1) {
    paletaCores[index].style.backgroundColor = cores[index];
  }
}
alteraCor();
