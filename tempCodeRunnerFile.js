function paleta () {
  let color = '#';
  let simbolos = '0123456789ABCDEF';
  for (let i = 0; i < 6; i += 1) {
color += simbolos[Math.floor(Math.random() * 16)];
console.log(color);
  }
}