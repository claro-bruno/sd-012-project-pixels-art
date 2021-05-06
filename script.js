GeraCores();
function GeraCores (){
    const arrayCores =['black', 'red', 'blue', 'orange'];
    const cores = document.querySelectorAll('.color');
    for (let index = 0; index < arrayCores.length; index +=1) {
      cores[index].style.backgroundColor = arrayCores[index];
    } 
}
