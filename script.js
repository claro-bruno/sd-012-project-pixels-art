//cria a tabela
let table = document.createElement('table');
table.id = 'pixel-board';
let body = document.body;
for (let i = 0; i < 5; i++) {
  let linha = document.createElement('tr');
  for (let c = 0; c < 5; c++) {
    let coluna = document.createElement('td');
    coluna.className = 'pixel';
    linha.appendChild(coluna);
  }
  table.appendChild(linha);
}
body.appendChild(table);