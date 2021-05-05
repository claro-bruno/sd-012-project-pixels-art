// 1 - Adicione à página o título "Paleta de Cores".
// O título deverá ficar dentro de uma tag h1 com o id denominado title;
// O texto do título deve ser exatamente "Paleta de Cores".
// O que será verificado:
// Verifica se contém um elemento h1 com o id title com o título correto

let h1 = document.createElement('h1')
h1.id = 'title'
h1.innerHTML = 'Paleta de Cores'
document.body.appendChild(h1)

